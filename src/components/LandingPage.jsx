


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaCut, FaStethoscope, FaStar } from 'react-icons/fa';

// const  LandingPage = () => {
//   const categories = [
//     {
//       icon: <FaCut className="h-12 w-12 text-purple-600" />,
//       title: "Salon",
//       description: "Book your next haircut, styling, or beauty treatment",
//       link: "/salon",
//     },
//     {
//       icon: <FaStethoscope className="h-12 w-12 text-purple-600" />,
//       title: "Doctor",
//       description: "Connect with healthcare professionals",
//       link: "/doctor",
//     },
   
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to QuirkyQ</h1>
//         <p className="text-xl text-gray-600">Your one-stop solution for Salon, Doctor, and Parlor bookings</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//         {categories.map((category, index) => (
//           <Link to={category.link} key={index} className="block">
//             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
//               <div className="mb-4">{category.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
//               <p className="text-gray-600">{category.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="bg-purple-50 rounded-xl p-8 text-center">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Are you a professional?</h2>
//         <p className="text-gray-600 mb-6">Join our platform and grow your business</p>
//         <Link to="/professional" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700">
//           Join as Professional
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default  LandingPage;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaCut, FaStethoscope } from 'react-icons/fa';

const LandingPage = () => {
  const categories = [
    {
      icon: <FaCut className="h-14 w-14 text-purple-600 mx-auto" />, // Center the icon
      title: "Salon",
      description: "Book your next haircut, styling, or beauty treatment. Enjoy professional services at top-rated salons near you with easy online booking.",
      link: "/salon",
    },
    {
      icon: <FaStethoscope className="h-14 w-14 text-purple-600 mx-auto" />, // Center the icon
      title: "Doctor",
      description: "Connect with healthcare professionals. Schedule consultations, check-ups, and medical advice from experienced doctors with just a few clicks.",
      link: "/doctor",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to <span className="text-purple-600">QuirkyQ</span></h1>
        <p className="text-xl text-gray-700">Your one-stop solution for Salon and Doctor bookings</p>
      </div>

      <div className="flex flex-wrap justify-center gap-16 mb-16 px-4">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="w-80 sm:w-96 transform hover:scale-105 transition duration-300">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-center flex flex-col items-center h-auto justify-center border border-purple-300">
              <div className="mb-5 text-purple-700 animate-pulse">{category.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-700 text-lg text-center">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-purple-600 rounded-xl p-10 text-center text-white shadow-xl mx-4">
        <h2 className="text-3xl font-bold mb-5">Are you a professional?</h2>
        <p className="text-lg mb-6">Join our platform and grow your business with ease</p>
        <Link to="/professional" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-md font-medium hover:bg-gray-200 transition duration-300">
          Join as Professional
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;