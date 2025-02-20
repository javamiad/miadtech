import React, { useState } from 'react';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8 text-center">
        <div className="inline-flex backdrop-blur-sm bg-black/30 px-6 py-3 rounded-full shadow-lg 
                       border border-red-500/20 flex-wrap justify-center gap-2">
          {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
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

      {/* Sections */}
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 Miad Chowdhury. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
