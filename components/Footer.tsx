
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Seoul Mountains Explorer. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">
          Powered by React, Tailwind CSS, and Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
