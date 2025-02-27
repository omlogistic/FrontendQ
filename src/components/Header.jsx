




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons from React Icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="ml-2 text-2xl font-bold text-gray-900">QuirkyQ</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/Contact-us"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
            >
              Sign Up
            </Link>
            <Link
              to="/professional"
              className="text-purple-600 border border-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-50"
            >
              Join as Professional
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <Link
              to="/Contact-us"
              className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/signup"
              className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
            <Link
              to="/professional"
              className="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Join as Professional
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
