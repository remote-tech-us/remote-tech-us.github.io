import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

export default function MobileNavLink({ item, subItems, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  // If no submenu, render a normal link
  if (!subItems || subItems.length === 0) {
    return (
      <RouterLink 
        to={item.path} 
        onClick={onClose} 
        className="block text-white px-4 py-3 border-b border-white/5 hover:bg-white/5"
      >
        {item.label}
      </RouterLink>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-white px-4 py-3"
      >
        <div className="flex items-center gap-2">
          {item.icon} {item.label}
        </div>
        <span className="text-xs transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="bg-white/5 pb-2">
          {subItems.map(sub => (
            <RouterLink 
              key={sub.path} 
              to={sub.path} 
              onClick={onClose} 
              className="flex items-center gap-3 pl-8 pr-4 py-2 text-white/70 hover:text-white text-sm"
            >
              {sub.icon} {sub.label}
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
}

