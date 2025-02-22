// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // Loader state
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Show loader

//     try {
//       const response = await axios.post(
//         'https://quirky-backend.vercel.app/api/users/login',
//         { email, password },
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       if (response.data.message === 'Login successful') {
//         toast.success('Login successful! Redirecting...', { position: "top-right" });

//         setTimeout(() => {
//           setLoading(false); // Hide loader
//           navigate('/dashboard');
//         }, 2000);
//       } else {
//         toast.error(response.data.message || 'Something went wrong', { position: "top-right" });
//         setLoading(false); // Hide loader
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Invalid email or password', { position: "top-right" });
//       setLoading(false); // Hide loader
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
//         <Link to="/quirkyQ">
//           <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login to QuirkyQ</h2>
//         </Link>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">Username or Email</label>
//             <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//               <span className="px-3 text-gray-500"><FaUser /></span>
//               <input 
//                 type="text" 
//                 className="w-full p-3 focus:outline-none" 
//                 placeholder="Enter your email or username"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 font-medium mb-2">Password</label>
//             <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//               <span className="px-3 text-gray-500"><FaLock /></span>
//               <input 
//                 type={showPassword ? "text" : "password"} 
//                 className="w-full p-3 focus:outline-none" 
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 className="px-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//             </div>
//           </div>

//           <button 
//             type="submit" 
//             className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? (
//               <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8H4z"></path>
//               </svg>
//             ) : "Login"}
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://quirky-backend.vercel.app/api/users/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.message === "Login successful") {
        toast.success("Login successful! Redirecting...", { position: "top-right" });

        login(); // ✅ Update authentication state in sessionStorage
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error(response.data.message || "Something went wrong", { position: "top-right" });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <Link to="/quirkyQ">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login to QuirkyQ</h2>
        </Link>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Username or Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500"><FaUser /></span>
              <input 
                type="text" 
                className="w-full p-3 focus:outline-none" 
                placeholder="Enter your email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500"><FaLock /></span>
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full p-3 focus:outline-none" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="px-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
