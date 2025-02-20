// src/components/layout/Header.jsx
import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = ['about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <nav className="container mx-auto px-6 py-8 text-center">
      <div className="inline-flex backdrop-blur-sm bg-black/30 px-6 py-3 rounded-full shadow-lg 
                     border border-red-500/20 flex-wrap justify-center gap-2">
        {navItems.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 
                       ${activeSection === section 
                         ? 'bg-red-700/50 text-white' 
                         : 'text-gray-300 hover:text-red-300'} 
                       hover:scale-105`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
