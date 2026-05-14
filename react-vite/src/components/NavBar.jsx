// src/components/NavBar.jsx
import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { GLOBALS } from '../data/app__globals.jsx';
import NavDropdown from './NavDropdown.jsx';
import MobileNavLink from './MobileNavLink.jsx';

const productFiles = import.meta.glob('../data/products/*.jsx', { eager: true });
const serviceFiles = import.meta.glob('../data/services/*.jsx', { eager: true });

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Parse product filesystem routes
  const productSubmenu = Object.entries(productFiles).map(([path, module]) => {
    const id = path.split('/').pop().replace('.jsx', '');
    return {
      label: module.CONFIG?.label || id.toUpperCase(),
      path: `/products/${id}`,
      icon: module.DATA?.[0]?.icon
    };
  });

  // Parse service filesystem routes
  const serviceSubmenu = Object.entries(serviceFiles).map(([path, module]) => {
    const id = path.split('/').pop().replace('.jsx', '');
    return {
      label: module.CONFIG?.label || id.toUpperCase(),
      path: `/services/${id}`,
      icon: module.DATA?.[0]?.icon
    };
  });

  return (
    <nav className="bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center text-white font-bold text-2xl">
            <img src={GLOBALS.app_logo} width='25px' alt="logo" />
            &nbsp;{GLOBALS.app_title}
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex ml-4 lg:ml-10 items-center space-x-4 lg:space-x-6 h-full">
            <RouterLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}> 
              Home 
            </RouterLink>

            <NavDropdown
              label="Products"
              items={productSubmenu}
              basePath="/products"
            />

            <NavDropdown
              label="Services"
              items={serviceSubmenu}
              basePath="/services"
            />
          </div>

          {/* Hamburger Mobile Toggle */}
          <div className="mr-2 flex md:hidden">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)} 
              className="nav-menu-btn focus:outline-none text-xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Block Execution */}
      {/* Inside Mobile Drawer Block Execution layout boundary loop in NavBar.jsx */}
      {isOpen && (
        <div className="md:hidden absolute top-10 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink item={{ label: 'Home', path: '/' }} onClose={() => setIsOpen(false)} />
          
          <MobileNavLink 
            item={{ label: 'Products', path: '#' }} 
            subItems={productSubmenu} 
            basePath="/products" 
            onClose={() => setIsOpen(false)} 
          />
          
          <MobileNavLink 
            item={{ label: 'Services', path: '#' }} 
            subItems={serviceSubmenu} 
            basePath="/services" 
            onClose={() => setIsOpen(false)} 
          />
        </div>
      )}
    </nav>
  );
}

