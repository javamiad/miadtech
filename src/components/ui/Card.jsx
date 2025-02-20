// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-6 rounded-lg border border-red-800 bg-gray-900 
                    hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 
                    transform hover:-translate-y-2 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
