// src/components/card.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; // Install: npm install qrcode.react

const Card = ({ item ,  index }) => {
  return (
    <motion.a
      key={item.name}
      //href={item.url}
      href={item.locked ? "#" : item.url} // Disable link if item is locked
      whileHover={{ scale: 1.02 }}
      /* 'w-72' or 'w-80' gives the card a consistent width in the carousel.
         'shrink-0' is vital to prevent the flexbox from squishing the card.
      */
      //className="bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition">
      className={`relative w-72 shrink-0 bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition
        ${item.locked ? 'opacity-60 cursor-not-allowed' : 'hover:bg-white/10'}`}
      >
      {/* Tag Badge (Coming Soon, New, etc) */}
      {item.tag  && (
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest shadow-lg">
          {item.tag}
        </span>
      )}
      {item.icon  && (
      <div className="text-3xl text-blue-400">
        {item.icon}
      </div>
      )}
      {item.desc  && (
      <div>
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p className="text-gray-400 text-sm">{item.desc}</p>
      </div>
      )}
    </motion.a>
  );
};

export default Card;

