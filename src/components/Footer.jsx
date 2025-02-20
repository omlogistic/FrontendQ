import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg py-4 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-2xl text-purple-600" />
            <p className="text-lg text-gray-700">support@quirkyq.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-2xl text-purple-600" />
            <p className="text-lg text-gray-700">+123 456 7890</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4">
          <p className="text-sm flex justify-center items-center space-x-1 text-gray-700">
            <span>&copy; {new Date().getFullYear()} QuirkyQ. Made with</span>
            <FaHeart className="text-red-500" />
            <span>by QuirkyQ Team.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
