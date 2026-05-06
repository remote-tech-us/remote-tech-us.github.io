// src/pages/careers.jsx
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { OPEN_POSITIONS } from '../data/business_careers.jsx';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';

export default function CareersPage() {
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
            <FaBriefcase className="text-blue-500" /> Join the Team
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Help us build the next generation of open-source enterprise infrastructure. 
            We are looking for experts in legacy CA systems and modern cloud architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {OPEN_POSITIONS.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl group hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="text-4xl text-blue-400 bg-blue-500/10 p-4 rounded-2xl">
                    {job.icon}
                  </div>
                  <div>
                    <div className="flex gap-2 mb-2">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="text-gray-400 text-sm">{job.department} • {job.location} • {job.type}</p>
                  </div>
                </div>

                <div className="w-full lg:w-auto">
                  <a 
                    href={`mailto:careers@remote-tech.us?subject=Application: ${job.title}`}
                    className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all w-full"
                  >
                    Apply Now <FaArrowRight />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-gray-300 mb-4">{job.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
