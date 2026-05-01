import { GLOBALS } from './data/app__globals.jsx';
import { CONTACTS } from './data/business_contacts.jsx';
import { BUSINESS_SERVICES } from './data/business_services.jsx';
import { BUSINESS_PROJECTS } from './data/business_projects.jsx';
import { BUSINESS_TOOLS } from './data/business_tools.jsx';
import { BUSINESS_TECH  } from './data/business_tech.jsx';
import Card from './components/Card.jsx';
import './App.css';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; // Install: npm install qrcode.react
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { useAutoScroll } from './hooks/useAutoScroll.js';

function App() {
  const [count, setCount] = useState(0)

  // Debugging should happen here, not in the JSX
  console.log("Background Image URL:", GLOBALS.bg_img);

  // ADD Scrolling 
  const scrollRef = useAutoScroll(1, 30);

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" 
      style={{ 
        // If bg_override_color exists, use it. Otherwise, let index.css handle it.
        // backgroundColor: GLOBALS.bg_override_color ?? 'transparent',
        // backgroundImage: GLOBALS.bg_img ? `url(${GLOBALS.bg_img})` : 'none' 
        backgroundImage: GLOBALS.bg_img 
        ? `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}), url(${GLOBALS.bg_img})` 
        : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
    {/* Main Container */}
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <header className="mb-12 text-center lg:text-left">
        {/*<h1 className="text-4xl font-black mb-2">{ GLOBALS.app_title }</h1>*/}
        <p className="text-gray-400">{ GLOBALS.app_subtitle }</p>
      </header>

      {/* Section: Services Carousel */}
      <section className="mb-16 w-full max-w-full overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-blue-500 rounded-full" /> Featured Services
        </h2>
        {/* 1. 'overflow-x-auto' enables the scroll.
            2. 'flex-nowrap' prevents items from wrapping/squeezing.
            3. 'snap-x' enables the snap-to-item behavior.
            4. replace snap-mandatory with snap-proximity
        */}
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-proximity scrollbar-hide w-full">
          {BUSINESS_SERVICES.map((service) => (
            <Card key={service.name} item={service} />
          ))}
        </div>
      </section>

      {/* Section: Projects Carousel */}
      <section className="mb-16 w-full overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-purple-500 rounded-full" /> Projects 
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide">
          {BUSINESS_PROJECTS.map((project) => (
            <Card key={project.name} item={project} />
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
          {/*  CARDS GRID */}
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-yellow-500 rounded-full" /> Internal Tools
          </h2>
          <p>The following are the core tools used to manage projects, and are all self-hosted to maintain Personally Identifiable Information (PII) data.</p>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
            {BUSINESS_TOOLS.map((tool) => (
              <Card key={tool.name} item={tool} />
            ))}
          </div>
        </div>
      </div>
      {/*<hr className="w-full border-gray-800 my-10" />*/}
      <hr className="w-8 w-full max-w-6xl" />
      <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
          {/*  CARDS GRID */}
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-yellow-500 rounded-full" /> Supporting Technologies
          </h2>
          <p>These technologies are the underpinning of modern workflows and tool chains.</p>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
            {BUSINESS_TECH.map((tech) => (
              <Card key={tech.name} item={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default App
