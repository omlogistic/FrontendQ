



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaCut, FaUserCircle } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/dashboard" className="flex items-center">
//               <FaCut className="h-8 w-8 text-purple-600" />
//               <span className="ml-2 text-2xl font-bold text-gray-900">QuirkyQ</span>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
              
//               <span className="text-gray-800 font-medium">Animesh</span>
//               <FaUserCircle className="h-8 w-8 text-gray-600" />
//             </div>
//             <Link to="/quirkyQ" className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
//               Logout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaCut, FaUserCircle } from "react-icons/fa";
// import { AuthContext } from "../auth/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/dashboard" className="flex items-center">
//               <FaCut className="h-8 w-8 text-purple-600" />
//               <span className="ml-2 text-2xl font-bold text-gray-900">
//                 QuirkyQ
//               </span>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <span className="text-gray-800 font-medium">
//                 {user?.name || "Guest"} {/* ✅ Show dynamic name or "Guest" */}
//               </span>
//               <FaUserCircle className="h-8 w-8 text-gray-600" />
//             </div>
//             <button
//               onClick={logout}
//               className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCut, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ Clear session and context state
    navigate('/quirkyQ'); // ✅ Redirect to /quirkyQ
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <FaCut className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">QuirkyQ</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 font-medium">{user?.name || "Guest"}</span>
              <FaUserCircle className="h-8 w-8 text-gray-600" />
            </div>
            <button
              onClick={handleLogout}
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
