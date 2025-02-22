import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    axios
      .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
      .then((response) => setDoctor(response.data))
      .catch((error) => console.error('Error fetching doctor:', error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  if (!doctor) return <p className="text-center text-lg">Doctor not found.</p>;

  return (
   <div>
   <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </header>
     <div className="max-w-6xl mx-auto px-4 mt-16 py-6">
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={doctor.exterior_image}
          alt={doctor.enterprise_name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{doctor.enterprise_name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-500">
                <FaStar className="mr-1" />
                <span>4.7 </span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                <span>{doctor.full_address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-800">{doctor.personal_intro}</p>
        <h3 className="text-xl font-bold mt-6">Contact</h3>
        <p className="text-gray-600">
          <FaPhoneAlt className="mr-2" />
          {doctor.contact_number}
        </p>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default DoctorDetails;
