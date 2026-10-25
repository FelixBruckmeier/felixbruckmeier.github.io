$ErrorActionPreference = 'Stop'

$root = $PSScriptRoot
$nl = "`r`n"
$tick3 = '`' * 3
$structurePath = Join-Path $root 'projektstruktur.md'
$sourcePath = Join-Path $root 'src-code.md'
$excludedFiles = @($structurePath, $sourcePath)

# Ordner, die weder im Baum noch im Export erscheinen
$excludedDirs = @('node_modules', '.git', 'dist', 'build', '.vite', 'coverage')

# Dateien, die nie exportiert werden (Secrets, Lockfiles, Sourcemaps)
$excludedFilePatterns = @('.env', '.env.*', '.npmrc', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', '*.map')

# Wichtige Konfigurationsdateien im Projekt-Root
$rootConfigPatterns = @(
    'package.json', 'index.html', 'vite.config.*', 'tsconfig*.json',
    'tailwind.config.*', 'postcss.config.*', 'eslint.config.*', '.eslintrc*',
    'components.json', 'README.md'
)

# Ordner, deren Inhalt komplett exportiert wird
$contentDirs = @('src', 'public', 'scripts', 'ai', '.github')

# Groessere Dateien werden nur erwaehnt
$maxFileBytes = 300KB

function Get-Lang {
    param($Extension)
    switch ($Extension.ToLower()) {
        '.ts' { return 'ts' }
        '.tsx' { return 'tsx' }
        '.js' { return 'js' }
        '.jsx' { return 'jsx' }
        '.mjs' { return 'js' }
        '.cjs' { return 'js' }
        '.json' { return 'json' }
        '.css' { return 'css' }
        '.scss' { return 'scss' }
        '.html' { return 'html' }
        '.md' { return 'md' }
        '.svg' { return 'xml' }
        '.yml' { return 'yaml' }
        '.yaml' { return 'yaml' }
        '.ps1' { return 'powershell' }
        default { return 'text' }
    }
}

# ---------- Teil 1: Projektstruktur ----------

$treeLines = New-Object System.Collections.ArrayList
$null = $treeLines.Add('felixbruckmeier-site/')

function Add-DirectoryTree {
    param($Directory, $Prefix, $Lines)

    $children = @(
        Get-ChildItem -LiteralPath $Directory -Force |
        Where-Object {
            ($excludedFiles -notcontains $_.FullName) -and
            -not ($_.PSIsContainer -and ($excludedDirs -contains $_.Name))
        } |
        Sort-Object @{ Expression = { if ($_.PSIsContainer) { 0 } else { 1 } } }, Name
    )

    foreach ($child in $children) {
        $childName = $child.Name
        if ($child.PSIsContainer) { $childName += '/' }
        $null = $Lines.Add("$Prefix- $childName")

        $isLink = "$($child.Attributes)" -match 'ReparsePoint'
        if ($child.PSIsContainer -and -not $isLink) {
            Add-DirectoryTree -Directory $child.FullName -Prefix "$Prefix  " -Lines $Lines
        }
    }
}

Add-DirectoryTree -Directory $root -Prefix '' -Lines $treeLines

$structureMarkdown = @(
    '# Projektstruktur'
    ''
    'Verzeichnis- und Dateiliste von felixbruckmeier-site (ohne node_modules, .git, dist, build).'
    ''
    ($tick3 + 'text')
    $treeLines
    $tick3
) -join $nl

Set-Content -LiteralPath $structurePath -Value $structureMarkdown -Encoding UTF8

# ---------- Teil 2: Code-Export ----------

function Test-Excluded {
    param($File)
    foreach ($pattern in $excludedFilePatterns) {
        if ($File.Name -like $pattern) { return $true }
    }
    $rel = $File.FullName.Substring($root.Length)
    foreach ($dir in $excludedDirs) {
        if ($rel -like "*\$dir\*") { return $true }
    }
    return $false
}

$files = New-Object System.Collections.ArrayList

foreach ($pattern in $rootConfigPatterns) {
    Get-ChildItem -LiteralPath $root -File -Force -Filter $pattern -ErrorAction SilentlyContinue |
    ForEach-Object { $null = $files.Add($_) }
}

foreach ($dir in $contentDirs) {
    $fullDir = Join-Path $root $dir
    if (Test-Path -LiteralPath $fullDir) {
        Get-ChildItem -LiteralPath $fullDir -File -Force -Recurse |
        Sort-Object FullName |
        ForEach-Object { $null = $files.Add($_) }
    }
    else {
        Write-Output "Hinweis: Ordner $dir nicht gefunden, uebersprungen."
    }
}

$sourceSections = New-Object System.Collections.ArrayList
$null = $sourceSections.Add('# Quellcode')
$null = $sourceSections.Add('')
$null = $sourceSections.Add('Root-Konfiguration sowie ' + ($contentDirs -join ', ') + '. Secrets (.env, .npmrc) und Lockfiles sind ausgeschlossen.')

$seen = @{}
$exported = 0
foreach ($file in $files) {
    if ($seen.ContainsKey($file.FullName)) { continue }
    $seen.Add($file.FullName, $true)
    if (Test-Excluded -File $file) { continue }

    $relativePath = $file.FullName.Substring($root.Length).TrimStart('\').Replace('\', '/')
    $null = $sourceSections.Add('')
    $null = $sourceSections.Add("## $relativePath")
    $null = $sourceSections.Add('')

    if ($file.Length -gt $maxFileBytes) {
        $null = $sourceSections.Add("(Ausgelassen: Datei zu gross, $($file.Length) Bytes)")
        continue
    }

    if ($file.Length -gt 0) {
        $bytes = Get-Content -LiteralPath $file.FullName -Encoding Byte -TotalCount 8192 -ReadCount 0
        if ($bytes -contains 0) {
            $null = $sourceSections.Add("(Binaerdatei ausgelassen, $($file.Length) Bytes)")
            continue
        }
    }

    $content = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8
    if ($null -eq $content) { $content = '' }

    $longestFence = 2
    $found = $content | Select-String -Pattern '`{3,}' -AllMatches
    if ($found) {
        foreach ($match in $found.Matches) {
            if ($match.Length -gt $longestFence) { $longestFence = $match.Length }
        }
    }
    $fence = '`' * ($longestFence + 1)
    $lang = Get-Lang -Extension $file.Extension

    $null = $sourceSections.Add($fence + $lang)
    $null = $sourceSections.Add($content.TrimEnd("`r", "`n"))
    $null = $sourceSections.Add($fence)
    $exported++
}

Set-Content -LiteralPath $sourcePath -Value ($sourceSections -join $nl) -Encoding UTF8

Write-Output "Erstellt: $structurePath"
Write-Output "Erstellt: $sourcePath ($exported Textdateien exportiert)"