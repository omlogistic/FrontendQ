


import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ logo, userName, onLogout }) => {
   const navigate = useNavigate(); 

   const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login"); // Redirect to "/home" on successful sign-in
  };
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <img
                    src="/logo.png"
                    alt="Company Logo"
                    className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-lg font-bold">MyFleet</span>
            </div>

            {/* User Info and Logout */}
            <div className="flex items-center space-x-4">
                {/* User Info */}
                <div className="flex items-center space-x-2">
                    <FaUserCircle className="text-3xl" />
                    <span className="hidden sm:block">Vikas Sir</span>
                </div>
                
                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
