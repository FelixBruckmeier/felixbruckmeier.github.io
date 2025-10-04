# export-code.ps1

# Pfad zum Projekt
$projectPath = "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io"

# Ziel-Datei
$outputFile = "all_code_clean.txt"

# Blacklist für bestimmte Dateien
$blacklist = @(
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml"
)

# Hole alle Dateien rekursiv, aber ohne node_modules, .git und Dateien aus der Blacklist
Get-ChildItem -Path $projectPath -Recurse -File `
  | Where-Object {
      $_.FullName -notmatch "\\node_modules\\" -and
      $_.FullName -notmatch "\\.git\\" -and
      ($blacklist -notcontains $_.Name)
    } `
  | ForEach-Object {
      "### FILE: $($_.FullName)" | Out-File -FilePath $outputFile -Append -Encoding utf8
      Get-Content $_.FullName | Out-File -FilePath $outputFile -Append -Encoding utf8
      "`n`n" | Out-File -FilePath $outputFile -Append -Encoding utf8
    }
