// src/components/ContactCard.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms, FaPhone, FaMapMarkerAlt, FaComment, FaRegCalendarAlt, FaRocketchat } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import { QRCodeSVG } from 'qrcode.react'; 

const ContactCard = ({ contact , index }) => {

  // Use email prefix as ID if contact.id doesn't exist
  const contactId = contact.id || contact.email?.split('@')[0] || index;

  // FIX 1: Aligned hash path string exactly to match "/contact-us/:id" route from main.jsx
  const dynamicQrValue = `${window.location.origin}${window.location.pathname}#/contact-us/${contactId}`;

  return (
    <motion.div
        key={contact.id || contact.email || index} 
        whileHover={{ y: -5 }}
        className="relative lg:col-span-1 bg-white text-gray-900 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center border-4 border-blue-500"
      >
      {/* Tag Badge (Coming Soon, New, etc) */}
      {contact.tag  && (
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest shadow-lg">
          {contact.tag}
        </span>
      )}
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
            className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition border border-gray-300" >
            <FaRegCalendarAlt /> Schedule Meeting
          </a>
        )}
        {/* New Download Contact Button */}
        {contact.vcfPath  && (
          <a
            href={contact.vcfPath}
            download
            className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition border border-gray-300" >
            <FaAddressCard /> Save Contact
          </a>
        )}
        {/* FIX 2: Wrapped block logic checking to verify target data generation options safely */}
        {contact.showQR !== false && (
          <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100 shadow-inner">
            <QRCodeSVG value={dynamicQrValue} size={100} marginSize={2} className="mx-auto" />
            <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">Scan to Share</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;

