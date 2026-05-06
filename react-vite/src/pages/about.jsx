// src/pages/About.jsx
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { FaRocket, FaShieldAlt, FaCodeBranch, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  const features = [
    {
      icon: <FaShieldAlt className="text-blue-400" />,
      title: "Privacy First",
      desc: "We prioritize data sovereignty by self-hosting our entire infrastructure, ensuring your PII stays secure."
    },
    {
      icon: <FaCodeBranch className="text-purple-400" />,
      title: "Open Source Core",
      desc: "Built on the power of community-driven software like Gitea, OpenProject, and RocketChat."
    },
    {
      icon: <FaRocket className="text-yellow-400" />,
      title: "Modern Architecture",
      desc: "Leveraging Docker and Kubernetes to provide scalable, self-healing enterprise environments."
    }
  ];

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed" 
      style={{ 
        backgroundImage: GLOBALS.bg_img 
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.9)'}), url(${GLOBALS.bg_img})` 
        : 'none',
      }}
    >
      <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <img src={GLOBALS.app_logo} alt="Logo" className="w-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">{GLOBALS.app_title}</h1>
          <p className="text-xl text-blue-400 font-medium max-w-2xl mx-auto">
            Professional Open-Source Infrastructure & Services
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center"
            >
              <div className="text-4xl mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </section>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 p-10 rounded-3xl"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FaUsers className="text-blue-500" /> Our Mission
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              {GLOBALS.app_company} was founded on the principle that enterprise-grade 
              infrastructure should be transparent, secure, and accessible. We specialize in 
              the CA Service Desk Manager suite and modern DevOps orchestration.
            </p>
            <p>
              By leveraging established open-source projects, we provide our clients 
              with powerful tools for project management, code hosting, and real-time 
              collaboration—without the high licensing costs or privacy concerns of 
              proprietary SaaS platforms.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
