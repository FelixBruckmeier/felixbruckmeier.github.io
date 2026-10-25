$ErrorActionPreference = 'Stop'

$root = $PSScriptRoot
$outputPath = Join-Path $root 'website-content.md'
$sourcePaths = @(
    'src\App.tsx'
    'src\components'
    'src\content'
    'src\pages'
    'src\styles'
)
$sourceExtensions = @('.css', '.ts', '.tsx')

$sourceFiles = [System.Collections.Generic.List[IO.FileInfo]]::new()

foreach ($sourcePath in $sourcePaths) {
    $fullPath = Join-Path $root $sourcePath
    if (-not (Test-Path -LiteralPath $fullPath)) {
        throw "Website-Quelldatei oder -Verzeichnis nicht gefunden: $fullPath"
    }

    if (Test-Path -LiteralPath $fullPath -PathType Container) {
        $files = Get-ChildItem -LiteralPath $fullPath -File -Recurse -Force |
            Where-Object { $sourceExtensions -contains $_.Extension.ToLowerInvariant() }
    } else {
        $files = @(Get-Item -LiteralPath $fullPath)
    }

    foreach ($file in $files) {
        $sourceFiles.Add($file)
    }
}

$sourceFiles = @($sourceFiles | Sort-Object FullName -Unique)
$sections = [System.Collections.Generic.List[string]]::new()
$sections.Add('# Website-Dokumentation')
$sections.Add('')
$sections.Add('Enthalten sind Routing, Seiten- und Komponentenstruktur, Content-Daten sowie Styles und Design-Tokens. React-Einstiegspunkt, Hooks, Abhaengigkeiten und Build-Konfiguration sind nicht enthalten. Bilder und andere Binaerdateien werden ausgelassen; Bildpfade im Quelltext bleiben als Referenz erhalten.')

foreach ($file in $sourceFiles) {
    $relativePath = $file.FullName.Substring($root.Length).TrimStart('\').Replace('\', '/')
    $bytes = [IO.File]::ReadAllBytes($file.FullName)
    $hasNullByte = $false
    $bytesToCheck = [Math]::Min($bytes.Length, 8192)

    for ($index = 0; $index -lt $bytesToCheck; $index++) {
        if ($bytes[$index] -eq 0) {
            $hasNullByte = $true
            break
        }
    }

    if ($hasNullByte) {
        continue
    }

    $content = [IO.File]::ReadAllText(
        $file.FullName,
        [System.Text.UTF8Encoding]::new($false, $true)
    )
    $longestFence = 2

    foreach ($match in [regex]::Matches($content, '(`{3,})')) {
        $longestFence = [Math]::Max($longestFence, $match.Length)
    }

    $fence = '`' * ($longestFence + 1)
    $sections.Add('')
    $sections.Add("## ``$relativePath``")
    $sections.Add('')
    $sections.Add($fence + 'text')
    $sections.Add($content.TrimEnd("`r", "`n"))
    $sections.Add($fence)
}

$markdown = $sections -join [Environment]::NewLine
[IO.File]::WriteAllText(
    $outputPath,
    $markdown + [Environment]::NewLine,
    [System.Text.UTF8Encoding]::new($false)
)

Write-Output "Erstellt: $outputPath"
Write-Output "Enthaltene Website-Dateien: $($sourceFiles.Count)"
