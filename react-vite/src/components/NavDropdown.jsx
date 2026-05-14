// src/components/NavDropdown.jsx
import { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { GLOBALS } from '../data/app__globals.jsx'; // FIX: Added missing import

export default function NavDropdown({ label, items, basePath }) {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  
  // 1. Split path sections cleanly into individual array strings
  const pathParts = location.pathname.split('/').filter(Boolean); // e.g. ["services", "0001-casdm"]
  console.log('location:' + location.pathname + ' ==>[split]==> ' + location.pathname.split('/'));
  // HIGHLIGHTING FIX: Split path parts to accurately verify base directories
  //const pathParts = location.pathname.split('/').filter(Boolean); // e.g. ["services", "00"]
  // COPY AND PASTE THIS TEMP DEBUGGER LOG
  console.log(`[Dropdown Debug: ${label}]`, {
    rawPathname: location.pathname,
    parsedParts: pathParts,
    firstDirectory: pathParts[0],
    configuredBasePath: basePath,
    dropdownLabel: label
  });
  //alert(pathParts);

  // Check if current route is part of this drop section
  // const isDropdownActive =
  //  items.some(item => location.pathname === item.path) ||
  //  (basePath && location.pathname.startsWith(basePath));
  
  // BULLETPROOF MATCHING LOGIC FOR MIXED HASH/BROWSER URLS:
  const isDropdownActive =
    // Check 1: Does the current URL path string exactly match one of your submenu child item paths?
    items.some(item => location.pathname === item.path) ||
    // Check 2: Clean base path check
    (basePath && location.pathname.startsWith(basePath)) ||
    // Check 3: Read window location directly if React Router parameters shift via HashRouter
    window.location.hash.toLowerCase().includes(label.toLowerCase()) ||
    location.pathname.toLowerCase().includes(label.toLowerCase());

  // Safely extract theme colors with clean, definitive fallbacks
  const activeColorClass = GLOBALS.theme?.textActive || "text-blue-400 font-bold";
  const inactiveColorClass = `text-red ${GLOBALS.theme?.textHover || "hover:text-blue-300"}`;
  console.log('label:' + label + '  isDropdownActive:' + isDropdownActive + '  activeColorClass:' + activeColorClass + '  inactiveColorClass:' + inactiveColorClass);
  return (
    <div
      className="relative flex items-center h-10" // Force layout tracking boundary
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className={`nav-menu-btn flex items-center gap-1 text-base transition-colors cursor-pointer focus:outline-none ${
          isDropdownActive ? activeColorClass : inactiveColorClass
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

