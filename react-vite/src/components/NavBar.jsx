import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { GLOBALS } from '../data/app__globals.jsx';
import NavDropdown from './NavDropdown.jsx';
import MobileNavLink from './MobileNavLink.jsx';

// 1. Scan for service files
// Ensure this path correctly points from NavBar.jsx to your data folder
const productFiles = import.meta.glob('../data/products/*.jsx', { eager: true });
const serviceFiles = import.meta.glob('../data/services/*.jsx', { eager: true });

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Build the Submenu Array for Products
  const productSubmenu = Object.entries(productFiles).map(([path, module]) => {
    const id = path.split('/').pop().replace('.jsx', '');
    return {
      label: module.CONFIG?.label || id.toUpperCase(),
      path: `/products/${id}`,
      icon: module.DATA?.[0]?.icon // Grabs icon from first item in that file
    };
  });

  // 2. Build the Submenu Array for Services
  const serviceSubmenu = Object.entries(serviceFiles).map(([path, module]) => {
    const id = path.split('/').pop().replace('.jsx', '');
    return {
      label: module.CONFIG?.label || id.toUpperCase(),
      path: `/services/${id}`,
      icon: module.DATA?.[0]?.icon // Grabs icon from first item in that file
    };
  });

  return (
    <nav className="bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center text-white font-bold text-2xl">
            <img src={ GLOBALS.app_logo } width='25px'/>
             &nbsp;{ GLOBALS.app_title }
          </div>
          {/*<div className="ml-10 flex items-baseline space-x-6">*/}
          <div className="hidden md:flex ml-4 lg:ml-10 items-baseline space-x-4 lg:space-x-6">
            <RouterLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Home </RouterLink>
            {/*<RouterLink to="/products" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Products </RouterLink>*/}
            {/*<RouterLink to="/services" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Services </RouterLink> */}
            {/* Submenu Example */}
            <NavDropdown 
              label="NavDropdown" 
              items={[
                { label: 'Software', path: '/products/software' },
                { label: 'Hardware', path: '/products/hardware' },
              ]} 
            />
            {/* Dynamic Products Dropdown */}
            <NavDropdown 
              label="Products" 
              items={productSubmenu} 
              basePath="/products" 
            />
            {/* DYNAMIC DROPDOWN */}
            <NavDropdown 
              label="Services" 
              items={serviceSubmenu} 
              basePath="/services" 
            />
            {/*
            <RouterLink to="/contacts" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Team </RouterLink>
            <RouterLink to="/clients" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Clients </RouterLink>
            */}
          </div>
          {/*
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="https://pm.remote-tech.us" label="Open Project" />
              <NavLink href="https://kanboard.remote-tech.us" label="Kanboard" />
              <NavLink href="https://gitea.remote-tech.us" label="Gitea" />
              <NavLink href="https://dashy.remote-tech.us" label="Dashy" />
              <NavLink to="/about" className={({  isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </div>
          </div>
          */}
          <div className="mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"> 
          <MobileNavLink item={{ label: 'Home', path: '/' }} onClose={() => setIsOpen(false)} />
          
          <MobileNavLink 
            item={{ label: 'Services', path: '#', hasSubmenu: true }} 
            subItems={serviceSubmenu} 
            onClose={() => setIsOpen(false)} 
          />

          <RouterLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Home </RouterLink><br />
          <RouterLink to="/products" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Products </RouterLink><br />
          {/*
          <RouterLink to="/services" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Services </RouterLink><br />
          <RouterLink to="/contacts" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Our Team </RouterLink><br />
          <RouterLink to="/clients" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"} > Clients </RouterLink><br />
          <NavLink href="https://pm.remote-tech.us" label="Open Project Management" mobile />
          <NavLink href="https://kanboard.remote-tech.us" label="Kanboard Project Management" mobile />
          <NavLink href="https://gitea.remote-tech.us" label="Gitea Code Management" mobile />
          <NavLink href="https://dashy.remote-tech.us" label="Dashy Dashboard" mobile />
          */}
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label, mobile }) {
  return (
    <a
      href={href}
      className={`${
        mobile ? 'block' : 'inline-block'
      } text-white hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium`}
    >
      {label}
    </a>
  );
}

export default NavBar;
