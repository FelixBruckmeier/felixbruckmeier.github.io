# export-clean.ps1
# Exportiert NUR Code-Dateien (kein .git, keine node_modules, keine PNG/JPG, keine Binärdateien)
# und schließt definierte Dateien oder ganze Ordner aus.

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
    $path = Join-Path $projectPath $file
    if (Test-Path $path -and $file -ne "package-lock.json") {
        Add-Content $outputFile ("==== $file ====")
        Get-Content $path | Add-Content $outputFile
        Add-Content $outputFile "`n"
    }
}

# ----------------------------------------------------
# Ausschlüsse
# ----------------------------------------------------

# Einzelne Dateien ausschließen (exakte Muster)
$excludedFilePatterns = @(
    "\\src\\assets\\visuals\\impactmeasurement\\CostOfUX\.tsx",
    "\\src\\assets\\visuals\\impactmeasurement\\HeartFramework\.tsx",
    "\\src\\assets\\visuals\\researchops\\ReOpsWheel\.tsx",
    "\\src\\assets\\visuals\\uxstrategy\\ResearchinPD\.tsx",
    "\\src\\assets\\visuals\\uxstrategy\\ResearchPrioritizationMatrix\.tsx",
    "\\src\\assets\\visuals\\uxstrategy\\VennDiagram\.tsx"
)

# Ganze Ordner (inkl. Unterordner & Dateien) ausschließen
$excludedFolderPatterns = @(
    "\\src\\assets\\visuals\\",
    "\\src\\assets\\visuals\\researchops\\",
    "\\src\\assets\\visuals\\uxstrategy\\"
    "\\src\\components\\sections\\expertise\\impactmeasurement\\"
 "\\src\\components\\sections\\expertise\\strategicuxresearch\\"
 "\\src\\components\\sections\\expertise\\reserachops\\"
"\\src\\components\\sections\\expertise\\TeamLeadership\\"
"\\src\\components\\sections\\expertise\\CV\\"
"\\src\\components\\artefacts\\"
"\\src\\components\\projects\\AtossReOps\\"
"\\src\\components\\projects\\CarInsurance\\"
"\\src\\components\\projects\\DeleteCase\\"
"\\src\\components\\projects\\SwissLife\\"
"\\src\\components\\projects\\ZooplusPricing\\"
"\\src\\components\\projects\\ZooplusReOps\\"
)

# ----------------------------------------------------
# Rekursive Suche & Export
# ----------------------------------------------------
Get-ChildItem -Path $projectPath -Recurse -Include $allowedExtensions |
    Where-Object {
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\.git\\" -and
        $_.FullName -notmatch "\\docs\\" -and
        $_.FullName -notmatch "\\dist\\" -and
        $_.Name -ne "package-lock.json" -and
        $_.Extension -notmatch "\.png|\.jpg|\.jpeg|\.gif|\.svg|\.ico|\.pdf" -and
        ($excludedFilePatterns -notmatch ($_.FullName -replace [regex]::Escape($projectPath), "")) -and
        ($excludedFolderPatterns -notmatch ($_.FullName -replace [regex]::Escape($projectPath), ""))
    } |
    ForEach-Object {
        Add-Content $outputFile ("==== " + $_.FullName.Replace($projectPath, "") + " ====")
        Get-Content $_.FullName | Add-Content $outputFile
        Add-Content $outputFile "`n"
    }

Write-Host "✅ Export abgeschlossen: $outputFile"
