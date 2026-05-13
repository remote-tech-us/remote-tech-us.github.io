// src/components/NavDropdown.jsx
import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

export default function NavDropdown({ label, items }) {
  const [isOpen, setIsOpen, isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="text-white hover:text-blue-300 flex items-center gap-1 py-2">
        {label}
        <span className={`text-[10px] transition-transform ${isHovered ? 'rotate-180' : ''}`}>▼</span>
      </button>
      
      {isHovered && (
        <div className="absolute left-0 mt-0 w-48 bg-black/90 backdrop-blur-lg border border-white/10 rounded-md shadow-xl py-2 z-50">
          {items.map((item) => (
            <RouterLink
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm text-white hover:bg-blue-600/30 hover:text-blue-300"
            >
              {item.label}
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
}

