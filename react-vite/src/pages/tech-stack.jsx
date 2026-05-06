// src/pages/tech-stack.jsx
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { TECH_STACK } from '../data/tech_stack.jsx';
import { FaLayerGroup } from 'react-icons/fa';

export default function StackPage() {
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
            <FaLayerGroup className="text-blue-500" /> Our Tech Stack
          </h1>
          <p className="text-gray-400 max-w-2xl">
            We don't rely on third-party SaaS for our core operations. We build, host, and 
            maintain our own infrastructure using these industry-leading tools.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_STACK.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
            >
              <div className="text-3xl text-blue-400 mb-6 bg-white/5 w-fit p-3 rounded-2xl">
                {group.icon}
              </div>
              <h2 className="text-xl font-bold mb-6 text-white">{group.category}</h2>
              <div className="space-y-6">
                {group.items.map((item, i) => (
                  <div key={i} className="border-l-2 border-blue-500/30 pl-4 group">
                    <h3 className="font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
