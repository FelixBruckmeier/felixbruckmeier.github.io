# export-clean.ps1
# Exportiert NUR Code-Dateien (kein .git, keine node_modules, keine PNG/JPG, keine Binärdateien)

$projectPath = "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io"
$outputFile = "$projectPath\all_code_clean.txt"

# Alte Datei löschen, falls vorhanden
if (Test-Path $outputFile) { Remove-Item $outputFile }

# Liste der erlaubten Textdateien
$allowedExtensions = @("*.ts", "*.tsx", "*.css", "*.json", "*.html", "*.js", "*.md", "*.yml")

# Wichtige Root-Dateien
$importantFiles = @(
    "index.html",
    "package.json",
    "tsconfig.json",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js"
)

# Root-Dateien exportieren (aber KEIN package-lock.json)
foreach ($file in $importantFiles) {
    if ($file -ne "package-lock.json") {
        $path = Join-Path $projectPath $file
        if (Test-Path $path) {
            Add-Content $outputFile ("==== $file ====")
            Get-Content $path | Add-Content $outputFile
            Add-Content $outputFile "`n"
        }
    }
}

# Rekursiv alle Code-Dateien (aber KEINE Binärdateien!)
Get-ChildItem -Path $projectPath -Recurse -Include $allowedExtensions |
    Where-Object {
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\.git\\" -and
        $_.FullName -notmatch "\\docs\\" -and
        $_.FullName -notmatch "\\dist\\" -and
        $_.Name -ne "package-lock.json" -and
        $_.Extension -notmatch "\.png|\.jpg|\.jpeg|\.gif|\.svg|\.ico|\.pdf"
    } |
    ForEach-Object {
        Add-Content $outputFile ("==== " + $_.FullName.Replace($projectPath, "") + " ====")
        Get-Content $_.FullName | Add-Content $outputFile
        Add-Content $outputFile "`n"
    }

Write-Host "✅ Export abgeschlossen: $outputFile"
