// src/components/NavDropdown.jsx
import { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { GLOBALS } from '../data/app__globals.jsx'; // FIX: Added missing import

export default function NavDropdown({ label, items, basePath }) {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Check if current route is part of this drop section
  const isDropdownActive =
    items.some(item => location.pathname === item.path) ||
    (basePath && location.pathname.startsWith(basePath));

  return (
    <div
      className="relative flex items-center h-10" // Force layout tracking boundary
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        style={{ background: 'transparent', backgroundColor: 'transparent', border: 'none', padding: 0 }}
        className={`flex items-center gap-1 text-base transition-colors cursor-pointer focus:outline-none ${
          isDropdownActive
            ? `${GLOBALS.theme?.textActive || "text-blue-400 font-bold"}`
            : `text-white ${GLOBALS.theme?.textHover || "hover:text-blue-300"}`
        }`}
      >
        {label}
        <span className={`text-[10px] ml-1 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu Panel */}
      {isHovered && (
        <div className="absolute left-0 top-10 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-md shadow-2xl py-2 z-[60]">
          {items.map((item) => (
            <RouterLink
              key={item.path}
              to={item.path}
              className={({ isActive: isChildActive }) =>
                `flex items-center gap-3 px-4 py-2 text-sm transition-all ${
                  isChildActive 
                    ? "text-blue-400 font-bold bg-blue-600/10" 
                    : "text-gray-300 hover:bg-blue-600/20 hover:text-blue-300"
                }`
              }
            >
              {item.icon && <span className="text-lg flex items-center">{item.icon}</span>}
              <span>{item.label}</span>
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
}

