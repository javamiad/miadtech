// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, href, variant = 'primary', className = '' }) => {
  const baseClasses = "group relative px-8 py-4 rounded-lg font-bold overflow-hidden shadow-lg transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-br from-red-600 to-red-700 text-white hover:shadow-red-500/50",
    outline: "bg-transparent border-2 border-red-500 text-white hover:shadow-red-500/50"
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 
                    translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <span className="relative">{children}</span>
    </a>
  );
};

export default Button;
