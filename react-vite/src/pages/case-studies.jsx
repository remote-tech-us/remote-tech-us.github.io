// src/pages/case-studies.jsx
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { CASE_STUDIES } from '../data/business_case_studies.jsx';
import { FaProjectDiagram, FaCheckCircle, FaLightbulb, FaExclamationCircle } from 'react-icons/fa';

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed" 
      style={{ 
        backgroundImage: GLOBALS.bg_img 
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}), url(${GLOBALS.bg_img})` 
        : 'none',
      }}
    >
      <main className="pt-32 px-6 max-w-6xl mx-auto pb-20 w-full">
        <header className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl font-black mb-4 flex items-center gap-3 justify-center lg:justify-start">
            <FaProjectDiagram className="text-blue-500" /> Case Studies
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Real-world solutions for complex infrastructure and legacy system challenges. 
            See how we help organizations reclaim their data and optimize their workflows.
          </p>
        </header>

        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl text-2xl">
                    {study.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{study.title}</h2>
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">{study.client} • {study.sector}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <h3 className="flex items-center gap-2 text-red-400 font-bold mb-2">
                        <FaExclamationCircle /> The Challenge
                      </h3>
                      <p className="text-gray-300 leading-relaxed italic">"{study.challenge}"</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <h3 className="flex items-center gap-2 text-green-400 font-bold mb-2">
                        <FaLightbulb /> The Solution
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-500/20">
                    <h3 className="flex items-center gap-2 text-white font-bold mb-6">
                      <FaCheckCircle className="text-blue-400" /> Key Results
                    </h3>
                    <ul className="space-y-4">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-200">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/10 text-gray-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
