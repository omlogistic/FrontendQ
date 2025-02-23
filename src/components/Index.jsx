// // SalonOnboarding.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const SalonOnboarding = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-12 relative overflow-hidden">
//         <div className="text-center">
//           <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
//             Quick & Easy
//           </h1>
//           <h2 className="text-6xl font-extrabold text-purple-600 mb-6 leading-tight">
//             1000s of Salons Coming Onboard
//           </h2>
//           <p className="text-xl text-gray-600 mb-10">
//             Each day, thousands of salons from across the globe join us, 
//             enriching our beauty and wellness network. This growth ensures 
//             more choices and convenience for our cherished customers.
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img 
//                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
//                 alt="Salon Partner 1" 
//                 className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
//               />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img 
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
//                 alt="Salon Partner 2" 
//                 className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
//               />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img 
//                 src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
//                 alt="Salon Partner 3" 
//                 className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
//               />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img 
//                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
//                 alt="Salon Partner 4" 
//                 className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
//               />
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <img 
//                 src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
//                 alt="Salon Partner 5" 
//                 className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
//               />
//             </a>
//           </div>
//              <Link
//                        to="/professional"
                      
//                      >
//                       <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105">
//             Get Started
//           </button>
//                      </Link>
         

//           <div className="mt-8">
//             <a 
//               href="#" 
//               className="text-purple-600 hover:underline font-medium text-lg"
//             >
//               Questions? We can help
//             </a>
//           </div>
//         </div>
//       </div>
   
//     </div>
//   );
// };

// export default SalonOnboarding;


import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12 relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Quick & Easy
          </h1>
          <h2 className="text-6xl font-extrabold text-purple-600 mb-6 leading-tight">
            1000s of Salons Coming Onboard
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Each day, thousands of salons from across the globe join us, 
            enriching our beauty and wellness network. This growth ensures 
            more choices and convenience for our cherished customers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Salon Partner 1" 
                className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Salon Partner 2" 
                className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Salon Partner 3" 
                className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Salon Partner 4" 
                className="rounded-full w-28 h-28 object-cover shadow-lg hover:scale-110 transition-transform"
              />
            </a>
          </div>
          
          <Link to="/professional">
            <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </Link>

          <div className="mt-8">
            <a 
              href="#" 
              className="text-purple-600 hover:underline font-medium text-lg"
            >
              Questions? We can help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonOnboarding;
