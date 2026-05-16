#!/bin/bash

# ==============================================================================
# Documentation Page Scaffolding Automation Tool
# Target Location: Run this from inside your repository's /dev-docs folder workspace.
# ==============================================================================

echo "============================================="
echo "🚀 Remote Tech Documentation Scaffold Wizard"
echo "============================================="

# 1. Capture High-Level Category Info
read -p "Enter Category Name (e.g., Advanced Architecture): " raw_category
if [ -z "$raw_category" ]; then
    echo "❌ Error: Category name cannot be blank."
    exit 1
fi

# 2. Capture Specific Sub-Topic Info
read -p "Enter Topic/Page Title (e.g., API Rate Limiting): " raw_title
if [ -z "$raw_title" ]; then
    echo "❌ Error: Page title cannot be blank."
    exit 1
fi

# 3. Clean and Format Strings to Safe System Paths
# Converts to lowercase, swaps spaces/symbols for dashes, and trims duplicates
clean_category=$(echo "$raw_category" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/-\+/-/g' -e 's/^-//' -e 's/-$//')
clean_title=$(echo "$raw_title" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/-\+/-/g' -e 's/^-//' -e 's/-$//')

# 4. Generate Order Prefixes Dynamically
# Looks at existing folders to determine the next available index
next_cat_num=$(printf "%02d" $(ls -d [0-9][0-9]-* 2>/dev/null | wc -l))
final_cat_dir="${next_cat_num}-${clean_category}"

# Define the full workspace directory path
target_path="${final_cat_dir}/${clean_title}"

echo "---------------------------------------------"
echo "⚙️ Building Workspace Target: ./${target_path}"
echo "---------------------------------------------"

# 5. Prevent Overwriting Existing Folders
if [ -d "$target_path" ]; then
    echo "⚠️ Target directory already exists! Aborting build safely."
    exit 1
fi

mkdir -p "$target_path"

# 6. Generate Template 1: content.json (The Registration Passport)
cat <<EOF > "${target_path}/content.json"
{
  "title": "${raw_title}",
  "content": "Add a clear, engaging paragraph here summarizing the target content found in this documentation workspace module.",
  "supportedViews": ["console", "markdown", "html"],
  "defaultView": "html",
  "allowCopy": true
}
EOF

# 7. Generate Template 2: workflow.md (The Guide Content)
cat <<EOF > "${target_path}/workflow.md"
### ${raw_title} Overview

Provide background documentation text details here. You can use standard Markdown like **bold elements**, bullet points, or code sections.

#### System Architecture Map

\`\`\`mermaid
graph TD
    A[User Request Initiated] --> B{Validation Logic Check}
    B -->|Passed| C[Execute Workspace Pipeline Process]
    B -->|Failed| D[Throw Error Exception Block]
\`\`\`
EOF

# 8. Generate Template 3: layout.html (The Display Canvas)
cat <<EOF > "${target_path}/layout.html"
<div class="p-6 bg-slate-900/50 border border-blue-500/20 rounded-2xl shadow-xl backdrop-blur-md">
  <h4 class="text-lg font-black text-white mb-2">${raw_title} Live Canvas</h4>
  <p class="text-sm text-gray-300 leading-relaxed">
    This custom presentation window is generated from your local <code>layout.html</code> template file. You can modify this space using utility-first Tailwind CSS design configurations.
  </p>
</div>
EOF

echo "============================================="
echo "🎉 Scaffolding successfully generated!"
echo "============================================="
echo "📁 Your workspace directory is ready at: ./${target_path}"
echo "📝 Files Created: content.json, workflow.md, layout.html"
echo "👉 You can now tweak the content files and submit your PR!"
echo "============================================="
