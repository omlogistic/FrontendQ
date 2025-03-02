

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarCheck, FaUserMd, FaCut } from 'react-icons/fa';

// // FindAndBook Component
// const FindAndBook = () => {
//   const [selectedService, setSelectedService] = useState('Salon');

//   const handleServiceChange = (service) => {
//     setSelectedService(service);
//   };

//   return (
//     <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-12 text-center">
        
//         <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
//         Find & Book an <span className="text-purple-600">  Appointment</span>
//           </h2>
//         <p className="text-lg text-gray-600 mb-10">
//           Choose your preferred service and learn more about our offerings.
//         </p>

//         {/* Service Selector */}
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => handleServiceChange('Salon')}
//             className={`px-6 py-3 rounded-full font-bold transition duration-300 ${
//               selectedService === 'Salon'
//                 ? 'bg-purple-600 text-white'
//                 : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             Salon
//           </button>
//           <button
//             onClick={() => handleServiceChange('Doctor')}
//             className={`px-6 py-3 rounded-full font-bold transition duration-300 ${
//               selectedService === 'Doctor'
//                 ? 'bg-purple-600 text-white'
//                 : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             Doctor
//           </button>
//         </div>

//         {/* Service Description */}
//         <div>
//           {selectedService === 'Salon' ? (
//             <div>
//               <h3 className="text-4xl font-bold text-purple-600 mb-4">
//                 Salon Services
//               </h3>
//               <p className="text-lg text-gray-700 mb-6">
//                 Experience top-notch salon services including haircuts, styling,
//                 beauty treatments, and more. Our partnered salons offer
//                 professional services tailored to your needs.
//               </p>
//               <img
//                 src="/image/salon2.webp"
//                 alt="Salon"
//                 className="w-full rounded-3xl shadow-lg object-cover h-96"
//               />
//             </div>
//           ) : (
//             <div>
//               <h3 className="text-4xl font-bold text-purple-600 mb-4">
//                 Doctor Appointments
//               </h3>
//               <p className="text-lg text-gray-700 mb-6">
//                 Connect with trusted healthcare professionals. Book
//                 consultations, check-ups, and medical advice from experienced
//                 doctors at your convenience.
//               </p>
//               <img
//                 src="image/doctor2.webp"
//                 alt="Doctor"
//                 className="w-full rounded-3xl shadow-lg object-cover h-96"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };




// const BookingSteps = () => {
//     return (
//       <div className=" bg-gradient-to-r from-purple-500 to-indigo-600 text-white   max-w-6xl  rounded-2xl shadow-2xl p-12 relative overflow-hidden ">
//         <h2 className="text-4xl font-extrabold text-center mb-8">How It Works</h2>
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
//           <div className="flex flex-col items-center md:w-1/3 px-6">
//             <div className="bg-white text-purple-600 p-4 rounded-full shadow-lg mb-4">
//               <FaUserMd size={40} />
//             </div>
//             <h3 className="text-xl font-semibold">Select Service</h3>
//             <p className="mt-2 text-gray-200">Choose from a variety of salon and doctor services tailored to your needs.</p>
//           </div>
//           <div className="flex flex-col items-center md:w-1/3 px-6">
//             <div className="bg-white text-purple-600 p-4 rounded-full shadow-lg mb-4">
//               <FaCalendarCheck size={40} />
//             </div>
//             <h3 className="text-xl font-semibold">Choose Date & Time</h3>
//             <p className="mt-2 text-gray-200">Pick a convenient date and time for your appointment effortlessly.</p>
//           </div>
//           <div className="flex flex-col items-center md:w-1/3 px-6">
//             <div className="bg-white text-purple-600 p-4 rounded-full shadow-lg mb-4">
//               <FaCut size={40} />
//             </div>
//             <h3 className="text-xl font-semibold">Confirm Booking</h3>
//             <p className="mt-2 text-gray-200">Finalize your appointment and get ready for your session.</p>
//           </div>
//         </div>
//       </div>
//     );
//   };


// // Main SalonOnboarding Component
// const SalonOnboarding = () => {
//   const whyChooseUs = [
//     {
//       icon: '💼',
//       title: 'Professional Services',
//       description: 'Only verified and top-rated professionals to ensure high-quality services.',
//     },
//     {
//       icon: '⚡',
//       title: 'Instant Booking',
//       description: 'Real-time availability and instant booking confirmations for your convenience.',
//     },
//     {
//       icon: '💸',
//       title: 'Transparent Pricing',
//       description: 'No hidden costs. Clear pricing with secure online payments.',
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       {/* Why Choose Us Section */}
//       <section className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12 mb-12">
//         <div className="text-center mb-8">
//           <h2 className="text-5xl font-bold text-gray-800">
//             Why Choose Us
//           </h2>
//           <p className="text-lg text-gray-600 mt-4">
//             Discover what makes QuirkyQ the best choice for your needs
//           </p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-8 px-4">
//           {whyChooseUs.map((item, index) => (
//             <div key={index} className="w-full sm:w-80 md:w-[30%] bg-purple-50 rounded-3xl shadow-md text-center p-8">
//               <div className="text-6xl mb-4">{item.icon}</div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-gray-600 text-lg">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Onboarding Section */}
//       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12 relative overflow-hidden mb-12">
//         <div className="text-center">
//           <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
//             Quick & Easy
//           </h1>
//           <h2 className="text-5xl font-extrabold text-purple-600 mb-6 leading-tight">
//             1000s of Professional Coming Onboard
//           </h2>
//           <p className="text-xl text-gray-600 mb-10">
//             Each day, thousands of salons & doctos from across the globe join us, 
//             enriching our beauty and wellness network.
//           </p>

//           <Link to="/professional">
//             <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>

//       <BookingSteps/>
//       <FindAndBook />
//     </div>
//   );
// };

// export default SalonOnboarding;


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
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-2xl p-10 text-center transform transition-all duration-500 hover:shadow-3xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 animate-fade-in">
          Find & Book an <span className="text-purple-400">Appointment</span>
        </h2>
        <p className="text-base text-gray-300 mb-10 animate-fade-in-delay">
          Explore our premium services tailored for you.
        </p>

        {/* Service Selector */}
        <div className="flex justify-center gap-5 mb-8">
          <button
            onClick={() => handleServiceChange('Salon')}
            className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-md ${
              selectedService === 'Salon'
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-gray-600 text-gray-200 hover:bg-purple-500 hover:scale-105'
            }`}
          >
            Salon
          </button>
          <button
            onClick={() => handleServiceChange('Doctor')}
            className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-md ${
              selectedService === 'Doctor'
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-gray-600 text-gray-200 hover:bg-purple-500 hover:scale-105'
            }`}
          >
            Doctor
          </button>
        </div>

        {/* Service Description */}
        <div className="animate-slide-up">
          {selectedService === 'Salon' ? (
            <div>
              <h3 className="text-3xl font-bold text-purple-400 mb-5">Salon Services</h3>
              <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
                Enjoy expert haircuts, styling, and beauty treatments from top salons.
              </p>
              <img
                src="/image/salon2.webp"
                alt="Salon"
                className="w-full h-80 object-cover rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ) : (
            <div>
              <h3 className="text-3xl font-bold text-purple-400 mb-5">Doctor Appointments</h3>
              <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
                Book trusted healthcare consultations with ease.
              </p>
              <img
                src="/image/doctor2.webp"
                alt="Doctor"
                className="w-full h-80 object-cover rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// BookingSteps Component
const BookingSteps = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white max-w-6xl mx-auto rounded-3xl shadow-2xl p-10 relative overflow-hidden mb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 to-transparent"></div>
      <h2 className="text-4xl font-extrabold text-center mb-10 animate-pulse-slow">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center md:w-1/3 px-6 group">
          <div className="bg-gray-700 text-purple-400 p-4 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <FaUserMd size={36} />
          </div>
          <h3 className="text-xl font-semibold">Select Service</h3>
          <p className="mt-2 text-gray-300 text-base">Pick from our curated salon and doctor services.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 px-6 group">
          <div className="bg-gray-700 text-purple-400 p-4 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <FaCalendarCheck size={36} />
          </div>
          <h3 className="text-xl font-semibold">Choose Date & Time</h3>
          <p className="mt-2 text-gray-300 text-base">Find a slot that fits your schedule.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 px-6 group">
          <div className="bg-gray-700 text-purple-400 p-4 rounded-full shadow-xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <FaCut size={36} />
          </div>
          <h3 className="text-xl font-semibold">Confirm Booking</h3>
          <p className="mt-2 text-gray-300 text-base">Secure your appointment instantly.</p>
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
      description: 'Verified experts delivering top-quality care.',
    },
    {
      icon: '⚡',
      title: 'Instant Booking',
      description: 'Real-time slots for instant reservations.',
    },
    {
      icon: '💸',
      title: 'Transparent Pricing',
      description: 'Clear costs with no hidden fees.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      {/* Why Choose Us Section */}
      <section className="w-full max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-2xl p-10 mb-16 transform transition-all duration-500 hover:shadow-3xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Why Choose <span className="text-purple-400">QuirkyQ</span>
          </h2>
          <p className="text-base text-gray-300 mt-5 max-w-2xl mx-auto">
            The ultimate choice for beauty and healthcare bookings.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-80 bg-gradient-to-br from-gray-700 to-indigo-700 rounded-3xl shadow-lg text-center p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-5 animate-bounce-slow">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-base text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Section */}
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl shadow-2xl p-10 mb-16 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Quick & <span className="text-purple-400">Easy</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          1000s of Professional Coming Onboard
          </h2>
          <p className="text-base mb-8 max-w-3xl mx-auto">
          Each day, thousands of salons & doctos from across the globe join us, enriching our beauty and wellness network
          </p>
          <Link to="/professional">
            <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <BookingSteps />
      <FindAndBook />
    </div>
  );
};

export default SalonOnboarding;

