// src/components/NavDropdown.jsx
import { useState } from 'react'; // MUST HAVE THIS
import { NavLink as RouterLink } from 'react-router-dom';

export default function NavDropdown({ label, items }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*<button className={`!bg-transparent !p-0 !border-0 flex items-center gap-1 py-2 text-white hover:text-blue-300 transition-colors`}>*/}
      <button className="bg-transparent p-0 border-0 flex items-center gap-1 text-base font-normal text-white hover:text-blue-300 transition-colors cursor-pointer focus:outline-none">
        {label}
        <span className={`text-[10px] transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {/* Dropdown Menu */}
      {isHovered && (
        <div className="absolute left-0 mt-0 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-md shadow-2xl py-2 z-[60]">
          {items.map((item) => (
            <RouterLink
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 transition-all"
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              {item.label}
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
}

