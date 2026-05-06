// src/pages/dev-docs.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { DEV_DOCS_CATEGORIES } from '../data/business_dev_docs.jsx';
import { FaCheck, FaCopy, FaBook, FaChevronRight, FaTerminal } from 'react-icons/fa';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your theme

export default function DocsPage() {
  const [activePage, setActivePage] = useState(DEV_DOCS_CATEGORIES[0].pages[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // If code is a string, use it. If it's a JSX function, 
    // you might want to add a 'copyText' string field to your data object.
    const textToCopy = typeof activePage.code === 'string' 
      ? activePage.code 
      : activePage.copyText || ""; 

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            <h1 className="text-4xl font-black mb-8 text-white">{activePage.title}</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {activePage.content}
              </p>
              
              {/* Decorative Code Block Placeholder */}
              <div className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden mb-8">
                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <FaTerminal className="text-gray-600 text-xs" />
                </div>
                  {/* Dynamic Language Label */}
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest ml-2">
                    {activePage.language || 'text'}
                  </span>
                {/* Syntax Highlighter renders the code exactly as typed in data file */}
                <SyntaxHighlighter 
                  language={activePage.language || 'javascript'} 
                  style={atomDark}
                  customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '0.875rem' }}
                >
                  {activePage.code}
                </SyntaxHighlighter>
                <div className="p-6 font-mono text-sm text-blue-300">
                  {/* Add the () to execute the function */}
                  {/* {typeof activePage.code === 'function' ? activePage.code() : activePage.code}  */}
                  {/* 1. If it's a function (the JSX approach), call it */}
                  {/* {typeof activePage.code === 'function' && activePage.code()} */}

                  {/* 2. If it's a string, render it inside a div that preserves whitespace */}
                  {/*
                  {typeof activePage.code === 'string' && (
                    <div style={{ whiteSpace: "pre-wrap" }}>{activePage.code}</div>
                  )}
                  */}
                </div>
              </div>
              {activePage.code && (
                  <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-all">
                    {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                  </button>
              )}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
