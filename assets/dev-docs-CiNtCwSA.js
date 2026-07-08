import{j as e,ad as N,ae as E,r as c,af as T,ag as A,ah as P,ai as O,aj as F,w as v,ak as $,al as V,n as R,am as z,an as I,ao as B,ap as L,aq as W,ar as H}from"./vendor-C811conn.js";import{G as _}from"./index-wyWLfU7B.js";T.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose",themeVariables:{background:"transparent"}});function G({chartCode:t}){const[a,n]=c.useState(""),[r,u]=c.useState(null);return c.useEffect(()=>{let i=!0;const m="mermaid-render-"+Math.random().toString(36).substring(2,11);async function p(){try{u(null);const s=t.replace(/\u00a0/g," ").replace(/\r/g,`
`).trim();if(!s)return;const{svg:d}=await T.render(m,s);i&&n(d)}catch(s){console.error("Mermaid Render Fail:",s),i&&u("Invalid diagram structure or syntax.");const d=document.getElementById(`d${m}`);d&&d.remove()}}return p(),()=>{i=!1}},[t]),r?e.jsxs("div",{className:"p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-xl text-xs font-mono my-4 w-full",children:["⚠️ ",e.jsx("strong",{children:"Diagram Parse Error:"})," Verify layout nodes or missing quote markers."]}):a?e.jsx("div",{className:"mermaid-graph-svg my-6 flex justify-center bg-black/30 p-6 rounded-xl border border-white/5 overflow-x-auto w-full",dangerouslySetInnerHTML:{__html:a}}):e.jsx("div",{className:"text-xs text-gray-500 font-mono animate-pulse my-6 text-center w-full",children:"Generating diagram workflow..."})}function q({content:t}){return e.jsx("div",{className:"markdown-preview-wrapper text-gray-200 prose prose-sm prose-invert max-w-none",children:e.jsx(N,{remarkPlugins:[E],components:{pre({children:a}){var n;return a&&a.props&&((n=a.props.className)!=null&&n.includes("language-mermaid"))?e.jsx(e.Fragment,{children:a}):e.jsx("pre",{children:a})},code({node:a,inline:n,className:r,children:u,...i}){const m=/language-mermaid/.exec(r||""),p=String(u).replace(/\n$/,"");return!n&&m?e.jsx(G,{chartCode:p}):e.jsx("code",{className:r,...i,children:u})}},children:t})})}const U=`# Documentation Platform Blueprint & Scaffolding Architecture

This document serves as the foundational design system blueprint for adding new chapters, pages, and interactive presentation modules to the documentation tree.

---

## 1. Directory Tree Schema

Below is the structured file matrix for the repository. This diagram shows how the workspace can smoothly grow from core framework components into deep architectural features:

\`\`\`mermaid
graph TD
    %% Base Project Hub
    root[📂 dev-docs] --- cat0[📂 00-documentation-engine]
    
    %% Nested Section Hubs
    cat0 --- page1[📂 01-intro]
    cat0 --- page2[📂 02-core-features]
    
    %% 00-documentation-engine Core Target Files
    page1 --- f1[📄 content.json]
    page1 --- f2[📄 layout.html]
    page1 --- f3[📄 setup.sh]
    page1 --- f4[📄 workflow.md]

    %% 02-core-features Target Files
    page2 --- c1[📄 content.json]
    page2 --- c2[📄 layout.html]
    page2 --- c3[📄 schema-model.yml]
    page2 --- c4[📄 workflow.md]
    
    %% Style Highlights
    classDef required stroke:#EF4444,stroke-width:2px,fill:#7F1D1D,color:#FFF;
    classDef optional stroke:#3B82F6,stroke-width:1px,fill:#1E3A8A,color:#FFF;
    classDef utility stroke:#10B981,stroke-width:1px,fill:#064E3B,color:#FFF;
    
    class f1,c1 required;
    class f2,f4,c2,c3,c4 optional;
    class f3 utility;
\`\`\`
---

### ⚠️ IMPORTANT: Structural Boundary Rules (Lateral vs. Depth Expansion)

The documentation compiler utilizes a **strict flat-hierarchy engine**. It maps folder structures dynamically by evaluating exactly two structural layers relative to the target asset file. 

* **The Rule:** The engine reads \`parts[parts.length - 2]\` as the **Page Identifier** and \`parts[parts.length - 3]\` as the **Category Identifier**.
* **The Constraint:** The filesystem expands **laterally, not deeply**. Creating deeply nested folders (e.g., 4, 5, or 6 levels deep) will **not** generate nested sub-menus. Instead, the data-loader will evaluate whatever folder sits directly above \`content.json\` as the page, and its parent as the category, ignoring everything else above it.

#### 🚫 What Happens During Deep Nesting (The Compression Bug)
If you attempt to create a deeply nested path like this:
\`📂 02-core-features\` ➔ \`📂 security\` ➔ \`📂 advanced\` ➔ \`📂 tokens\` ➔ \`📄 content.json\`

The system will compress and interpret it strictly like this:

\`\`\`mermaid
graph TD
    %% Actual Hierarchy vs Parsed Hierarchy
    subgraph Conceptual Intent [What the Contributor Thinks Will Happen]
        root1[📂 dev-docs] --- c1[📂 02-core-features]
        c1 --- s1[📂 security]
        s1 --- a1[📂 advanced]
        a1 --- t1[📂 tokens]
        t1 --- j1[📄 content.json]
    end

    subgraph Compiler Reality [What the Data-Loader Actually Renders]
        root2[📂 dev-docs] --- cat_parsed[📂 advanced]
        cat_parsed --- page_parsed[📂 tokens]
        page_parsed --- j2[📄 content.json]
    end

    style Conceptual Intent fill:#1e1e2e,stroke:#313244
    style Compiler Reality fill:#11111b,stroke:#f38ba8,stroke-width:2px
\`\`\`
`,Y=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),X=`<!-- Save this exact code block as content-rules.html inside your target folder -->
<div class="p-6 bg-slate-900/40 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md">

  <!-- Header Block Section -->
  <div class="flex items-center gap-3 mb-6">
    <div class="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    </div>
    <div>
      <!--{/* Starts small on mobile, scales up nicely on desktop without exploding */}-->
      <h1 className="text-fluid-h1">
        Validation Rules &amp; Parameters Matrix
      </h1>
      <p className="text-xs text-gray-400 font-mono">
        Target Blueprint Filter: content.json Parsing Engine
      </p>
    </div>
  </div>

  <!-- Responsive Table Wrapper Layer -->
  <div class="overflow-x-auto rounded-xl border border-white/5 bg-black/20">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-white/10 bg-white/5 text-[11px] font-black uppercase tracking-wider text-gray-400 font-sans">
          <th class="py-3 px-4">Parameter Name</th>
          <th class="py-3 px-4">Data Type</th>
          <th class="py-3 px-4 text-center">Status</th>
          <th class="py-3 px-4">Definition & Operational Purpose</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5 font-sans text-sm text-gray-300">

        <!-- Parameter 1: title -->
        <tr class="hover:bg-white/[0.02] transition-colors">
          <td class="py-3.5 px-4 font-mono font-bold text-blue-400">title</td>
          <td class="py-3.5 px-4 text-xs font-mono text-purple-400">String</td>
          <td class="py-3.5 px-4 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black tracking-wide uppercase bg-red-500/10 text-red-400 border border-red-500/20">Required</span>
          </td>
          <td class="py-3.5 px-4 leading-relaxed text-gray-300">
            The explicit presentation name of the documentation page. It directly hydrates the primary workspace <code class="text-xs text-white font-mono bg-white/5 px-1 rounded">&lt;h1&gt;</code> element header and breadcrumb nav trails.
          </td>
        </tr>

        <!-- Parameter 2: content -->
        <tr class="hover:bg-white/[0.02] transition-colors">
          <td class="py-3.5 px-4 font-mono font-bold text-blue-400">content</td>
          <td class="py-3.5 px-4 text-xs font-mono text-purple-400">String</td>
          <td class="py-3.5 px-4 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black tracking-wide uppercase bg-red-500/10 text-red-400 border border-red-500/20">Required</span>
          </td>
          <td class="py-3.5 px-4 leading-relaxed text-gray-300">
            A high-level text overview or summary block. This raw text string is placed right underneath your main title text as an opening paragraph section.
          </td>
        </tr>

        <!-- Parameter 3: supportedViews -->
        <tr class="hover:bg-white/[0.02] transition-colors">
          <td class="py-3.5 px-4 font-mono font-bold text-blue-400">supportedViews</td>
          <td class="py-3.5 px-4 text-xs font-mono text-purple-400">Array</td>
          <td class="py-3.5 px-4 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">Optional</span>
          </td>
          <td class="py-3.5 px-4 leading-relaxed text-gray-300">
            Explicitly controls which view mode selector buttons are rendered. Acceptable values within the array wrapper are: <code class="text-xs font-mono text-yellow-400">"console"</code>, <code class="text-xs font-mono text-yellow-400">"html"</code>, or <code class="text-xs font-mono text-yellow-400">"markdown"</code>.
          </td>
        </tr>

        <!-- Parameter 4: defaultView -->
        <tr class="hover:bg-white/[0.02] transition-colors">
          <td class="py-3.5 px-4 font-mono font-bold text-blue-400">defaultView</td>
          <td class="py-3.5 px-4 text-xs font-mono text-purple-400">String</td>
          <td class="py-3.5 px-4 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">Optional</span>
          </td>
          <td class="py-3.5 px-4 text-wide leading-relaxed text-gray-300">
            Forcefully dictates which view interface is chosen by default during the initial folder mount. This overrides the automatic state engine logic waterfall checklist loop (<code class="text-xs font-mono text-gray-400">html ➔ markdown ➔ console</code>).
          </td>
        </tr>

        <!-- Parameter 5: allowCopy -->
        <tr class="hover:bg-white/[0.02] transition-colors">
          <td class="py-3.5 px-4 font-mono font-bold text-blue-400">allowCopy</td>
          <td class="py-3.5 px-4 text-xs font-mono text-purple-400">Boolean</td>
          <td class="py-3.5 px-4 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-black tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">Optional</span>
          </td>
          <td class="py-3.5 px-4 leading-relaxed text-gray-300">
            Enables or disables visibility for the copy action control icon button on the terminal sub-header layout strip. Defaults internally to <code class="text-xs font-mono text-emerald-400">true</code> if left completely undefined.
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  <!-- Commentary / System Footer Alerts -->
  <div class="mt-4 p-3.5 bg-amber-500/5 border border-amber-500/20 rounded-xl flex gap-3">
    <span class="text-amber-500 text-base flex-shrink-0 mt-0.5">💡</span>
    <div class="text-xs text-gray-400 leading-relaxed font-sans w-full">
      <strong class="text-amber-500/90 block mb-1 font-bold">Architecture Review Commentary:</strong>
      Every single subdirectory located within the <code class="text-xs text-white font-mono bg-white/5 px-1 rounded">/dev-docs/</code> pipeline framework requires a valid <code class="text-xs text-white font-mono bg-white/5 px-1 rounded">content.json</code> file to serve as its validation checkpoint entry card. If this file is missing, the compile-time data compiler will treat the directory as unassigned space and drop it completely from the dynamic sidebar rendering loop.<br />
      
      <p class="mt-2 mb-1">The <code class="text-xs text-white font-mono bg-white/5 px-1 rounded">Sidebar Stack Order</code> is derived from the folder names:</p>
      
      <!-- Monospaced Fixed Tree Container Layout -->
      <pre class="font-mono text-[11px] text-gray-400 bg-black/30 p-3 rounded-lg border border-white/5 overflow-x-auto leading-normal">
├── dev-docs                           <-- Document Root Folder
│   ├── 00-documentation-engine        <-- Document Sidebar Section Header
│   │   ├── 01-intro                   <-- Document Sidebar Section Card
│   │   │   ├── blueprint.md
│   │   │   ├── content-rules.html
│   │   │   ├── content.json
│   │   │   ├── setup.sh
│   │   │   └── workflow.md</pre>
      
      <p class="mt-2">
        The default syntax is <code class="text-xs font-mono text-gray-300">XX_Name</code> where XX equals a two-digit integer.<br />
        If XX is missing, the order is derived alphabetically.
      </p>
    </div>
  </div>

</div>
`,J=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),K=`{
  "title": "Introduction",
  "content": "Welcome to the Remote Tech documentation platform. Our infrastructure is built on the principle of data sovereignty and open-source excellence.",
  "supportedViews": ["console", "html", "markdown"],
  "allowCopy": true
}
`,Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Z=`#!/bin/bash
# ==============================================================================
# Documentation Page Scaffolding Automation Tool
# ==============================================================================
echo "  ============================================="
echo "   🚀 Remote Tech Documentation Scaffold Wizard"
echo "  ============================================="
DEV_DOCS=$(echo "\${PWD%/*/*}"|sed s'!dev-docs/.*!dev-docs!')

if [[ "$DEV_DOCS" == *dev-docs* ]]; then
  echo "   Found dev-docs root folder: $DEV_DOCS"
else
  read -p "  Enter output path:" DEV_DOCS
  if [[ -d "$DEV_DOCS" ]]; then
      echo "  ❌ Error: Invalid Path: $DEV_DOCS"
      exit 1
  fi
fi
cd "$DEV_DOCS" || exit 1
tree $DEV_DOCS

# 1. Capture High-Level Category Info with Existence Verification
while true; do
  read -p "  Enter Category Name (e.g., Advanced Architecture): " raw_category
  if [ -z "$raw_category" ]; then
      echo "  ❌ Error: Category name cannot be blank."
      exit 1
  fi

  # Clean and Format Category String to Safe System Path
  clean_category=$(echo "$raw_category" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/-\\+/-/g' -e 's/^-//' -e 's/-$//')

  # Check if a section header folder with this cleaned name already exists
  existing_cat_dir=$(ls -d [0-9][0-9]-"\${clean_category}" 2>/dev/null | head -n 1)

  if [ -n "$existing_cat_dir" ] && [ -d "$existing_cat_dir" ]; then
      echo "  ℹ️  Section folder already exists: \${existing_cat_dir}"
      read -p "  --> Add new card to this existing section? (y/n): " action_choice
      case "$action_choice" in
          [Yy]* )
              final_cat_dir="$existing_cat_dir"
              break
              ;;
          * )
              echo "  Let's provide a different category name."
              echo "  ---------------------------------------------"
              ;;
      esac
  else
      # Generate Order Prefixes Dynamically if it's a completely new section
      next_cat_num=$(printf "%02d" $(ls -d [0-9][0-9]-* 2>/dev/null | wc -l))
      final_cat_dir="\${next_cat_num}-\${clean_category}"
      break
  fi
done

# 2. Capture Specific Sub-Topic Info with Duplicate Card Verification
while true; do
  read -p "  Enter Topic/Page Title (e.g., API Rate Limiting): " raw_title
  if [ -z "$raw_title" ]; then
      echo "  ❌ Error: Page title cannot be blank."
      exit 1
  fi

  # Clean and Format Title String to Safe System Path
  clean_title=$(echo "$raw_title" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/-\\+/-/g' -e 's/^-//' -e 's/-$//')

  # Define the full workspace directory path
  target_path="\${final_cat_dir}/\${clean_title}"

  # Check if this target card already exists under the selected section
  if [ -d "$target_path" ]; then
      echo "  ⚠️  Error: The card '\${clean_title}' already exists inside '\${final_cat_dir}'!"
      echo "  Please choose a different page title for this section."
      echo "  ---------------------------------------------"
  else
      # Path is clean, safe to exit loop and create files
      break
  fi
done

echo "  ---------------------------------------------"
echo "  ⚙️  Building Workspace Target: \${target_path}"
echo "  ---------------------------------------------"

mkdir -p "$target_path"

# 3. Generate Template 1: content.json (The Registration Passport)
cat <<EOF > "\${target_path}/content.json"
{
  "title": "\${raw_title}",
  "content": "Add a clear, engaging paragraph here summarizing the target content found in this documentation workspace module.",
  "supportedViews": ["console", "markdown", "html"],
  "defaultView": "html",
  "allowCopy": true
}
EOF

# 4. Generate Template 2: workflow.md (The Guide Content)
cat <<EOF > "\${target_path}/workflow.md"
### \${raw_title} Overview

Provide background documentation text details here. You can use standard Markdown like **bold elements**, bullet points, or code sections.

#### System Architecture Map

\\\`\\\`\\\`mermaid
graph TD
    A[User Request Initiated] --> B{Validation Logic Check}
    B -->|Passed| C[Execute Workspace Pipeline Process]
    B -->|Failed| D[Throw Error Exception Block]
\\\`\\\`\\\`
EOF

# 5. Generate Template 3: layout.html (The Display Canvas)
cat <<EOF > "\${target_path}/layout.html"
<div class="p-6 bg-slate-900/50 border border-blue-500/20 rounded-2xl shadow-xl backdrop-blur-md">
  <h4 class="text-lg font-black text-white mb-2">\${raw_title} Live Canvas</h4>
  <p class="text-sm text-gray-300 leading-relaxed">
    This custom presentation window is generated from your local <code>layout.html</code> template file. You can modify this space using utility-first Tailwind CSS design configurations.
  </p>
</div>
EOF

echo "  ============================================="
echo "  🎉 Scaffolding successfully generated!"
echo "  ============================================="
echo "  📁 Your workspace directory is ready at: \${DEV_DOCS}/\${target_path}"
echo "  📝 Files Created: content.json, workflow.md, layout.html"
echo "  👉 You can now tweak the content files and submit your PR!"
echo "  ============================================="
`,ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),te=`### Markdown Mode - This is the workflow.md file

* Item 1
* Item 2

You can use **bold text** here.

Below is the state workflow for routing active API requests:

\`\`\`mermaid
graph TD
    A[Client Request] --> B{Is Token Valid?}
    B -- Yes --> C[Proceed to Route Component]
    B -- No --> D[Redirect to /login]
    D --> E[Clear Cache Session]
`,ne=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),oe=`{
  "title": "Core Features",
  "content": "An executive analysis of the unified data-loader subsystem. This layout breaks down how a reactive front-end maps flat files directly into contextual view layers dynamically.",
  "supportedViews": ["console", "html", "markdown"],
  "allowCopy": true,
  "defaultView": "markdown"
}
`,ae=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),re=`<div class="p-6 bg-slate-900/50 border border-blue-500/30 rounded-2xl shadow-xl backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-blue-500/10 rounded-lg text-blue-400">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    </div>
    <div>
      <h4 class="text-lg font-black text-white tracking-wide">HTML Sandbox Environment Ready</h4>
      <p class="text-xs text-gray-400 font-mono">Scope: dev-docs/00-Fundamental-Features/core-architecture/</p>
    </div>
  </div>
  
  <p class="text-sm text-gray-300 leading-relaxed mb-4">
    This custom layout preview is rendered safely from the <code>layout.html</code> template asset file. All global Tailwind styles automatically apply within this container workspace.
  </p>

  <div class="grid grid-cols-2 gap-3 text-xs font-mono">
    <div class="p-2.5 bg-black/40 rounded-lg border border-white/5">
      <span class="text-green-400 block mb-1">✓ Sandbox Isolation</span>
      <span class="text-gray-500">Safe HTML Injection</span>
    </div>
    <div class="p-2.5 bg-black/40 rounded-lg border border-white/5">
      <span class="text-blue-400 block mb-1">✓ Tailwind Utility</span>
      <span class="text-gray-500">Fully Styled Context</span>
    </div>
  </div>
</div>
`,se=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),ie=`system:
  engine: "Vite Asset Compile Macro"
  strategy: "import.meta.glob"
  capabilities:
    - automatic-extension-detection
    - contextual-dropdown-filtering
    - sandboxed-html-parsing
    - raw-source-inspection
  supported-formats:
    - .json
    - .md
    - .html
    - .sh
    - .yml
`,le=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),de=`### Universal Data Extraction Framework

The data-loader utility is optimized to bypass runtime server restrictions by evaluating local assets during compile time. This ensures fast documentation loading speeds and robust type-safe mapping.

#### Key Mechanics

*   **Context Isolation:** Evaluates raw string literals (\`?raw\`) to avoid runtime executions.
*   **Reactive Filtering:** Computes the dropdown choices dynamically based on your chosen display mode.
*   **Dual-Role Inspector:** Allows structural markup files (\`.html\`, \`.md\`) to be parsed as code inside the Console tab, or executed as native components in their respective preview panels.

Below is the state workflow map for how files are processed:

\`\`\`mermaid
graph TD
    A[Vite Compiles Directory Matrix] --> B{What File Type?}
    B -->|content.json| C[Hydrate Sidebar & Page Titles]
    B -->|.html / .md| D[Register Source Code AND Render Preview Capability]
    B -->|.sh / .yml| E[Route Exclusively to Console Tab List]
    
    F[User Interface Select Switches] --> G{Active Mode?}
    G -->|Console Mode| H[Show Every File as Code Syntax]
    G -->|Markdown Mode| I[Filter Selector to MD Files + Parse Elements]
    G -->|HTML Mode| J[Filter Selector to HTML Files + Render Layout Canvas]
`,ce=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),pe=`{
  "title": "SEO & Performance Audit Report May 16, 2026",
  "content": "Comprehensive enterprise-grade search engine optimization crawl analysis.",
  "supportedViews": ["html"],
  "defaultView": "html",
  "allowCopy": false,
  "isExternalAsset": true,
   "assetPath": "/remote-tech.us-20260516T145346.html"
}
`,ue=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"})),me=`### SEO Matrix Overview

Provide background documentation text details here. You can use standard Markdown like **bold elements**, bullet points, or code sections.

#### System Architecture Map

\`\`\`mermaid
graph TD
    A[User Request Initiated] --> B{Validation Logic Check}
    B -->|Passed| C[Execute Workspace Pipeline Process]
    B -->|Failed| D[Throw Error Exception Block]
\`\`\`
`,he=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),ge=`{
  "title": "CASDM - Customizations Warnings",
  "content": "Anything to do with SPEL code will not be supported regardless of who completed the work.",
  "supportedViews": ["console"],
  "allowCopy": false
}
`,fe=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),xe=`<div class="space-y-6">

  <!-- Callout 1: Administrative Changes -->
  <div class="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
    <div class="flex items-center gap-2 text-yellow-500 font-bold mb-3">
      <span>⚠️</span>
      <h4 class="text-sm uppercase tracking-wider">WARNING: Administrative Changes are Supported</h4>
    </div>
    <ul class="list-disc pl-5 space-y-2 text-sm text-gray-300">
      <li>Any “modifications” or “adaptions” or “configurations” that are done administratively through the interface (web browser, command-line, Web Screen Painter) are <strong class="text-white">“supported”</strong>, meaning CA Support can assist with basic suggestions and trouble-shooting.</li>
      <li>CA Support <strong class="text-white">does not</strong> do the changes for the customer.</li>
      <li><em class="text-gray-400">Examples:</em> Web Screen Painter form changes or Options Manager features.</li>
    </ul>
  </div>

  <!-- Callout 2: Code Customizations -->
  <div class="p-5 bg-red-500/10 border border-red-500/30 rounded-xl">
    <div class="flex items-center gap-2 text-red-400 font-bold mb-3">
      <span>🛑</span>
      <h4 class="text-sm uppercase tracking-wider">CAUTION: Code Customizations are NOT Supported</h4>
    </div>
    <p class="text-sm text-gray-300 leading-relaxed">
      Anything to do with <strong class="text-white">SPEL code, Java scripting</strong>, or underlying base code-line changes is <span class="text-red-400 font-bold">not supported by CA Support</span>. The customer is entirely responsible for maintenance. If issues arise, CA Support will ask you to <strong class="text-white">remove these customizations</strong> to troubleshoot.
    </p>
  </div>

  <!-- Callout 3: Format Validation -->
  <div class="p-5 bg-orange-500/10 border border-orange-500/30 rounded-xl">
    <div class="flex items-center gap-2 text-orange-400 font-bold mb-3">
      <span>⚠️</span>
      <h4 class="text-sm uppercase tracking-wider">WARNING: Configuration Format Validation</h4>
    </div>
    <p class="text-sm text-gray-300 leading-relaxed">
      Any general configuration defined for CA Service Desk Manager <strong class="text-white">must be in the valid format</strong> to avoid erroneous values for the parameters.
    </p>
  </div>
</div>
<!-- Add this anchor button layout block inside your layout.html file -->
<div class="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
  <span class="text-xs text-gray-500 font-mono">Reference Material:</span>
  
  <a href="https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/pdf/ca-enterprise-software/business-management/ca-service-management/casm174/ca-service-management-17-4.pdf" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="inline-flex items-center gap-1.5 text-xs bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-bold px-3 py-1.5 rounded-lg border border-blue-500/20 transition-all group">
    <span>CA Service Desk Manager 17.4 Doc Ref: pg. 940</span>
    <!-- External Arrow SVG icon that nudges right on hover -->
    <svg class="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
  </a>
</div>
`,be=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"})),we=`> ⚠️ **WARNING: Administrative Changes are Supported**[^1]
> 
> * Any “modifications” or “adaptions” or “configurations” that are done administratively through the interface (web browser, command-line, Web Screen Painter) are **“supported”**, meaning CA Support can assist with basic suggestions and trouble-shooting.
> * CA Support **does not** do the changes for the customer.
> * *Examples:* Web Screen Painter form changes or Options Manager features.

> 🛑 **CAUTION: Code Customizations are NOT Supported**
> 
> Anything to do with **SPEL code, Java scripting**, or underlying base code-line changes is **not supported by CA Support**. The customer is entirely responsible for maintenance. If issues arise, CA Support will ask you to **remove these customizations** to troubleshoot.

> ⚠️ **WARNING: Configuration Format Validation**
> 
> Any general configuration defined for CA Service Desk Manager **must be in the valid format** to avoid erroneous values for the parameters.

---
[^1]: [**CA Service Management 17.4 Doc Ref: pg. 940**](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/pdf/ca-enterprise-software/business-management/ca-service-management/casm174/ca-service-management-17-4.pdf)
`,ye=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"})),ve=`{
  "title": "CASDM - Web Screen Painter",
  "content": "Use the Schema Designer of Web Screen Painter to modify the database schema of CA SDM. Schema Designer provides a graphical user interface to review and modify this schema.",
  "supportedViews": ["console"],
  "allowCopy": false
}
`,_e=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),ke=`The following diagram shows how to modify the schema using Web Screen Painter:
# How to Modify the Schema Using Web Screen Painter

\`\`\`mermaid
flowchart TD
    A[Service Desk Administrator] --> B{Open Schema Designer on WSP}
    
    %% Outer completely invisible container to hold the floating bold text
    subgraph OUT [ ]
        direction TD
        TITLE["\`**Schema Work**\`"]
        
        %% Inner actual group box
        subgraph WORK [ ]
            direction LR
            AddTable[Add a Table] ~~~ AddColumn[Add a Column] ~~~ Modify[Modify a Table or Column]
        end
    end
    
    %% Style rules to hide the outer box wrapper and remove inner labels
    style OUT fill:none,stroke:none
    style TITLE fill:none,stroke:none,font-size:16px
    
    B --> WORK
    WORK --> D[Test Schema Modifications]
    D --> E{Schema modifications are correct?}
    
    E -- Yes --> G[Publish Schema Modifications]
    G --> H[Modify Site-Defined Columns]
    E -- No --> F[Revert Schema Modifications]

`,Se=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),je=`{
  "title": "Architecture",
  "content": "",
  "supportedViews": ["console", "html", "markdown"],
  "allowCopy": true
}
`,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),Te=`<div class="space-y-4">
  <div class="p-5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
    <h4 class="text-emerald-400 font-bold flex items-center gap-2 mb-1">
      <span>🚀</span> Core Architectural Principle
    </h4>
    <p class="text-sm text-gray-300 leading-relaxed">
      Our services run completely stateless. State configurations, cache layers, and persistent volumes are decoupled from processing nodes to ensure instant failover orchestration.
    </p>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
      <span class="text-xs font-bold text-blue-400 block mb-1">Ingress Controller</span>
      <p class="text-xs text-gray-400">Traefik edges incoming reverse-proxy requests, enforcing TLS terminations and routing pathways natively.</p>
    </div>
    <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
      <span class="text-xs font-bold text-purple-400 block mb-1">State Isolation</span>
      <p class="text-xs text-gray-400">PostgreSQL and Redis instances operate inside dedicated internal mesh networks, locked out from public web access.</p>
    </div>
  </div>
</div>
`,Oe=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"})),Me=`# Clone the infrastructure repository
git clone https://github.com/remote-tech-us/platform-infra.git
cd platform-infra

# Initialize environment configurations
cp .env.example .env

# Fire up core dependencies using Docker Compose
docker compose up -d --build

# Verify container runtime states
docker ps
`,De=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),Ne=`### Orchestration Flow

Setting up the stack triggers automated orchestration hooks across our target nodes. The layout below highlights how an incoming developer request interacts with our self-hosting core components:

\`\`\`mermaid
graph TD
A[Developer Machine] -->|1. git clone & setup| B(Docker Compose Engine)
B -->|2. Pull Base Images| C[Gitea / PostgreSQL]
B -->|3. Establish Internal Mesh| D[Rocket.Chat / Redis]
C -->|4. Health Check Pass| E{Traefik Reverse Proxy}
E -->|Route Traffic| F[Local Dev Environment Launched]
`,Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),Ae=`{
  "title": "Gitea Deployment",
  "content": "Our Gitea deployment utilizes Postgres as the backend for reliability. Ensure your SSH keys are managed via the Gitea web interface.",
  "supportedViews": ["console"],
  "allowCopy": false
}
`,Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"})),Fe=`{
  "title": "Rocket.Chat Config",
  "content": "To enable high availability, we deploy Rocket.Chat using a ReplicaSet in MongoDB for seamless chat synchronization.",
  "supportedViews": ["console"],
  "allowCopy": false
}
`,$e=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));function Ve(){const t=Object.assign({"/src/data/dev-docs/00-documentation-engine/01-intro/blueprint.md":Y,"/src/data/dev-docs/00-documentation-engine/01-intro/content-rules.html":J,"/src/data/dev-docs/00-documentation-engine/01-intro/content.json":Q,"/src/data/dev-docs/00-documentation-engine/01-intro/setup.sh":ee,"/src/data/dev-docs/00-documentation-engine/01-intro/workflow.md":ne,"/src/data/dev-docs/00-documentation-engine/02-core-features/content.json":ae,"/src/data/dev-docs/00-documentation-engine/02-core-features/layout.html":se,"/src/data/dev-docs/00-documentation-engine/02-core-features/schema-model.yml":le,"/src/data/dev-docs/00-documentation-engine/02-core-features/workflow.md":ce,"/src/data/dev-docs/00-documentation-engine/03-seo-matrix/content.json":ue,"/src/data/dev-docs/00-documentation-engine/03-seo-matrix/workflow.md":he,"/src/data/dev-docs/02-legacy-systems/01-casdm-customizations-warnings/content.json":fe,"/src/data/dev-docs/02-legacy-systems/01-casdm-customizations-warnings/warning.html":be,"/src/data/dev-docs/02-legacy-systems/01-casdm-customizations-warnings/warning.md":ye,"/src/data/dev-docs/02-legacy-systems/02-casdm-web-screen-painter/content.json":_e,"/src/data/dev-docs/02-legacy-systems/02-casdm-web-screen-painter/workflow.md":Se,"/src/data/dev-docs/03-self-hosting/02-architecture/content.json":Ce,"/src/data/dev-docs/03-self-hosting/02-architecture/layout.html":Oe,"/src/data/dev-docs/03-self-hosting/02-architecture/setup.sh":De,"/src/data/dev-docs/03-self-hosting/02-architecture/workflow.md":Ee,"/src/data/dev-docs/03-self-hosting/gitea-setup/content.json":Pe,"/src/data/dev-docs/03-self-hosting/rocket-chat/content.json":$e}),a={};return Object.entries(t).forEach(([n,r])=>{const u=r.default||"",i=n.split("/"),m=i[i.length-1],p=i[i.length-2],s=i[i.length-3];if(!s||!p||!m)return;a[s]||(a[s]={id:s,title:s.replace(/^\d+-/,"").replace(/-/g," "),pagesMap:{}}),a[s].pagesMap[p]||(a[s].pagesMap[p]={id:p,title:p.replace(/-/g," "),content:"",supportedViews:["console"],files:[]});const d=a[s].pagesMap[p];if(m==="content.json"){try{if(u.trim()){const x=JSON.parse(u);Object.assign(d,x)}}catch(x){console.error(`❌ JSON Syntax error in "${n}":`,x.message)}return}const f=m.split(".").pop()||"text";let h="text";f==="html"&&(h="html"),f==="md"&&(h="markdown"),h==="html"&&!d.supportedViews.includes("html")&&d.supportedViews.push("html"),h==="markdown"&&!d.supportedViews.includes("markdown")&&d.supportedViews.push("markdown"),d.files.push({name:m,code:u,language:f==="yml"||f==="yaml"?"yaml":f,type:h})}),Object.values(a).map(n=>({id:n.id,title:n.title,pages:Object.values(n.pagesMap)}))}const M=Ve();function C({activePage:t,setActivePage:a}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-8 text-blue-400 font-bold",children:[e.jsx(O,{})," ",e.jsx("span",{children:"Documentation Hub"})]}),M.map(n=>e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xs font-black uppercase tracking-widest text-gray-500 mb-3",children:n.title}),e.jsx("ul",{className:"space-y-1",children:n.pages.map(r=>e.jsx("li",{children:e.jsx("button",{onClick:()=>a(r),className:`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${(t==null?void 0:t.id)===r.id?"!bg-blue-600 text-white font-bold":"text-gray-400 hover:text-blue-600 hover:bg-white/5"}`,children:r.title})},r.id))})]},n.id))]})}function Be(){var j;const[t,a]=c.useState(((j=M[0])==null?void 0:j.pages[0])||null),[n,r]=c.useState("console"),[u,i]=c.useState(0),[m,p]=c.useState(!1),[s,d]=c.useState(!1),[f,h]=c.useState(""),[x,w]=c.useState(!1),[b,k]=c.useState(!1);c.useEffect(()=>{if(!t)return;i(0),d(!1),k(!1);const o=t.supportedViews||["console"],l=t.defaultView;l&&o.includes(l)?r(l):o.includes("html")?r("html"):o.includes("markdown")?r("markdown"):r("console")},[t]),c.useEffect(()=>{i(0)},[n]),c.useEffect(()=>{if(!(t!=null&&t.isExternalAsset)||!(t!=null&&t.assetPath)){h(""),w(!1);return}let o=!0;return w(!0),h("Streaming external audit assets..."),fetch(t.assetPath).then(l=>{if(!l.ok)throw new Error(`HTTP Error: Failed to find asset index status code ${l.status}`);return l.text()}).then(l=>{o&&(h(l),w(!1))}).catch(l=>{o&&(h(`❌ Network Fault: ${l.message}`),w(!1))}),()=>{o=!1}},[t]);const y=!t||!t.files?[]:n==="console"?t.files:t.files.filter(o=>o.type===n),g=y[u]||null,D=()=>{!g||t.allowCopy===!1||(navigator.clipboard.writeText(g.code),p(!0),setTimeout(()=>p(!1),2e3))};if(!t)return e.jsx("div",{className:"p-24 text-white font-mono text-center",children:"No docs discovered."});const S=t.supportedViews||["console"];return e.jsxs("div",{className:"flex min-h-screen w-full max-w-full overflow-x-hidden bg-fixed bg-cover",style:{backgroundImage:`linear-gradient(${_.bg_override_color||"rgba(15, 23, 42, 0.9)"}, ${_.bg_override_color||"rgba(15, 23, 42, 0.9)"}), url(${_.bg_img})`},children:[e.jsxs("div",{className:"lg:hidden fixed top-10 left-0 right-0 h-6 bg-slate-950/80 backdrop-blur-md border-b border-white/10 z-40 flex items-center gap-4 px-6",children:[e.jsx("button",{onClick:()=>d(!s),className:"copy-btn text-gray-400 hover:text-white text-lg transition-all p-1 flex items-center justify-center focus:outline-none","aria-label":"Toggle navigation menu",children:s?e.jsx(A,{}):e.jsx(P,{})}),e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-bold text-sm select-none",children:[e.jsx(O,{})," ",e.jsx("span",{children:"Docs Navigation"})]})]}),e.jsx(F,{children:s&&e.jsxs(e.Fragment,{children:[e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>d(!1),className:"lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm h-screen w-screen"}),e.jsx(v.aside,{initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"},transition:{type:"tween",duration:.2},className:"lg:hidden fixed left-0 top-0 bottom-0 z-50 w-72 h-screen bg-slate-950 border-r border-white/10 p-6 overflow-y-auto pt-24",children:e.jsx(C,{activePage:t,setActivePage:a})})]})}),e.jsxs("div",{className:"flex w-full pt-20 lg:pt-24 min-w-0 max-w-full",children:[e.jsx("aside",{className:"hidden lg:block w-72 h-[calc(100vh-6rem)] overflow-y-auto border-r border-white/10 p-6 sticky top-24 shrink-0",children:e.jsx(C,{activePage:t,setActivePage:a})}),e.jsx("main",{className:"flex-1 min-w-0 max-w-full px-4 sm:px-8 lg:px-16 pb-20",children:e.jsxs(v.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"max-w-3xl w-full mx-auto lg:mx-0",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-500 mb-4 text-xs sm:text-sm font-bold",children:["Docs ",e.jsx($,{className:"text-[10px]"})," ",t.title]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight",children:t.title}),e.jsx("p",{className:"text-base sm:text-lg text-gray-300 leading-relaxed mb-8",children:t.content}),e.jsxs("div",{className:"w-full max-w-full bg-black/60 rounded-2xl border border-white/10 overflow-hidden mb-4 relative group flex flex-col",children:[e.jsxs("div",{className:"bg-white/5 px-4 py-3 sm:py-2 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[e.jsxs("div",{className:"flex gap-1.5 flex-shrink-0",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500"})]}),y.length>0?e.jsxs("div",{className:"flex items-center gap-2 ml-2 border-l border-white/10 pl-3 w-full sm:w-auto",children:[e.jsx("label",{htmlFor:"file-selector",className:"text-[10px] uppercase font-black text-gray-500 tracking-widest flex-shrink-0",children:"File Asset:"}),e.jsx("select",{id:"file-selector",value:u,onChange:o=>i(Number(o.target.value)),className:"bg-black/40 text-blue-400 font-mono text-xs px-2.5 py-1 rounded-md border border-white/10 focus:outline-none focus:border-blue-500 cursor-pointer transition-all appearance-none pr-7 bg-no-repeat min-w-[155px] max-w-full",style:{backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2360A5FA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,backgroundPosition:"right 8px center",backgroundSize:"12px"},children:y.map((o,l)=>e.jsxs("option",{value:l,className:"bg-slate-900 text-gray-200 font-mono",children:[o.name," ",n!=="console"&&"(Rendered)"]},o.name))})]}):e.jsx("span",{className:"text-[10px] uppercase font-black text-gray-500 tracking-widest ml-3 border-l border-white/10 pl-3",children:"No files available"})]}),e.jsxs("div",{className:"flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5",children:[S.length>1&&e.jsxs("fieldset",{className:"flex bg-black/40 p-0.5 rounded-lg border border-white/10 overflow-x-auto",children:[e.jsx("legend",{className:"sr-only",children:"Choose a document render layer style"}),S.map(o=>{const l=n===o;return e.jsxs("label",{className:`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide cursor-pointer transition-all uppercase whitespace-nowrap ${l?"bg-blue-600 text-white shadow-sm":"text-gray-400 hover:text-white hover:bg-white/5"}`,children:[e.jsx("input",{type:"radio",name:"viewMode",value:o,checked:l,onChange:()=>r(o),className:"sr-only"}),o==="console"&&e.jsx(V,{className:"text-[10px]"}),o==="html"&&e.jsx(R,{className:"text-[10px]"}),o==="markdown"&&e.jsx(z,{className:"text-[10px]"}),e.jsx("span",{children:o})]},o)})]}),(t==null?void 0:t.isExternalAsset)&&e.jsx("button",{onClick:()=>k(!b),title:b?"Minimize viewport":"Expand viewport layout",className:`copy-btn text-sm p-1.5 rounded-md transition-all border shrink-0 flex items-center justify-center ${b?"bg-blue-600/20 border-blue-500/40 text-blue-400 hover:bg-blue-600/30":"text-gray-400 border-transparent hover:text-white hover:bg-white/5"}`,children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:b?e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}):e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})})}),t.allowCopy!==!1&&g&&e.jsx("button",{onClick:D,"aria-label":"Copy component value",className:"copy-btn text-gray-400 hover:text-white p-2 sm:p-1 transition-all text-sm flex-shrink-0 h-[26px] w-[26px]",children:m?e.jsx(I,{className:"text-green-500"}):e.jsx(B,{className:"h-4 w-4"})})]})]}),e.jsx("div",{className:"p-4 sm:p-6 overflow-x-auto w-full max-w-full scrollbar-thin",children:x?e.jsxs("div",{className:"text-blue-400 font-mono text-xs animate-pulse flex items-center gap-2 py-8 justify-center",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500 animate-ping"}),"Streaming raw asynchronous report matrix nodes..."]}):t!=null&&t.isExternalAsset?e.jsx("div",{className:`w-full rounded-xl overflow-hidden border border-white/5 bg-slate-950 transition-all duration-300 ease-in-out ${b?"h-[120vh]":"h-[60vh]"}`,children:n==="html"?e.jsx("iframe",{src:t.assetPath,title:t.title,className:"w-full h-full border-none bg-white overflow-x-auto max-w-full",sandbox:"allow-scripts allow-same-origin",loading:"lazy"}):e.jsx("pre",{className:"text-xs font-mono text-gray-400 whitespace-pre-wrap",children:f})}):g?e.jsxs(e.Fragment,{children:[n==="console"&&e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsx(L,{language:g.language,style:W,customStyle:{margin:0,padding:0,background:"transparent",fontSize:"0.8125rem"},children:g.code})}),n==="html"&&e.jsx("div",{className:"html-preview-wrapper text-white w-full overflow-x-auto",children:(()=>{try{return H(g.code)}catch{return e.jsxs("div",{className:"p-4 bg-red-900/20 border border-red-500/40 text-red-400 rounded-xl text-sm font-mono w-full",children:["⚠️ ",e.jsx("strong",{children:"HTML Parsing Error:"})," Code output block failed parsing validation."]})}})()}),n==="markdown"&&e.jsx("div",{className:"w-full min-w-0",children:e.jsx(q,{content:g.code})})]}):e.jsxs("div",{className:"text-center py-8 font-mono text-xs text-gray-500 w-full",children:['No template assets found matching the "',n,'" layout criteria.']})})]})]},t.id)})]})]})}export{Be as default};
