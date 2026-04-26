import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity=60 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center text-white font-bold text-2xl">
            REMOTE TECH US 
          </div>
          <div className="ml-10 flex items-baseline space-x-6">
            <RouterLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/contacts" 
              className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}
            >
              Our Team
            </RouterLink>
            {/* Keep specific high-value external tools below */}
            <NavLink href="https://gitea.remote-tech.us" label="Gitea" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="https://pm.remote-tech.us" label="Open Project" />
              <NavLink href="https://kanboard.remote-tech.us" label="Kanboard" />
              <NavLink href="https://gitea.remote-tech.us" label="Gitea" />
              <NavLink href="https://dashy.remote-tech.us" label="Dashy" />
              <NavLink to="/about" className={({  isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="https://pm.remote-tech.us" label="Open Project Management" mobile />
          <NavLink href="https://kanboard.remote-tech.us" label="Kanboard Project Management" mobile />
          <NavLink href="https://gitea.remote-tech.us" label="Gitea Code Management" mobile />
          <NavLink href="https://dashy.remote-tech.us" label="Dashy Dashboard" mobile />
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
