// src/pages/privacy-policy.jsx
import { motion } from 'framer-motion';
import { GLOBALS } from '../data/app__globals.jsx';
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPage() {
  const sections = [
    {
      icon: <FaLock className="text-blue-400" />,
      title: "Data Collection",
      content: `We collect minimal personal information necessary to provide our services. This includes contact details provided via our contact forms and technical logs required for secure infrastructure management.`
    },
    {
      icon: <FaShieldAlt className="text-green-400" />,
      title: "Self-Hosted Security",
      content: `Unlike traditional SaaS providers, we prioritize data sovereignty. Your information is stored on our private, self-hosted servers, reducing exposure to third-party data mining.`
    },
    {
      icon: <FaUserShield className="text-purple-400" />,
      title: "Your Rights",
      content: `You have the right to access, correct, or delete your personal data. At ${GLOBALS.app_company}, we believe you should have full control over your digital footprint.`
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
            <FaShieldAlt className="text-blue-500" /> Privacy Policy
          </h1>
          <p className="text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <section className="grid grid-cols-1 gap-6 mb-12">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
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
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </section>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> Contact Us
          </h2>
          <p className="text-gray-300 mb-4">
            If you have any questions regarding this Privacy Policy or how your data is handled by 
            <strong> {GLOBALS.app_company}</strong>, please reach out to our privacy team.
          </p>
          <a 
            href={`mailto:${GLOBALS.app_email || 'privacy@remote-tech.us'}`}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Contact Privacy Officer
          </a>
        </motion.div>
      </main>
    </div>
  );
}
