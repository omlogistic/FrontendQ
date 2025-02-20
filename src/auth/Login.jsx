

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login to QuirkyQ</h2>
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
                {showPassword ?  <FaEye />:  <FaEyeSlash /> }
              </button>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            Login
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
