// src/components/SafeMarkdown.jsx
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 
import mermaid from 'mermaid';

// Initialize core engine once
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: { background: 'transparent' }
});

function MermaidDiagram({ chartCode }) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    // 🚀 THE FIX: Generate a highly unique render token for EACH execution cycle.
    // This completely prevents React 18 StrictMode duplicate-ID cache collisions.
    const renderId = 'mermaid-render-' + Math.random().toString(36).substring(2, 11);

    async function renderChart() {
      try {
        setError(null);
        
        const cleanCode = chartCode
          .replace(/\u00a0/g, ' ')
          .replace(/\r/g, '\n')
          .trim();

        if (!cleanCode) return;

        // Render using the completely unique single-use tracking ID
        const { svg: renderedSvg } = await mermaid.render(renderId, cleanCode);
        
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error("Mermaid Render Fail:", err);
        if (isMounted) {
          setError("Invalid diagram structure or syntax.");
        }
        
        // Safely wipe out ONLY the broken temporary element if it gets stuck in the body layout
        const bindErrorSvg = document.getElementById(`d${renderId}`);
        if (bindErrorSvg) bindErrorSvg.remove();
      }
    }

    renderChart();

    // Cleanup token sets flag to false if component unmounts mid-render
    return () => {
      isMounted = false;
    };
  }, [chartCode]);

  if (error) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-xl text-xs font-mono my-4 w-full">
        ⚠️ <strong>Diagram Parse Error:</strong> Verify layout nodes or missing quote markers.
      </div>
    );
  }

  if (!svg) {
    return <div className="text-xs text-gray-500 font-mono animate-pulse my-6 text-center w-full">Generating diagram workflow...</div>;
  }

  return (
    <div
      className="mermaid-graph-svg my-6 flex justify-center bg-black/30 p-6 rounded-xl border border-white/5 overflow-x-auto w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default function SafeMarkdown({ content }) {
  return (
    <div className="markdown-preview-wrapper text-gray-200 prose prose-sm prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Intercept code blocks and strip the parent <pre> wrapper ONLY for mermaid charts
          pre({ children }) {
            if (children && children.props && children.props.className?.includes('language-mermaid')) {
              return <>{children}</>; 
            }
            return <pre>{children}</pre>;
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-mermaid/.exec(className || '');
            const rawCode = String(children).replace(/\n$/, '');

            if (!inline && match) {
              return <MermaidDiagram chartCode={rawCode} />;
            }
            return <code className={className} {...props}>{children}</code>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
