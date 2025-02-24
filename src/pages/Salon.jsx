
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaArrowLeft } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const Salon = () => {
//   const [location, setLocation] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [salons, setSalons] = useState([]);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get('https://quirky-backend.vercel.app/api/vendors', {
//         headers: { 'Content-Type': 'application/json' }
//       })
//       .then((response) => {
//         const filteredSalons = response.data
//           .filter((vendor) => vendor.service_type === 'Salon')
//           .map((salon) => ({
//             id: salon.id,
//             name: salon.enterprise_name,
//             image: salon.exterior_image,
//             rating: 4.5, 
//             contact: salon.contact_number,
//             address: salon.full_address,
//             description: salon.personal_intro
//           }));
//         setSalons(filteredSalons);
//       })
//       .catch((error) => console.error('Error fetching salons:', error))
//       .finally(() => setLoading(false));
//   }, []);

//   const filteredSalons = salons.filter((salon) =>
//     salon.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all ${
//           isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//         }`}
//       >
//         <Navbar />
//       </header>
//       <div className="max-w-6xl mx-auto px-4 py-6 mt-16">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Find the Perfect Salon</h1>
//           <button
//             onClick={() => navigate('/dashboard')}
//             className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>
//         </div>

//         <div className="flex gap-4 mb-6">
//           <input
//             type="text"
//             placeholder="Enter your location"
//             className="flex-1 p-2 border border-gray-300 rounded-md"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Search salons..."
//             className="flex-1 p-2 border border-gray-300 rounded-md"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {loading ? (
//           <p className="text-center text-lg">Loading salons...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredSalons.length > 0 ? (
//               filteredSalons.map((salon) => (
//                 <div
//                   key={salon.id}
//                   className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                   onClick={() => navigate(`/salon/${salon.id}`)}
//                 >
//                   <img
//                     src={salon.image}
//                     alt={salon.name}
//                     className="w-full h-40 object-cover rounded-2xl"
//                   />
//                   <h3 className="text-lg font-semibold mt-3">{salon.name}</h3>
//                   <p className="text-sm text-gray-600">Rating: {salon.rating} ★</p>
//                   <p className="text-sm text-gray-600">📞 {salon.contact}</p>
//                   <p className="text-sm text-gray-600">📍 {salon.address}</p>
//                   <p className="text-sm text-gray-800 mt-2">{salon.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-lg">No salons found.</p>
//             )}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Salon;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const Salon = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [salons, setSalons] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://quirky-backend.vercel.app/api/admin/vendors', {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        const filteredSalons = response.data
          .filter((vendor) => vendor.service_type === 'Salon' && vendor.status === 'approved') // Only approved vendors
          .map((salon) => ({
            id: salon.id,
            name: salon.enterprise_name,
            image: salon.exterior_image,
            rating: 4.5, 
            contact: salon.contact_number,
            address: salon.full_address,
            description: salon.personal_intro
          }));
        setSalons(filteredSalons);
      })
      .catch((error) => console.error('Error fetching salons:', error))
      .finally(() => setLoading(false));
  }, []);

  const filteredSalons = salons.filter((salon) =>
    salon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </header>
      <div className="max-w-6xl mx-auto px-4 py-6 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Find the Perfect Salon</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md"
          >
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
            placeholder="Search salons..."
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading ? (
          <p className="text-center text-lg">Loading salons...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredSalons.length > 0 ? (
              filteredSalons.map((salon) => (
                <div
                  key={salon.id}
                  className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/salon/${salon.id}`)}
                >
                  <img
                    src={salon.image}
                    alt={salon.name}
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                  <h3 className="text-lg font-semibold mt-3">{salon.name}</h3>
                  <p className="text-sm text-gray-600">Rating: {salon.rating} ★</p>
                  <p className="text-sm text-gray-600">📞 {salon.contact}</p>
                  <p className="text-sm text-gray-600">📍 {salon.address}</p>
                  <p className="text-sm text-gray-800 mt-2">{salon.description}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-lg">No approved salons found.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Salon;
