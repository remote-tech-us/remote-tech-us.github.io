// src/pages/dev-docs.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { FaCheck, FaCopy, FaBook, FaChevronRight, FaTerminal, FaCode, FaEye, FaBars, FaTimes } from 'react-icons/fa';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SafeMarkdown from '../components/SafeMarkdown.jsx';
import { loadFolderData } from '../utils/data-loader.js';

const DEV_DOCS = loadFolderData();

// 🚀 FIX 1: Move the Navigation Menu COMPLETELY outside of the main page component loop.
// This prevents React from unmounting and breaking text layout elements on state updates.
function NavigationMenu({ activePage, setActivePage }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-8 text-blue-400 font-bold">
        <FaBook /> <span>Documentation Hub</span>
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
                    activePage?.id === page.id 
                      ? '!bg-blue-600 text-white font-bold' // Added '!' back to force state override contrast
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
    </>
  );
}

export default function DocsPage() {
  const [activePage, setActivePage] = useState(DEV_DOCS[0]?.pages[0] || null);
  const [activeView, setActiveView] = useState('console');
  const [activeFileIndex, setActiveFileIndex] = useState(0); 
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [externalContent, setExternalContent] = useState('');
  const [loadingExternal, setLoadingExternal] = useState(false);

  // 🚀 ADD THIS HOOK: Tracks if the iframe/code preview viewport is expanded
  const [isViewportExpanded, setIsViewportExpanded] = useState(false);

  useEffect(() => {
    if (!activePage) return;
    setActiveFileIndex(0);
    setIsMobileMenuOpen(false); // Clean drawer trail on select
    setIsViewportExpanded(false); // 🚀 ADD THIS LINE: Resets expansion state when navigating away

    const supported = activePage.supportedViews || ['console'];
    const explicitDefault = activePage.defaultView;

    if (explicitDefault && supported.includes(explicitDefault)) {
      setActiveView(explicitDefault);
    } else if (supported.includes('html')) {
      setActiveView('html');
    } else if (supported.includes('markdown')) {
      setActiveView('markdown');
    } else {
      setActiveView('console');
    }
  }, [activePage]);

  useEffect(() => {
    setActiveFileIndex(0);
  }, [activeView]);
  // 🚀 FIXED & ADDED: Hook 3 with an active clean state return/cleanup to handle external payloads safely
  useEffect(() => {
    // If it's not a decoupled/external asset, clear the slate and abort
    if (!activePage?.isExternalAsset || !activePage?.assetPath) {
      setExternalContent('');
      setLoadingExternal(false);
      return;
    }

    // Flag tracker to prevent race condition overrides if activePage flips mid-stream
    let isCurrentFetchActive = true;

    setLoadingExternal(true);
    setExternalContent('Streaming external audit assets...');

    fetch(activePage.assetPath)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: Failed to find asset index status code ${res.status}`);
        return res.text();
      })
      .then((textData) => {
        if (isCurrentFetchActive) {
          setExternalContent(textData);
          setLoadingExternal(false);
        }
      })
      .catch((err) => {
        if (isCurrentFetchActive) {
          setExternalContent(`❌ Network Fault: ${err.message}`);
          setLoadingExternal(false);
        }
      });

    // ✨ The useEffect Cleanup Return Function
    return () => {
      isCurrentFetchActive = false; // Discards incoming response updates if user switches pages
    };
  }, [activePage]);

  const getFilteredFiles = () => {
    if (!activePage || !activePage.files) return [];
    if (activeView === 'console') return activePage.files;
    return activePage.files.filter(file => file.type === activeView);
  };

  const filteredFiles = getFilteredFiles();
  const currentFile = filteredFiles[activeFileIndex] || null;

  const handleCopy = () => {
    if (!currentFile || activePage.allowCopy === false) return;
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!activePage) return <div className="p-24 text-white font-mono text-center">No docs discovered.</div>;

  const supportedViews = activePage.supportedViews || ['console'];

  return (
    <div 
      className="flex min-h-screen w-full max-w-full overflow-x-hidden bg-fixed bg-cover"
      style={{ backgroundImage: GLOBALS.bg_img ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}), url(${GLOBALS.bg_img})` : 'none' }}
    >
      {/* 🚀 FIXED: Toggle Moved to Left side & Changed to a clean, small menu icon */}
      <div className="lg:hidden fixed top-10 left-0 right-0 h-6 bg-slate-950/80 backdrop-blur-md border-b border-white/10 z-40 flex items-center gap-4 px-6">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="copy-btn text-gray-400 hover:text-white text-lg transition-all p-1 flex items-center justify-center focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="flex items-center gap-2 text-blue-400 font-bold text-sm select-none">
          <FaBook /> <span>Docs Navigation</span>
        </div>
      </div>

      {/* MOBILE DRAWER MODAL OVERLAYS */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm h-screen w-screen"
            />
            <motion.aside 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-72 h-screen bg-slate-950 border-r border-white/10 p-6 overflow-y-auto pt-24"
            >
              <NavigationMenu activePage={activePage} setActivePage={setActivePage} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      <div className="flex w-full pt-20 lg:pt-24 min-w-0 max-w-full">
        
        {/* DESKTOP SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block w-72 h-[calc(100vh-6rem)] overflow-y-auto border-r border-white/10 p-6 sticky top-24 shrink-0">
          <NavigationMenu activePage={activePage} setActivePage={setActivePage} />
        </aside>

        {/* CONTAINER MAIN DASHBOARD CANVAS */}
        <main className="flex-1 min-w-0 max-w-full px-4 sm:px-8 lg:px-16 pb-20">
          <motion.div key={activePage.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl w-full mx-auto lg:mx-0">
            
            <div className="flex items-center gap-2 text-blue-500 mb-4 text-xs sm:text-sm font-bold">
              Docs <FaChevronRight className="text-[10px]" /> {activePage.title}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">{activePage.title}</h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">{activePage.content}</p>

            {/* CONSOLE TERMINAL WORKSPACE BLOCK FRAME */}
            <div className="w-full max-w-full bg-black/60 rounded-2xl border border-white/10 overflow-hidden mb-4 relative group flex flex-col">

              {/* Control Header Area */}
              <div className="bg-white/5 px-4 py-3 sm:py-2 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                
                {/* File Dropdown Array Picker selector */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>

                  {filteredFiles.length > 0 ? (
                    <div className="flex items-center gap-2 ml-2 border-l border-white/10 pl-3 w-full sm:w-auto">
                      <label htmlFor="file-selector" className="text-[10px] uppercase font-black text-gray-500 tracking-widest flex-shrink-0">
                        File Asset:
                      </label>
                      <select
                        id="file-selector"
                        value={activeFileIndex}
                        onChange={(e) => setActiveFileIndex(Number(e.target.value))}
                        className="bg-black/40 text-blue-400 font-mono text-xs px-2.5 py-1 rounded-md border border-white/10 focus:outline-none focus:border-blue-500 cursor-pointer transition-all appearance-none pr-7 bg-no-repeat min-w-[155px] max-w-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2360A5FA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                          backgroundPosition: 'right 8px center',
                          backgroundSize: '12px',
                        }}
                      >
                        {filteredFiles.map((file, idx) => (
                          <option key={file.name} value={idx} className="bg-slate-900 text-gray-200 font-mono">
                            {file.name} {activeView !== 'console' && '(Rendered)'}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <span className="text-[10px] uppercase font-black text-gray-500 tracking-widest ml-3 border-l border-white/10 pl-3">
                      No files available
                    </span>
                  )}
                </div>

                {/* Layer Control Filter Switches */}
                <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
                  {supportedViews.length > 1 && (
                    <fieldset className="flex bg-black/40 p-0.5 rounded-lg border border-white/10 overflow-x-auto">
                      <legend className="sr-only">Choose a document render layer style</legend>
                      {supportedViews.map((view) => {
                        const isSelected = activeView === view;
                        return (
                          <label key={view} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide cursor-pointer transition-all uppercase whitespace-nowrap ${
                            isSelected ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}>
                            <input type="radio" name="viewMode" value={view} checked={isSelected} onChange={() => setActiveView(view)} className="sr-only" />
                            {view === 'console' && <FaTerminal className="text-[10px]" />}
                            {view === 'html' && <FaCode className="text-[10px]" />}
                            {view === 'markdown' && <FaEye className="text-[10px]" />}
                            <span>{view}</span>
                          </label>
                        );
                      })}
                    </fieldset>
                  )}

                  {/* 🚀 ADD THIS TOGGLE BUTTON CONTAINER BLOCK */}
                  {activePage?.isExternalAsset && (
                    <button 
                      onClick={() => setIsViewportExpanded(!isViewportExpanded)}
                      title={isViewportExpanded ? "Minimize viewport" : "Expand viewport layout"}
                      className={`copy-btn text-sm p-1.5 rounded-md transition-all border shrink-0 flex items-center justify-center ${
                        isViewportExpanded 
                          ? 'bg-blue-600/20 border-blue-500/40 text-blue-400 hover:bg-blue-600/30' 
                          : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isViewportExpanded ? (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        )}
                      </svg>
                    </button>
                  )}
                  {activePage.allowCopy !== false && currentFile && (
                    <button onClick={handleCopy} aria-label="Copy component value" 
                      className="copy-btn text-gray-400 hover:text-white p-2 sm:p-1 transition-all text-sm flex-shrink-0 h-[26px] w-[26px]"
                    >
                      {copied ? <FaCheck className="text-green-500" /> : <FaCopy className="h-4 w-4" />}
                    </button>
                  )}
                </div>

              </div>

              {/* View Output Window Panel Canvas */}
              <div className="p-4 sm:p-6 overflow-x-auto w-full max-w-full scrollbar-thin">
                {loadingExternal ? (
                  <div className="text-blue-400 font-mono text-xs animate-pulse flex items-center gap-2 py-8 justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    Streaming raw asynchronous report matrix nodes...
                  </div>
                ) : activePage?.isExternalAsset ? (
                  /* 🚀 UPDATED CONTAINER WITH DYNAMIC HEIGHT EXPLICIT BINDINGS */
                  <div className={`w-full rounded-xl overflow-hidden border border-white/5 bg-slate-950 transition-all duration-300 ease-in-out ${
                    isViewportExpanded ? 'h-[120vh]' : 'h-[60vh]'
                  }`}>
                    {activeView === 'html' ? (
                      <iframe 
                        src={activePage.assetPath} 
                        title={activePage.title}
                        className="w-full h-full border-none bg-white overflow-x-auto max-w-full"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                      />
                    ) : (
                      <pre className="text-xs font-mono text-gray-400 whitespace-pre-wrap">{externalContent}</pre>
                    )}
                  </div>
                ) : currentFile ? (
                  <>
                    {activeView === 'console' && (
                      <div className="w-full overflow-x-auto">
                        <SyntaxHighlighter
                          language={currentFile.language}
                          style={atomDark}
                          customStyle={{ margin: 0, padding: 0, background: 'transparent', fontSize: '0.8125rem' }}
                        >
                          {currentFile.code}
                        </SyntaxHighlighter>
                      </div>
                    )}

                    {activeView === 'html' && (
                      <div className="html-preview-wrapper text-white w-full overflow-x-auto">
                        {(() => {
                          try { return parse(currentFile.code); }
                          catch (error) {
                            return (
                              <div className="p-4 bg-red-900/20 border border-red-500/40 text-red-400 rounded-xl text-sm font-mono w-full">
                                ⚠️ <strong>HTML Parsing Error:</strong> Code output block failed parsing validation.
                              </div>
                            );
                          }
                        })()}
                      </div>
                    )}

                    {activeView === 'markdown' && (
                      <div className="w-full min-w-0">
                        <SafeMarkdown content={currentFile.code} />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 font-mono text-xs text-gray-500 w-full">
                    No template assets found matching the "{activeView}" layout criteria.
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
