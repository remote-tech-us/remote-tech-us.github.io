import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { DEV_DOCS_CATEGORIES } from '../data/business_dev_docs.jsx';
import { FaCheck, FaCopy, FaBook, FaChevronRight, FaTerminal, FaCode, FaEye } from 'react-icons/fa';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown'; // Ensure this is installed
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function DocsPage() {
  const [activePage, setActivePage] = useState(DEV_DOCS_CATEGORIES[0].pages[0]);
  const [activeView, setActiveView] = useState('console'); // console, html, markdown
  const [copied, setCopied] = useState(false);

  // Fallback if the new page doesn't support the current active view mode
  useEffect(() => {
    const supported = activePage.supportedViews || ['console'];
    if (!supported.includes(activeView)) {
      setActiveView(supported[0]);
    }
  }, [activePage]);

  const handleCopy = () => {
    // Prevent execution if copying is explicitly disabled on this data item
    if (activePage.allowCopy === false) return;

    let textToCopy = "";
    if (activeView === 'console') {
      textToCopy = typeof activePage.code === 'string' ? activePage.code : activePage.copyText || "";
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

  const supportedViews = activePage.supportedViews || ['console'];

  return (
    <div className="flex min-h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: GLOBALS.bg_img
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}), url(${GLOBALS.bg_img})`
        : 'none',
      }}
    >
      <div className="flex w-full pt-24">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 h-[calc(100vh-6rem)] overflow-y-auto border-r border-white/10 p-6 sticky top-24">
          <div className="flex items-center gap-2 mb-8 text-blue-400 font-bold">
            <FaBook /> <span>Documentation</span>
          </div>
          {DEV_DOCS_CATEGORIES.map((cat) => (
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

        {/* Content Area */}
        <main className="flex-1 px-6 lg:px-16 pb-20">
          <motion.div
            key={activePage.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-blue-500 mb-4 text-sm font-bold">
              Docs <FaChevronRight className="text-[10px]" /> {activePage.title}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-4xl font-black text-white">{activePage.title}</h1>
              
              {/* Tab Switcher */}
              {supportedViews.length > 1 && (
                <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 self-start sm:self-center">
                  {supportedViews.includes('console') && (
                    <button 
                      onClick={() => setActiveView('console')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeView === 'console' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <FaTerminal /> Console
                    </button>
                  )}
                  {supportedViews.includes('html') && (
                    <button 
                      onClick={() => setActiveView('html')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeView === 'html' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <FaCode /> HTML
                    </button>
                  )}
                  {supportedViews.includes('markdown') && (
                    <button 
                      onClick={() => setActiveView('markdown')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeView === 'markdown' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <FaEye /> Markdown
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {activePage.content}
              </p>

              {/* Dynamic Content Display Card */}
              <div className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden mb-4 relative group">
                
                {/* Header bar */}
                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest ml-2">
                      {activeView === 'console' ? (activePage.language || 'text') : activeView}
                    </span>
                  </div>
                  {/* Render the copy icon only if allowCopy isn't explicitly set to false */}
                  {activePage.allowCopy !== false && ( 
                    <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-all p-1">
                      {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                    </button>
                )}
                </div>

                {/* Conditional Card Rendering */}
                <div className="p-6">
                  {activeView === 'console' && activePage.code && (
                    <SyntaxHighlighter
                      language={activePage.language || 'javascript'}
                      style={atomDark}
                      customStyle={{ margin: 0, padding: 0, background: 'transparent', fontSize: '0.875rem' }}
                    >
                      {activePage.code}
                    </SyntaxHighlighter>
                  )}

                  {activeView === 'html' && activePage.htmlContent && (
                    <div className="html-preview-wrapper text-white">
                      {(() => {
                        try {
                          // Try parsing the HTML content cleanly
                          return parse(activePage.htmlContent);
                        } catch (error) {
                          // Safe fallback text if the string is broken or malformed
                          console.error("HTML Parsing Error:", error);
                          return (
                            <div className="p-4 bg-red-900/20 border border-red-500/40 text-red-400 rounded-xl text-sm font-mono">
                              ⚠️ <strong>HTML Render Error:</strong> The provided HTML string is malformed. 
                              Check your data file for unclosed tags or syntax errors.
                            </div>
                          );
                        }
                      })()}
                    </div>
                  )}

                  {activeView === 'markdown' && activePage.markdownContent && (
                    <div className="markdown-preview-wrapper text-gray-200 prose prose-sm prose-invert max-w-none">
                      <ReactMarkdown>{activePage.markdownContent}</ReactMarkdown>
                    </div>
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
