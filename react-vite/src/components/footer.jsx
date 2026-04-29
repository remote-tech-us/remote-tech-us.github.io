import { GLOBALS } from '../data/app__globals.jsx';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center text-white font-bold text-2xl">
            <img src={ GLOBALS.app_logo } width='25px'/> &nbsp;{ GLOBALS.app_title }
          </div>
          <p className="text-sm">
            A React, Vite, and Tailwind CSS design.
          </p>
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
        {/* Links Group 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Templates</a></li>
            <li><a href="#" className="hover:text-white transition">Components</a></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#/careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="#/contacts" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} {GLOBALS.app_company} All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="#/terms" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
      {/*
      <hr />
      */}
    </footer>
  );
};

export default Footer;

