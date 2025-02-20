import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative z-10 container mx-auto px-6">
      <div className="min-h-[80vh] flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          
          <div className="relative mb-12">
            <h1 className="text-7xl md:text-8xl font-black mb-4 tracking-tight
                         bg-gradient-to-br from-white via-red-200 to-red-400 
                         text-transparent bg-clip-text relative z-10">
              Miad Chowdhury
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 
                          blur-3xl opacity-30 -z-10"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8
                       bg-gradient-to-r from-red-400 to-rose-500 
                       text-transparent bg-clip-text tracking-tight">
            Senior Software Engineer
          </h2>

          <div className="relative max-w-3xl mx-auto mb-12 p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-950 to-black rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg animate-pulse opacity-20"></div>
            <p className="relative text-xl text-gray-200 leading-relaxed">
              Architecting scalable financial systems and leading engineering teams at 
              <span className="font-semibold text-red-400"> JP Morgan Chase</span>
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a href="#contact" 
               className="group relative px-8 py-4 bg-gradient-to-br from-red-600 to-red-700 
                        rounded-lg font-bold overflow-hidden shadow-lg text-white
                        hover:shadow-red-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 
                            translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">Contact Me</span>
            </a>
            <a href="#skills" 
               className="group relative px-8 py-4 bg-transparent rounded-lg font-bold 
                        border-2 border-red-500 overflow-hidden shadow-lg text-white
                        hover:shadow-red-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 
                            translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative group-hover:text-white transition-colors duration-300">View Skills</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-24">
            <a href="#" className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8
                    flex flex-col items-center text-red-400">
        <span className="text-sm mb-2 animate-pulse">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
