import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 border border-red-800 rounded-xl p-8 shadow-xl">
            {/* Contact Info */}
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-6">
                Ready to discuss opportunities or have a project in mind?
              </p>
              <p className="text-gray-400">
                Currently based in <span className="text-red-400">New York City, NY</span>
              </p>
            </div>

            {/* Contact Links */}
            <div className="grid md:grid-cols-3 gap-6">
              <a href="#" 
                 className="group flex items-center justify-center gap-3 p-4
                           bg-gray-800 rounded-lg border border-red-800
                           hover:bg-red-900/20 transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20">
                <Mail className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-red-300 transition-colors">Email</span>
              </a>
              <a href="#" 
                 className="group flex items-center justify-center gap-3 p-4
                           bg-gray-800 rounded-lg border border-red-800
                           hover:bg-red-900/20 transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20">
                <Linkedin className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-red-300 transition-colors">LinkedIn</span>
              </a>
              <a href="#" 
                 className="group flex items-center justify-center gap-3 p-4
                           bg-gray-800 rounded-lg border border-red-800
                           hover:bg-red-900/20 transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20">
                <Github className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-red-300 transition-colors">GitHub</span>
              </a>
            </div>

            {/* Message */}
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Looking forward to connecting and discussing potential opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
