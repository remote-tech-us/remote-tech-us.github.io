import { GLOBALS } from './data/app__globals.jsx';
import { BUSINESS_SERVICES } from './data/business_services.jsx';
import { BUSINESS_PROJECTS } from './data/business_projects.jsx';
import { BUSINESS_TOOLS } from './data/business_tools.jsx';
import { BUSINESS_TECH  } from './data/business_tech.jsx';
import Card from './components/Card.jsx';
import './App.css';

import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaServer, FaShieldAlt, FaBriefcase } from 'react-icons/fa';

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: GLOBALS.bg_img
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(10, 15, 30, 0.92)'}, ${GLOBALS.bg_override_color || 'rgba(10, 15, 30, 0.95)'}), url(${GLOBALS.bg_img})`
        : 'none',
      }}
    >
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            <FaServer className="text-[10px]" /> Enterprise Infrastructure Architecture
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            <FaServer className="text-[10px]" /> Enterprise Solution Architecture
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            <FaServer className="text-[10px]" /> Enterprise System Engineering
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Legacy On-Premises<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Enterprise Systems</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {GLOBALS.app_subtitle || "We modernize legacy CA software chains, construct secure cloud architectures, and engineer self-hosted cloud data deployments."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#/request"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 w-full sm:w-auto justify-center group"
            >
              Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            {/* 🛠️ FIXED: Changed from /careers to /#/careers to support Hash Routing */}
            <a
              href="/#/careers"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-xl border border-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <FaBriefcase className="text-gray-400" /> View Careers
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <main className="px-6 max-w-7xl mx-auto pb-32 space-y-28">

        {/* Section: Featured Services */}
        <section className="w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full" /> Featured Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_SERVICES.slice(0, 3).map((service) => (
              <Card key={service.name} item={service} />
            ))}
          </div>
        </section>

        {/* Section: Trust & Data Security Deep-Dive (🛠️ OVERLAP FIXED) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md items-center">
          <div className="lg:col-span-1">
            <div className="text-yellow-500 bg-yellow-500/10 p-3 rounded-xl w-fit mb-6">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-black mb-4">Strictly Self-Hosted To Protect PII Data</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We eliminate third-party data reliance. Our core development operations, internal management engines, and pipeline monitoring toolchains are entirely self-hosted to maintain ironclad compliance for Personally Identifiable Information (PII).
            </p>
          </div>
          
          {/* Replaced nested full Cards with a clean, un-nested utility grid grid to fix layout overlaps */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            {BUSINESS_TOOLS.slice(0, 4).map((tool) => (
              <div key={tool.name} className="p-6 bg-black/40 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-yellow-500/40 transition-all min-h-[160px]">
                <div>
                  <div className="text-xl text-yellow-400 mb-2">{tool.icon || tool.name[0]}</div>
                  <h4 className="font-bold text-lg text-white mb-1">{tool.name}</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">{tool.desc || tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Core Engineering & Infrastructure Projects */}
        <section className="w-full">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <span className="w-2 h-6 bg-purple-500 rounded-full" /> Systems Engineering & Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_PROJECTS.map((project) => (
              <Card key={project.name} item={project} />
            ))}
          </div>
        </section>

        {/* Section: Supporting Tech Stack */}
        <section className="w-full">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <span className="w-2 h-6 bg-emerald-500 rounded-full" /> Foundation Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BUSINESS_TECH.map((tech) => (
              <div key={tech.name} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center hover:border-emerald-500/30 transition-all">
                <span className="text-sm font-bold text-gray-300 block truncate">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Capture Block */}
        <section className="w-full text-center py-12 border-t border-white/10">
          <h2 className="text-2xl font-black mb-2">Have an infrastructure challenge?</h2>
          <p className="text-gray-400 text-sm mb-6">Reach out directly to open an engineering architecture discovery session.</p>
          <a
            href="mailto:careers@remote-tech.us?subject=Architecture Consultation Request"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm"
          >
            <FaEnvelope /> Contact Engineering Desk
          </a>
        </section>

      </main>
    </div>
  );
}

