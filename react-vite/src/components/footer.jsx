import { GLOBALS } from '../data/app__globals.jsx';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaProjectDiagram, FaHdd, FaAddressCard, FaSms } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="space-y-4 lg:col-span-2 text-left"> {/* text-left to align <p> below */}
          <div className="flex items-center text-white font-bold text-2xl justify-start">
            <img src={ GLOBALS.app_logo } width='25px'/> &nbsp;{ GLOBALS.app_title }
          </div>
          <p className="text-sm max-w-xs"> {/* max-w-xs keeps the text from stretching too far right */}
            A React, Vite, and Tailwind CSS design.
          </p>
          {GLOBALS.app_linkedin && (
            <a href={GLOBALS.app_linkedin} target="_blank" className="hover:text-blue-600 flex items-center gap-2 group" >
              {/* Set size here (e.g., size={24} or size="1.5em") */}
              <FaLinkedin size={24} className="shrink-0" />
              <span className="text-xs opacity-80 group-hover:opacity-100 truncate">
                {GLOBALS.app_linkedin}
              </span>
           </a>
          )}
          {GLOBALS.app_support && (
            <a href={`mailto:${GLOBALS.app_support}`} className="hover:text-blue-600 flex items-center gap-2 group" >
              {/* Set size here (e.g., size={24} or size="1.5em") */}
              <FaEnvelope size={24} className="shrink-0" />
              <span className="text-xs opacity-80 group-hover:opacity-100 truncate">
                {GLOBALS.app_support}
              </span>
           </a>
          )}
        </div>
        {/*
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">
            <img src={ GLOBALS.app_logo } width='25px'/> { GLOBALS.app_title }
          </h2>
          <p className="text-sm">
            A React, Vite, and Tailwind CSS web design.
          </p>
        </div>
        */}
        {/* Links Group 1 - Reimagined Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Technical Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#/dev-docs" className="hover:text-white transition flex items-center gap-2">
                <FaCode className="text-blue-400" /> Dev Documentation
              </a>
            </li>
            <li>
              <a href="#/tech-stack" className="hover:text-white transition flex items-center gap-2">
                <FaHdd className="text-purple-400" /> Our Tech Stack
              </a>
            </li>
            <li>
              <a href="#/case-studies" className="hover:text-white transition flex items-center gap-2">
                <FaProjectDiagram className="text-yellow-400" /> Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#/about" className="hover:text-white transition">About us</a></li>
            <li><a href="#/careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="#/contact-us" className="hover:text-white transition">Contact us</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          {/* TODO: Need to install Linkmonk on unraid with reverse proxy */}
          <h3 className="text-white font-semibold mb-4"><a href="#/mission">The Future Is Here...</a></h3>
          {/* 
          <form className="flex flex-col space-y-2">
            <input name="email" id="newsletter-email" 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
              Subscribe
            </button>
          </form>
        */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} {GLOBALS.app_company} All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="#/terms-of-service" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
      {/*
      <hr />
      */}
    </footer>
  );
};

export default Footer;

