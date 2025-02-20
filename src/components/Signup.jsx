import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaCity, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      mobile_number: mobileNumber,
      email,
      city,
      password,
    };

    try {
      const response = await axios.post('https://quirky-backend.vercel.app/api/users/signup', userData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.message === "User registered successfully") {
        toast.success('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      if (error.response && error.response.data.message === "User already exists") {
        toast.error('User already exists! Try logging in.');
      } else {
        toast.error('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center   min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 px-4">
      <div className="w-full max-w-xl bg-white p-10  rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Sign Up for QuirkyQ</h2>
        <form onSubmit={handleSignup}>
          <div className="grid grid-cols-1  w-[32rem] md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="px-3 text-gray-500"><FaUser /></span>
                <input 
                  type="text" 
                  className="w-full p-3 focus:outline-none" 
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="px-3 text-gray-500"><FaEnvelope /></span>
                <input 
                  type="email" 
                  className="w-full p-3 focus:outline-none" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="px-3 text-gray-500"><FaPhone /></span>
                <input 
                  type="tel" 
                  className="w-full p-3 focus:outline-none" 
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">City</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="px-3 text-gray-500"><FaCity /></span>
                <input 
                  type="text" 
                  className="w-full p-3 focus:outline-none" 
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500"><FaLock /></span>
              <input 
                type="password" 
                className="w-full p-3 focus:outline-none" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signup;