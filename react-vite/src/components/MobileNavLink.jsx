// src/components/MobileNavLink.jsx
import { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { GLOBALS } from '../data/app__globals.jsx';

export default function MobileNavLink({ item, subItems, onClose, basePath }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Evaluate active text highlighting paths for mobile headers
  const isMobileHeaderActive = 
    (subItems && subItems.some(sub => location.pathname === sub.path)) ||
    (basePath && location.pathname.startsWith(basePath)) ||
    location.pathname === item.path;

  // If no submenu items exist, render a standard link layout row block
  if (!subItems || subItems.length === 0) {
    return (
      <RouterLink
        to={item.path}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-4 py-3 border-b border-white/5 transition-colors ${
            isActive 
              ? `${GLOBALS.theme?.textActive || "text-blue-400 font-bold"}` 
              : "text-white hover:bg-white/5"
          }`
        }
      >
        {item.label}
      </RouterLink>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        // Force complete isolation away from browser form button backgrounds
        style={{ background: 'transparent', backgroundColor: 'transparent', border: 'none', padding: '12px 16px' }}
        className={`nav-menu-btn w-full flex justify-between items-center transition-colors cursor-pointer focus:outline-none ${
          isMobileHeaderActive
            ? `${GLOBALS.theme?.textActive || "text-blue-400 font-bold"}`
            : "text-white hover:bg-white/5"
        }`}
      >
        <div className="flex items-center gap-2">
          {item.icon} {item.label}
        </div>
        <span 
          className="text-xs transition-transform duration-200" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
      </button>

      {/* Accordion Nested Options Sub-Block */}
      {isOpen && (
        <div className="bg-white/5 pb-2 transition-all">
          {subItems.map((sub, index) => (
            <RouterLink
              key={`${sub.path}-${index}`}
              to={sub.path}
              onClick={onClose}
              className={({ isActive: isSubActive }) =>
                `flex items-center gap-3 pl-8 pr-4 py-2 text-sm transition-all ${
                  isSubActive
                    ? "text-blue-400 font-bold bg-blue-600/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {sub.icon && <span className="text-lg flex items-center">{sub.icon}</span>}
              <span>{sub.label}</span>
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
}

