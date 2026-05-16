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

  useEffect(() => {
    if (!activePage) return;
    setActiveFileIndex(0);
    setIsMobileMenuOpen(false); // Clean drawer trail on select

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
      {/* MOBILE TRIGGER ACTION FLOATING BUTTON */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-transform active:scale-95 flex items-center justify-center border border-white/10"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
      </button>

      {/* DRAWER LAYERING FRAMEWORK */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop: Set to Standard z-30 */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm h-screen w-screen"
            />
            {/* Sidebar Shell: 🚀 FIX 2: Set to Standard z-40 so it displays OVER the backdrop canvas */}
            <motion.aside 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-40 w-72 h-screen bg-slate-950 border-r border-white/10 p-6 overflow-y-auto pt-20"
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
                {currentFile ? (
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
