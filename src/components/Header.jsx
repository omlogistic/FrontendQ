import React from 'react';
import { Link } from 'react-router-dom';
import { FaCut } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCut className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">QuirkyQ</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
              Sign Up
            </Link>
            <Link to="/professional" className="text-purple-600 border border-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-50">
              Join as Professional
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
