import { GLOBALS } from './data/app__globals.jsx';
import { CONTACTS } from './data/business_contacts.jsx';
import { TOOLS } from './data/business_tools.jsx';
import { SERVICES } from './data/business_services.jsx';
//import NavBar from './components/NavBar.jsx';
import Card from './components/Card.jsx';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; // Install: npm install qrcode.react
import { useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0)

  // Debugging should happen here, not in the JSX
  console.log("Background Image URL:", GLOBALS.bg_img);

  // ADD Scrolling 
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const step = 1; // Pixels per interval
    const intervalTime = 30; // Milliseconds (lower is smoother)

    const startScrolling = () => {
      return setInterval(() => {
        container.scrollLeft += step;
        
        // Reset to start if we've reached the end for infinite loop feel
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }, intervalTime);
    };

    let autoScroll = startScrolling();

    // Pause on hover
    const pause = () => clearInterval(autoScroll);
    const resume = () => { autoScroll = startScrolling(); };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(autoScroll);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

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
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      <header className="mb-12 text-center lg:text-left">
        <h1 className="text-4xl font-black mb-2">Remote Tech US</h1>
        <p className="text-gray-400">Professional Open-Source Infrastructure & Services</p>
      </header>
      {/* Section: Services Carousel */}
      <section className="mb-16 w-full overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-blue-500 rounded-full" /> Featured Services
        </h2>
        {/* 1. 'overflow-x-auto' enables the scroll.
            2. 'flex-nowrap' prevents items from wrapping/squeezing.
            3. 'snap-x' enables the snap-to-item behavior.
        */}
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((service) => (
            <Card key={service.name} item={service} />
          ))}
        </div>
      </section>

      {/* Section: Tools Carousel */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-purple-500 rounded-full" /> Internal Tools
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {TOOLS.map((tool) => (
            <Card key={tool.name} item={tool} />
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
          {/* TOOLS CARDS GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOOLS.map((tool) => (
              <Card  item={tool} />
            ))}
          </div>
          {/* SERVICE CARDS GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <Card item={service} />
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
)
}

export default App
