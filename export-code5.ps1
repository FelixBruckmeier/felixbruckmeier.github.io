# export-files.ps1

# Ordner, die eingelesen werden sollen
$folders = @(
  "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io\src\pages",
  "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io\src\lib",
  "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io\src\components\sections",
  "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io\src\components\artefacts",
  "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io\src\components\ui"
)

# Ziel-Datei
$outputFile = "all_code_export.txt"

# Datei leeren/neu erstellen
"" | Out-File -FilePath $outputFile -Encoding UTF8

foreach ($folder in $folders) {
    if (-Not (Test-Path $folder)) {
        Write-Warning "Ordner nicht gefunden: $folder"
        continue
    }

    # Nur Dateien direkt im Ordner (keine Unterordner)
    $files = Get-ChildItem -Path $folder -File

    foreach ($file in $files) {
        $filePath = $file.FullName
        $content = Get-Content $filePath -Raw

        # Pfad + Code in die Export-Datei schreiben
        "`n`n==============================" | Out-File -FilePath $outputFile -Append -Encoding UTF8
        $filePath | Out-File -FilePath $outputFile -Append -Encoding UTF8
        "==============================`n" | Out-File -FilePath $outputFile -Append -Encoding UTF8
        $content | Out-File -FilePath $outputFile -Append -Encoding UTF8
    }
}

Write-Host "✅ Export fertig! Alles in $outputFile"
