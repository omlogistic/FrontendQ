

import React, { useState } from 'react';
import {
    FaBars,
    FaCarAlt,
    FaUserAlt,
    FaMapMarkerAlt,
    FaMoneyBillAlt,
    FaUserTie,
    FaTruck,
    FaReceipt,
    FaFileInvoiceDollar,
    FaBook,
    FaChartLine,
    FaBuilding
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default
    const toggle = () => setIsOpen(!isOpen);

    const menuItems = [
        { path: '/vehical-masterr', name: 'Create Vehicle Master', icon: <FaCarAlt /> },
        { path: '/drivermaster', name: 'Create Driver Master', icon: <FaUserAlt /> },
        { path: '/pin-master', name: 'Pin Master', icon: <FaMapMarkerAlt /> },
        { path: '/expancemanagement', name: 'Create Expense Master', icon: <FaMoneyBillAlt /> },
        { path: '/assign-driver', name: 'Assign Driver to Vehicle', icon: <FaUserTie /> },
        { path: '/create-trip', name: 'Create Trip', icon: <FaTruck /> },
        { path: '/create-trip-expense', name: 'Create Trip Wise Expense', icon: <FaReceipt /> },
        { path: '/create-trip-invoice', name: 'Create Trip Wise Invoice', icon: <FaFileInvoiceDollar /> },
        { path: '/create-trip-payment', name: 'Create Trip Wise Payment', icon: <FaMoneyBillAlt /> },
        { path: '/create-day-book', name: 'Create Day Book ', icon: <FaBook /> },
        { path: '/profit-loss', name: ' Profit & Loss Account', icon: <FaChartLine /> },
        { path: '/company-master', name: 'Company Master', icon: <FaBuilding /> },
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white fixed top-0 left-0 h-screen ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
                {/* Top Section */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <NavLink to="/dashboard" className="flex items-center">
                        {isOpen && <h1 className="text-xl font-bold">MyFleet</h1>}
                    </NavLink>
                    <button
                        className="text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={toggle}
                    >
                        <FaBars />
                    </button>
                </div>

                {/* Scrollable Menu Items */}
                <div
                    className="mt-4 h-[calc(100vh-4rem)] overflow-y-auto"
                    style={{
                        scrollbarWidth: 'none', // For Firefox
                        msOverflowStyle: 'none', // For Internet Explorer and Edge
                    }}
                >
                    <style>
                        {`
                        /* Hide scrollbar for Chrome, Safari and Edge */
                        .scrollable-menu::-webkit-scrollbar {
                            display: none;
                        }
                        `}
                    </style>
                    <div className="scrollable-menu">
                        {menuItems.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className={({ isActive }) =>
                                    `flex items-center p-3 my-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 rounded-md ${
                                        isActive ? 'bg-gray-700' : ''
                                    }`
                                }
                            >
                                <div className="text-lg">{item.icon}</div>
                                <span className={`ml-3 ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className={`flex-grow p-6 bg-gray-100 ${isOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
