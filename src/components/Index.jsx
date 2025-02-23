

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaUserMd, FaCut } from 'react-icons/fa';

// FindAndBook Component
const FindAndBook = () => {
  const [selectedService, setSelectedService] = useState('Salon');

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-12 text-center">
        
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Find & Book an <span className="text-purple-600">  Appointment</span>
          </h2>
        <p className="text-lg text-gray-600 mb-10">
          Choose your preferred service and learn more about our offerings.
        </p>

        {/* Service Selector */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleServiceChange('Salon')}
            className={`px-6 py-3 rounded-full font-bold transition duration-300 ${
              selectedService === 'Salon'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Salon
          </button>
          <button
            onClick={() => handleServiceChange('Doctor')}
            className={`px-6 py-3 rounded-full font-bold transition duration-300 ${
              selectedService === 'Doctor'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Doctor
          </button>
        </div>

        {/* Service Description */}
        <div>
          {selectedService === 'Salon' ? (
            <div>
              <h3 className="text-4xl font-bold text-purple-600 mb-4">
                Salon Services
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Experience top-notch salon services including haircuts, styling,
                beauty treatments, and more. Our partnered salons offer
                professional services tailored to your needs.
              </p>
              <img
                src="/image/salon2.webp"
                alt="Salon"
                className="w-full rounded-3xl shadow-lg object-cover h-96"
              />
            </div>
          ) : (
            <div>
              <h3 className="text-4xl font-bold text-purple-600 mb-4">
                Doctor Appointments
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Connect with trusted healthcare professionals. Book
                consultations, check-ups, and medical advice from experienced
                doctors at your convenience.
              </p>
              <img
                src="image/doctor2.webp"
                alt="Doctor"
                className="w-full rounded-3xl shadow-lg object-cover h-96"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};




const BookingSteps = () => {
    return (
      <div className=" bg-gradient-to-r from-purple-500 to-indigo-600 text-white   max-w-6xl  rounded-2xl shadow-2xl p-12 relative overflow-hidden ">
        <h2 className="text-4xl font-extrabold text-center mb-8">How It Works</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:w-1/3 px-6">
            <div className="bg-white text-purple-600 p-4 rounded-full shadow-lg mb-4">
              <FaUserMd size={40} />
            </div>
            <h3 className="text-xl font-semibold">Select Service</h3>
            <p className="mt-2 text-gray-200">Choose from a variety of salon and doctor services tailored to your needs.</p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 px-6">
            <div className="bg-white text-purple-600 p-4 rounded-full shadow-lg mb-4">
              <FaCalendarCheck size={40} />
            </div>
            <h3 className="text-xl font-semibold">Choose Date & Time</h3>
            <p className="mt-2 text-gray-200">Pick a convenient date and time for your appointment effortlessly.</p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 px-6">
            <div className="bg-white text-purple-600 p-4 rounded-full shadow-lg mb-4">
              <FaCut size={40} />
            </div>
            <h3 className="text-xl font-semibold">Confirm Booking</h3>
            <p className="mt-2 text-gray-200">Finalize your appointment and get ready for your session.</p>
          </div>
        </div>
      </div>
    );
  };


// Main SalonOnboarding Component
const SalonOnboarding = () => {
  const whyChooseUs = [
    {
      icon: '💼',
      title: 'Professional Services',
      description: 'Only verified and top-rated professionals to ensure high-quality services.',
    },
    {
      icon: '⚡',
      title: 'Instant Booking',
      description: 'Real-time availability and instant booking confirmations for your convenience.',
    },
    {
      icon: '💸',
      title: 'Transparent Pricing',
      description: 'No hidden costs. Clear pricing with secure online payments.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Why Choose Us Section */}
      <section className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover what makes QuirkyQ the best choice for your needs
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="w-full sm:w-80 md:w-[30%] bg-purple-50 rounded-3xl shadow-md text-center p-8">
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Section */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12 relative overflow-hidden mb-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Quick & Easy
          </h1>
          <h2 className="text-5xl font-extrabold text-purple-600 mb-6 leading-tight">
            1000s of Professional Coming Onboard
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Each day, thousands of salons & doctos from across the globe join us, 
            enriching our beauty and wellness network.
          </p>

          <Link to="/professional">
            <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <BookingSteps/>
      <FindAndBook />
    </div>
  );
};

export default SalonOnboarding;
