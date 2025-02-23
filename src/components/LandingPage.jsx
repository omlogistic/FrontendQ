

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SalonOnboarding from './Index';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categories = [
    {
      image: '/image/salon.jpg',
      title: 'Salon',
      description: 'Book your next haircut, styling, or beauty treatment. Enjoy professional services at top-rated salons near you with easy online booking.',
      link: '/salon',
    },
    {
      image: '/image/doctor.jpg',
      title: 'Doctor',
      description: 'Connect with healthcare professionals. Schedule consultations, check-ups, and medical advice from experienced doctors with just a few clicks.',
      link: '/doctor',
    },
  ];

  return (
   <div>
     <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <Header />
      </header>
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-purple-600">QuirkyQ</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Your one-stop solution for Salon and Doctor bookings
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-16 mb-16 px-4">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="w-full sm:w-80 md:w-96 transform hover:scale-105 transition duration-300">
              <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-center flex flex-col items-center h-auto justify-center border border-purple-300 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-700 text-lg text-center">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-purple-600 rounded-xl p-10 text-center text-white shadow-xl mx-4">
          <h2 className="text-3xl font-bold mb-5">Are you a professional?</h2>
          <p className="text-lg mb-6">Join our platform and grow your business with ease</p>
          <Link
            to="/professional"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-md font-medium hover:bg-gray-200 transition duration-300"
          >
            Join as Professional
          </Link>
        </div>
      </main>
   
    </div>
    <SalonOnboarding/>
    <Footer />
   </div>
  );
};

export default LandingPage;


