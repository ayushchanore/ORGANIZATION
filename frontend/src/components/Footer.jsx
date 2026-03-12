import React from 'react'
import {  FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className=" text-grey py-10 mt-20 dark:bg-white-900/70    bg-white-50">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">

        {/* Copyright */}
        <p className=" text-gray-600 text-sm sm:text-base text-gray-300">
          © 2026 ORGANIZATION. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">

         
          {/* Email */}
          <a
            href="ayushchanore05@gmail.com"
            className="w-11 h-11 rounded-full bg-white text-indigo-600
                       flex items-center justify-center
                       transition-all duration-300
                       hover:bg-indigo-600 hover:text-white
                       hover:-translate-y-1"
          >
            <FaEnvelope size={20} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white text-indigo-600
                       flex items-center justify-center
                       transition-all duration-300
                       hover:bg-indigo-600 hover:text-white
                       hover:-translate-y-1"
          >
            <FaTwitter size={20} />
          </a>

           <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white text-indigo-600
                       flex items-center justify-center
                       transition-all duration-300
                       hover:bg-indigo-600 hover:text-white
                       hover:-translate-y-1"
          >
            <FaInstagram size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;