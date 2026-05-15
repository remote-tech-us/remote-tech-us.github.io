// src/components/SafeMarkdown.jsx
import { useEffect, useState, useId } from 'react';
import ReactMarkdown from 'react-markdown';
import mermaid from 'mermaid';

// Initialize core engine
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

// Dedicated component to isolate and convert raw text to SVG
function MermaidDiagram({ chartCode }) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const uniqueId = 'mermaid-' + useId().replace(/:/g, ''); // Clear invalid colon tokens for HTML IDs

  useEffect(() => {
    async function renderChart() {
      try {
        setError(null);
        // Direct string-to-SVG generation bypasses contentLoaded DOM races
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chartCode);
        setSvg(renderedSvg);
      } catch (err) {
        console.error("Mermaid Render Fail:", err);
        setError("Invalid diagram structure or syntax.");
        
        // Clean up bad state leftovers in Mermaid's internal cache if a parse breaks
        const brokenElement = document.getElementById(uniqueId);
        if (brokenElement) brokenElement.remove();
      }
    }

    if (chartCode) {
      renderChart();
    }
  }, [chartCode, uniqueId]);

  if (error) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-xl text-xs font-mono my-4">
        ⚠️ <strong>Diagram Parse Error:</strong> {error}
      </div>
    );
  }

  if (!svg) {
    return <div className="text-xs text-gray-500 font-mono animate-pulse my-4">Generating diagram workflow...</div>;
  }

  return (
    <div 
      className="mermaid-graph-svg my-6 flex justify-center bg-black/30 p-6 rounded-xl border border-white/5 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default function SafeMarkdown({ content }) {
  return (
    <div className="markdown-preview-wrapper text-gray-200 prose prose-sm prose-invert max-w-none">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-mermaid/.exec(className || '');
            const rawCode = String(children).replace(/\n$/, '');

            // Catch the diagram blocks and route them to our standalone engine
            if (!inline && match) {
              return <MermaidDiagram chartCode={rawCode} />;
            }

            // Fallback for regular code blocks (e.g. bash, js)
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
