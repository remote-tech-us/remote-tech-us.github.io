import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { FaCheck, FaCopy, FaBook, FaChevronRight, FaTerminal, FaCode, FaEye } from 'react-icons/fa';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SafeMarkdown from '../components/SafeMarkdown.jsx';
import { loadFolderData } from '../utils/data-loader.js';

// Load folder data via our unified universalLoader architecture
const DEV_DOCS = loadFolderData('dev-docs');

export default function DocsPage() {
  const [activePage, setActivePage] = useState(DEV_DOCS[0]?.pages[0] || null);
  const [activeView, setActiveView] = useState('console'); 
  const [activeFileIndex, setActiveFileIndex] = useState(0); // Tracks multi-file IDE tab state
  const [copied, setCopied] = useState(false);

  // Reset file tab index and validate view permissions on documentation page shifts
  useEffect(() => {
    if (!activePage) return;
    setActiveFileIndex(0);
    const supported = activePage.supportedViews || ['console'];
    if (!supported.includes(activeView)) {
      setActiveView(supported[0]);
    }
  }, [activePage]);

  const handleCopy = () => {
    if (!activePage || activePage.allowCopy === false) return;

    let textToCopy = "";
    if (activeView === 'console') {
      if (activePage.files && activePage.files.length > 0) {
        textToCopy = activePage.files[activeFileIndex]?.code || "";
      } else {
        textToCopy = activePage.code || activePage.copyText || "";
      }
    } else if (activeView === 'html') {
      textToCopy = activePage.htmlContent || "";
    } else if (activeView === 'markdown') {
      textToCopy = activePage.markdownContent || "";
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!activePage) {
    return <div className="p-24 text-white font-mono text-center">No documentation files discovered.</div>;
  }

  const supportedViews = activePage.supportedViews || ['console'];
  const hasConsoleFiles = activePage.files && activePage.files.length > 0;

  return (
    <div className="flex min-h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: GLOBALS.bg_img
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}), url(${GLOBALS.bg_img})`
        : 'none',
      }}
    >
      <div className="flex w-full pt-24">
        {/* Sidebar Panel */}
        <aside className="hidden lg:block w-72 h-[calc(100vh-6rem)] overflow-y-auto border-r border-white/10 p-6 sticky top-24">
          <div className="flex items-center gap-2 mb-8 text-blue-400 font-bold">
            <FaBook /> <span>Documentation</span>
          </div>
          {DEV_DOCS.map((cat) => (
            <div key={cat.id} className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">{cat.title}</h3>
              <ul className="space-y-1">
                {cat.pages.map((page) => (
                  <li key={page.id}>
                    <button
                      onClick={() => setActivePage(page)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        activePage.id === page.id
                        ? '!bg-blue-600 text-white font-bold'
                        : 'text-gray-400 hover:text-blue-600 hover:bg-white/5'
                      }`}
                    >
                      {page.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Primary Layout Reading Room */}
        <main className="flex-1 px-6 lg:px-16 pb-20">
          <motion.div
            key={activePage.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb pathing links */}
            <div className="flex items-center gap-2 text-blue-500 mb-4 text-sm font-bold">
              Docs <FaChevronRight className="text-[10px]" /> {activePage.title}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-4xl font-black text-white">{activePage.title}</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {activePage.content}
              </p>

              {/* Console Framework Window */}
              <div className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden mb-4 relative group">
                
                {/* Header Control Toolbar */}
                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">

                  {/* Left: Mac Window Controls & Interactive Script Tabs */}
                  <div className="flex items-center gap-3 overflow-x-auto max-w-full">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    
                    {/* Render dynamic sub-file switches if looking at console view */}
                    {activeView === 'console' && hasConsoleFiles ? (
                      <div className="flex gap-1 ml-2 border-l border-white/10 pl-2">
                        {activePage.files.map((file, idx) => (
                          <button
                            key={file.name}
                            onClick={() => setActiveFileIndex(idx)}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wide uppercase font-bold transition-all ${
                              activeFileIndex === idx 
                                ? 'bg-white/10 text-blue-400 border border-white/10' 
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                          >
                            {file.name}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-2">
                        {activeView === 'console' ? (activePage.language || 'text') : activeView}
                      </span>
                    )}
                  </div>

                  {/* Right Controls Group Toggle Buttons */}
                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    {supportedViews.length > 1 && (
                      <fieldset className="flex bg-black/40 p-0.5 rounded-lg border border-white/10">
                        <legend className="sr-only">Choose a documentation view mode</legend>
                        {supportedViews.map((view) => {
                          const isSelected = activeView === view;
                          return (
                            <label
                              key={view}
                              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide cursor-pointer transition-all uppercase ${
                                isSelected
                                  ? 'bg-blue-600 text-white shadow-sm'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <input
                                type="radio"
                                name="viewMode"
                                value={view}
                                checked={isSelected}
                                onChange={() => setActiveView(view)}
                                className="sr-only"
                              />
                              {view === 'console' && <FaTerminal className="text-[10px]" />}
                              {view === 'html' && <FaCode className="text-[10px]" />}
                              {view === 'markdown' && <FaEye className="text-[10px]" />}
                              <span>{view}</span>
                            </label>
                          );
                        })}
                      </fieldset>
                    )}

                    {activePage.allowCopy !== false && supportedViews.length > 1 && (
                      <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
                    )/* Divider */}

                    {activePage.allowCopy !== false && (
                      <button
                        onClick={handleCopy}
                        aria-label="Copy to clipboard"
                        className="text-gray-400 hover:text-white transition-all p-1 text-sm"
                      >
                        {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                      </button>
                    )}
                  </div>
                </div>

                {/* Main Content Render Panels */}
                <div className="p-6">
                  {activeView === 'console' && (
                    <>
                      {hasConsoleFiles ? (
                        <SyntaxHighlighter
                          language={activePage.files[activeFileIndex]?.language || 'bash'}
                          style={atomDark}
                          customStyle={{ margin: 0, padding: 0, background: 'transparent', fontSize: '0.875rem' }}
                        >
                          {activePage.files[activeFileIndex]?.code || ''}
                        </SyntaxHighlighter>
                      ) : (
                        activePage.code && (
                          <SyntaxHighlighter
                            language={activePage.language || 'javascript'}
                            style={atomDark}
                            customStyle={{ margin: 0, padding: 0, background: 'transparent', fontSize: '0.875rem' }}
                          >
                            {activePage.code}
                          </SyntaxHighlighter>
                        )
                      )}
                    </>
                  )}

                  {activeView === 'html' && activePage.htmlContent && (
                    <div className="html-preview-wrapper text-white">
                      {(() => {
                        try { return parse(activePage.htmlContent); } 
                        catch (error) {
                          console.error("HTML Parsing Error:", error);
                          return (
                            <div className="p-4 bg-red-900/20 border border-red-500/40 text-red-400 rounded-xl text-sm font-mono">
                              ⚠️ <strong>HTML Render Error:</strong> The provided HTML file is malformed.
                            </div>
                          );
                        }
                      })()}
                    </div>
                  )}

                  {activeView === 'markdown' && activePage.markdownContent && (
                    <SafeMarkdown content={activePage.markdownContent} />
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
