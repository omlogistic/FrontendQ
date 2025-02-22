import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const Doctor = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://quirky-backend.vercel.app/api/vendors', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      const filteredDoctors = response.data
        .filter(vendor => vendor.service_type === "Doctor")
        .map(doctor => ({
          id: doctor.id,
          name: doctor.enterprise_name,
          image: doctor.exterior_image,
          rating: 4.7, // Static rating
          contact: doctor.contact_number,
          address: doctor.full_address,
          description: doctor.personal_intro
        }));
      setDoctors(filteredDoctors);
    })
    .catch(error => console.error('Error fetching doctors:', error))
    .finally(() => setLoading(false));
  }, []);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar/>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-6 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Find the Perfect Doctor</h1>
          <button onClick={() => navigate('/dashboard')} className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md">
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>
        
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search doctors..."
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading ? (
          <p className="text-center text-lg">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredDoctors.length > 0 ? filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-40 object-cover rounded-2xl" 
                />
                <h3 className="text-lg font-semibold mt-3">{doctor.name}</h3>
                <p className="text-sm text-gray-600">Rating: {doctor.rating} ★</p>
                <p className="text-sm text-gray-600">📞 {doctor.contact}</p>
                <p className="text-sm text-gray-600">📍 {doctor.address}</p>
                <p className="text-sm text-gray-800 mt-2">{doctor.description}</p>
              </div>
            )) : <p className="text-center text-lg">No doctors found.</p>}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Doctor;
    