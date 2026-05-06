// src/pages/terms-of-service.jsx
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { FaGavel, FaHandshake, FaExclamationTriangle, FaCopyright } from 'react-icons/fa';

export default function TermsPage() {
  const sections = [
    {
      icon: <FaHandshake className="text-blue-400" />,
      title: "1. Acceptance of Terms",
      content: `By accessing or using the services provided by ${GLOBALS.app_company}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our infrastructure and consulting services.`
    },
    {
      icon: <FaGavel className="text-purple-400" />,
      title: "2. Service Provision",
      content: "We provide specialized infrastructure, open-source management, and CA Service Desk Manager consulting. While we strive for 99.9% uptime on our self-hosted platforms, services are provided 'as-is' unless otherwise specified in a separate Service Level Agreement (SLA)."
    },
    {
      icon: <FaCopyright className="text-yellow-400" />,
      title: "3. Intellectual Property",
      content: `All custom code, configurations, and documentation provided by ${GLOBALS.app_company} remain our intellectual property until full payment is received. Open-source components used within our stack are governed by their respective licenses (GPL, MIT, etc.).`
    },
    {
      icon: <FaExclamationTriangle className="text-red-400" />,
      title: "4. Limitation of Liability",
      content: `${GLOBALS.app_company} shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to data loss or system downtime.`
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
      <main className="pt-32 px-6 max-w-4xl mx-auto pb-20 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center lg:text-left"
        >
          <h1 className="text-4xl font-black mb-4 flex items-center gap-3 justify-center lg:justify-start">
            <FaGavel className="text-blue-500" /> Terms of Service
          </h1>
          <p className="text-gray-400">
            Effective Date: January 1, {new Date().getFullYear()}
          </p>
        </motion.div>

        <section className="space-y-6">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl p-3 bg-white/5 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed italic border-l-2 border-blue-500/30 pl-4">
                {section.content}
              </p>
            </motion.div>
          ))}
        </section>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 bg-white/5 border border-white/10 rounded-3xl text-center"
        >
          <p className="text-gray-400 text-sm">
            Questions about our Terms? Contact our legal team at{' '}
            <a href={`mailto:${GLOBALS.app_support}`} className="text-blue-400 hover:underline">
              {GLOBALS.app_support}
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
