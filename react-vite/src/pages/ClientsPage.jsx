// src/pages/ClientsPage.jsx
import { GLOBALS } from '../data/app__globals.jsx';
import { FEATURED_CLIENTS } from '../data/featured_clients.jsx';
import { BUSINESS_CLIENTS } from '../data/business_clients.jsx';
//import NavBar from '../components/NavBar.jsx';
import Card from '../components/Card.jsx';
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; // Install: npm install qrcode.react
import { useEffect, useRef } from 'react';
import { useAutoScroll } from '../hooks/useAutoScroll.js';

function ClientsPage() {
  const [count, setCount] = useState(0)

  // Debugging should happen here, not in the JSX
  console.log("Background Image URL:", GLOBALS.bg_img);

  // ADD Scrolling 
  const scrollClient = useAutoScroll(1, 30);

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed" 
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
        <section className="mb-16 w-full overflow-hidden">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full" /> Featured Clients
          </h2>
          {/* 1. 'overflow-x-auto' enables the scroll.
              2. 'flex-nowrap' prevents items from wrapping/squeezing.
              3. 'snap-x' enables the snap-to-item behavior.
              4. replace snap-mandatory with snap-proximity
          */}
          <div ref={scrollClient} className="flex flex-nowrap overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-proximity scrollbar-hide">
            {FEATURED_CLIENTS.map((fclient) => (
              <Card key={fclient.name} item={fclient} />
            ))}
          </div>
        </section>

        <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
            {/*  CARDS GRID */}
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-yellow-500 rounded-full" /> Business Clients
            </h2>
            <p></p>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BUSINESS_CLIENTS.map((bclient) => (
                <Card  key={bclient.name} item={bclient} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsPage
