import { GLOBALS } from './app__globals';
import { CONTACTS } from './business_contacts';
import { TOOLS } from './business_tools';
import { SERVICES } from './business_services';
import NavBar from './components/NavBar';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; // Install: npm install qrcode.react

function App() {
  const [count, setCount] = useState(0)

  // Debugging should happen here, not in the JSX
  console.log("Background Image URL:", GLOBALS.bg_img);

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-fixed" 
      style={{ 
        // If bg_override_color exists, use it. Otherwise, let index.css handle it.
        backgroundColor: GLOBALS.bg_override_color ?? 'transparent',
        backgroundImage: GLOBALS.bg_img ? `url(${GLOBALS.bg_img})` : 'none' 
      }}
    >
      <NavBar />
      {/* Main Container */}

      <div className="flex flex-col items-center justify-center w-full px-6 pt-24 pb-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-start">
          {/* DISTINCT BUSINESS CARD (Hero) */}
          {CONTACTS.map((contact, index) => (
            <motion.div
              key={contact.name || index} // Added unique key
              whileHover={{ y: -5 }}
              className="lg:col-span-1 bg-white text-gray-900 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center border-4 border-blue-500">
              {contact.logo && (
                <img src={contact.logo} alt="Logo" className="w-20 mb-4" />
              )}
              <h2 className="text-3xl font-black mb-1">{contact.name}</h2>
              {contact.title && (
                <p className="text-blue-600 font-bold mb-6">{contact.title}</p>
              )}
              <div className="text-gray-600 space-y-2 mb-6 text-sm">
                {contact.phone && (
                  <p className="flex items-center justify-center gap-2 font-medium">
                    <FaPhone className="text-blue-500" /> 
                    {contact.phone_sms && (
                      <FaSms className="text-blue-500" /> 
                    )}
                    {contact.phone}
                  </p>
                )}
                {contact.address && (
                  <p className="flex items-center justify-center gap-2 font-medium">
                    <FaMapMarkerAlt className="text-blue-500" /> {contact.address}
                  </p>
                )}
              </div>
              <div className="flex gap-4 mb-8 text-2xl text-gray-700">
                {contact.linkedin && (
                  <a href={contact.linkedin} className="hover:text-blue-600"><FaLinkedin /></a>
                )}
                {contact.github && (
                  <a href={contact.github} className="hover:text-gray-900"><FaGithub /></a>
                )}
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="hover:text-red-500"><FaEnvelope /></a>
                )}
                {contact.chat && (
                  <a href={contact.chat} className="hover:text-red-500"><FaRocketchat /></a>
                )}
                {contact.web && (
                  <a href={contact.web} className="hover:text-red-500"><TbWorldWww /></a>
                )}
              </div>
              <div className="flex flex-col w-full gap-3">
                {contact.calcom && (
                  <a 
                    href={contact.calcom} 
                    //className="w-full bg-black/40 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                    className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition border border-gray-300" >
                    <FaRegCalendarAlt /> Schedule Meeting
                  </a>
                )}
                {/* New Download Contact Button */}
                <a 
                  href={contact.vcfPath} 
                  download 
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition border border-gray-300" >
                  <FaAddressCard /> Save Contact
                </a>
              </div>
            </motion.div>
          ))}

          {/* TOOLS CARDS GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOOLS.map((tool) => (
              <motion.a
                key={tool.name}
                href={tool.url}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition">
                <div className="text-3xl text-blue-400">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
          {/* SERVICE CARDS GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <motion.a
                key={service.name}
                href={service.url}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition">
                <div className="text-3xl text-blue-400">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App
