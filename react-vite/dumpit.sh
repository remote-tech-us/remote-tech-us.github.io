#!/bin/bash

# 1. Setup naming
DT=$(date +'%Y_%m_%d')
DTTM=$(date +'%Y_%m_%d-%H%M%S')
OUT="./artifacts/${DT}-project-dump.txt"
if [[ -f "$OUT" ]]; then
  mv "$OUT" "$OUT$$"
fi
SOP_FILE="./artifacts/sop-project-sass.md"
mkdir -p ./artifacts
tree --gitignore -I 'artifacts|docs|.git|__pycache__|venv' >> "$OUT"
echo "  ================================================================================" >> "$OUT"

## Capture all tracked files
#git ls-files src | grep -v '(README.md|.mp4) | while read -r file; do
git ls-files |grep -v package-lock.json | grep -E '\.(js|json|html|jsx|css|py|html|yml|yaml|template|sh|txt|orig)$|Dockerfile' | while read -r file; do
    echo "  Processing $file"
    if [[ "$file" == "dumpit.sh" ]] || [[ "$file" == "$SOP_FILE" ]] || [[ "$file" == "$OUT" ]]; then continue; fi
    echo -e "\n  FILE: $file" >> "$OUT"
    echo "  ------------------------------------------------" >> "$OUT"
    cat "$file" >> "$OUT"
    echo "  ------------------------------------------------" >> "$OUT"
done
