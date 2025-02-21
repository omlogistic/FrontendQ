import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCut, FaStethoscope } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const Dashboard = () => {
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
  return (
    <div>
       <header className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
       <Navbar/>
      </header>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="text-center mb-12">
          

          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Choose Your <span className="text-purple-600">   Service</span>
          </h1>
          <p className="text-md text-gray-700 max-w-xl mx-auto">
            Discover top-rated professionals for your beauty and health needs. Easy booking for salons and doctors at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <CategoryCard
            icon={<FaCut className="h-12 w-12 text-purple-600" />}
            title="Salon Services"
            description="Expert hairstyling, grooming, and beauty treatments from top salons near you."
            link="/salon"
          />
          <CategoryCard
            icon={<FaStethoscope className="h-12 w-12 text-purple-600" />}
            title="Doctor Consultation"
            description="Consult highly qualified healthcare professionals with ease."
            link="/doctor"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CategoryCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="block transform transition-transform hover:scale-105">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default Dashboard;