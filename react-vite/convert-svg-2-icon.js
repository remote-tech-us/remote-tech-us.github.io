// convert-svg.js
import fs from 'fs';
import path from 'path';

const INPUT_SVG_PATH = './public/remote-tech-us_v2.svg';
const OUTPUT_JSX_PATH = './src/assets/remote-tech-icon.jsx';

function convertSvgToReact() {
  try {
    if (!fs.existsSync(INPUT_SVG_PATH)) {
      console.error(`❌ Input SVG file not found at: ${INPUT_SVG_PATH}`);
      return;
    }

    let svgRaw = fs.readFileSync(INPUT_SVG_PATH, 'utf8');

    // 1. Isolate the core Inkscape graphic layers block smoothly
    const layerRegex = /<g[^>]*inkscape:groupmode="layer"[^>]*>([\s\S]*?)<\/g>/;
    const match = svgRaw.match(layerRegex);
    
    if (!match) {
      console.error("❌ Could not find the main Inkscape drawing layer (<g>) in your SVG.");
      return;
    }

    let innerContent = match[1].trim();

    // 2. Parse raw inline CSS strings into secure React Objects style properties
    // This finds style="content" blocks and builds style={{content}} maps dynamically
    const styleRegex = /style="([^"]*)"/g;
    innerContent = innerContent.replace(styleRegex, (match, styleString) => {
      // Split entries like 'display:inline;fill:none;'
      const pairs = styleString.split(';').filter(Boolean);
      const objectProperties = pairs.map(pair => {
        let [key, val] = pair.split(':');
        if (!key || !val) return '';
        
        // Sanitize trailing quotes or structural formatting anomalies from values
        key = key.trim();
        val = val.trim().replace(/['"]/g, '');

        // Convert key format: stroke-width -> strokeWidth
        const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        
        // If Inkscape hardcoded a reference to a missing local linearGradient, force cascade colors
        if (val.startsWith('url(#')) {
          return `${camelKey}: 'currentColor'`;
        }
        
        return `${camelKey}: '${val}'`;
      }).filter(Boolean);

      return `style={{ ${objectProperties.join(', ')} }}`;
    });

    // 3. Fix structural inline properties that exist outside style attributes
    innerContent = innerContent
      .replace(/stroke-width=/g, 'strokeWidth=')
      .replace(/stroke-linecap=/g, 'strokeLinecap=')
      .replace(/stroke-dasharray=/g, 'strokeDasharray=')
      .replace(/fill-opacity=/g, 'fillOpacity=')
      .replace(/fill-rule=/g, 'fillRule=')
      .replace(/stroke-opacity=/g, 'strokeOpacity=');

    // 4. Remove missing gradient nodes or raw stroke hooks that clash with Babel tokens
    innerContent = innerContent.replace(/stroke="currentColor"/g, '');

    // 5. Clean up specialized vector nodes from layout boundaries
    innerContent = innerContent
      .replace(/inkscape:[a-z]+="[^"]*"/g, '')
      .replace(/sodipodi:[a-z]+="[^"]*"/g, '');

    // 6. Fix open-ended XML element nodes to comply with JSX strict standards
    // This guarantees all trailing path strings wrap with " />" properly
    innerContent = innerContent.replace(/([^> ]+)\s*>/g, (m, p1) => {
      if (p1.endsWith('/') || p1.includes('<') || p1.includes('!--')) return m;
      return `${p1} />`;
    });

    const componentTemplate = `// Generated automatically from raw Inkscape SVG geometry vectors
import React from 'react';

export default function RemoteTechIcon({ width = "1.2em", height = "1.2em", className = "" }) {
  return (
    <svg
      viewBox="0 0 41.798294 41.744888"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      className={\`inline-block align-middle \${className}\`}
    >
      {/* Retain Inkscape's exact original structural placement matrix transform */}
      <g transform="translate(-65.4537, -102.595)">
${innerContent.split('\n').map(line => '        ' + line.trim()).join('\n')}
      </g>
    </svg>
  );
}
`;

    fs.writeFileSync(OUTPUT_JSX_PATH, componentTemplate, 'utf8');
    console.log(`\nCOMPILER ALIGNMENT SUCCESSFUL 🚀`);
    console.log(`✅ Clean React component generated at: ${OUTPUT_JSX_PATH}\n`);

  } catch (error) {
    console.error("❌ An error occurred during the conversion process:", error);
  }
}

convertSvgToReact();

