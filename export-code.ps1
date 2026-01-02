# export-clean.ps1
# Exportiert NUR Code-Dateien (kein .git, keine node_modules, keine PNG/JPG, keine Binärdateien)
# und schließt definierte Dateien oder ganze Ordner aus (präzise, ohne andere "components"-Dateien zu treffen).

$projectPath = "C:\Users\felix\Documents\GitHub\felixbruckmeier.github.io"
$outputFile = "$projectPath\all_code_clean.txt"

if (Test-Path $outputFile) { Remove-Item $outputFile }

$allowedExtensions = @("*.ts", "*.tsx", "*.css", "*.json", *.d.ts","*.html", "*.js", "*.md", "*.yml")

$importantFiles = @(
    "index.html",
    "package.json",
    "tsconfig.json",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js"
)

foreach ($file in $importantFiles) {
    $path = Join-Path $projectPath $file
    if (Test-Path $path -and $file -ne "package-lock.json") {
        Add-Content $outputFile ("==== $file ====")
        Get-Content $path | Add-Content $outputFile
        Add-Content $outputFile "`n"
    }
}

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
    "\\src\\assets\\visuals($|\\.*)",
"\\src\\components\\sections($|\\.*)",
    "\\src\\components\\sections\\expertise\\researchops($|\\.*)",
    "\\src\\components\\sections\\expertise\\impactmeasurement($|\\.*)",
    "\\src\\components\\secti11:54 28.11.2025ons\\expertise\\strategicuxresearch($|\\.*)",
    "\\src\\components\\sections\\expertise\\TeamLeadership($|\\.*)",
    "\\src\\components\\projects($|\\.*)",
  
    "\\src\\lib($|\\.*)",
    "\\src\\components\\common($|\\.*)",
    "\\src\\data($|\\.*)",
    "\\src\\pages($|\\.*)",
    "\\src\\assets($|\\.*)",
    "\\.git($|\\.*)",
    "\\.github\\workflows($|\\.*)",
    "\\docs($|\\.*)"
)

Get-ChildItem -Path $projectPath -Recurse -Include $allowedExtensions |
    Where-Object {
        $currentFile = $_
        $currentFile.FullName -notmatch "\\node_modules\\" -and
        $currentFile.FullName -notmatch "\\.git\\" -and
        $currentFile.FullName -notmatch "\\docs\\" -and
        $currentFile.FullName -notmatch "\\dist\\" -and
        $currentFile.Name -ne "package-lock.json" -and
        $currentFile.Extension -notmatch "\.png|\.jpg|\.jpeg|\.gif|\.svg|\.ico|\.pdf" -and
        -not ($excludedFilePatterns | Where-Object { $currentFile.FullName -imatch $_ }) -and
        -not ($excludedFolderPatterns | Where-Object { $currentFile.FullName -imatch $_ })
    } |
    ForEach-Object {
        $currentFile = $_
        Add-Content $outputFile ("==== " + $currentFile.FullName.Replace($projectPath, "") + " ====")
        Get-Content $currentFile.FullName | Add-Content $outputFile
        Add-Content $outputFile "`n"
    }

Write-Host "✅ Export abgeschlossen: $outputFile"
