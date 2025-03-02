


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaStar, FaPhoneAlt, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const DoctorDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState(null);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedTime, setSelectedTime] = useState('');

//   // Fetch Doctor and Services Data
//   useEffect(() => {
//     // Fetch doctor details
//     axios
//       .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
//       .then((response) => {
//         const doctorData = response.data;
//         setDoctor(doctorData);

//         // Fetch services using email from doctor data
//         if (doctorData.email) {
//           const data = JSON.stringify({ email: doctorData.email });
//           axios
//             .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
//               headers: { 'Content-Type': 'application/json' },
//             })
//             .then((response) => {
//               setServices(response.data.services || []);
//             })
//             .catch((error) => console.error('Error fetching services:', error))
//             .finally(() => setLoading(false));
//         } else {
//           console.error('Email not found in doctor data');
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching doctor:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleBooking = () => {
//     if (selectedService && selectedTime) {
//       navigate('/payment'); // Changed to use navigate for better React Router integration
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!doctor) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <p className="text-center text-lg text-gray-700">Doctor not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4">
//         {/* Hero Section with Back Button */}
//         <div className="relative h-96 rounded-xl overflow-hidden mb-8">
//           {/* Back Button */}
//           <button
//             onClick={() => navigate('/doctor')}
//             className="absolute top-4 left-4 z-10 flex items-center bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 px-4 py-2 rounded-md transition"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>

//           {/* Doctor Image */}
//           <img
//             src={doctor.exterior_image}
//             alt={doctor.enterprise_name}
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay with Doctor Details */}
//           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
//             <div className="p-8 text-white">
//               <h1 className="text-4xl font-bold mb-2">{doctor.enterprise_name}</h1>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center text-yellow-500">
//                   <FaStar className="mr-1" />
//                   <span>4.7</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaMapMarkerAlt className="mr-1" />
//                   <span>{doctor.full_address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* About & Contact Section */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-2xl font-bold mb-4">About</h2>
//           <p className="text-gray-800">{doctor.personal_intro}</p>
//           <h3 className="text-xl font-bold mt-6">Contact</h3>
//           <p className="text-gray-600 flex items-center">
//             <FaPhoneAlt className="mr-2" /> {doctor.contact_number}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Services Section */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
//             <div className="space-y-4">
//               {services.length > 0 ? (
//                 services.map((service) => (
//                   <div
//                     key={service.service_name}
//                     className={`p-4 border rounded-lg cursor-pointer transition-colors ${
//                       selectedService?.service_name === service.service_name
//                         ? 'border-blue-500 bg-blue-50'
//                         : 'border-gray-200 hover:border-blue-500'
//                     }`}
//                     onClick={() => setSelectedService(service)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900">{service.service_name}</h3>
//                       </div>
//                       <div className="text-lg font-semibold text-gray-900">₹{service.service_price}</div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-600">No services available at the moment.</p>
//               )}
//             </div>
//           </div>

//           {/* Booking Section */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">Book Appointment</h2>

//               {/* Time Slot Selection */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Select Time Slot
//                 </label>
//                 <select
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                 >
//                   <option value="">Choose a time</option>
//                   <option value="09:00">9:00 AM</option>
//                   <option value="10:00">10:00 AM</option>
//                   <option value="11:00">11:00 AM</option>
//                   <option value="12:00">12:00 PM</option>
//                   <option value="13:00">1:00 PM</option>
//                   <option value="14:00">2:00 PM</option>
//                   <option value="15:00">3:00 PM</option>
//                   <option value="16:00">4:00 PM</option>
//                   <option value="17:00">5:00 PM</option>
//                 </select>
//               </div>

//               {/* Booking Summary */}
//               {selectedService && (
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Summary</h3>
//                   <div className="space-y-2 text-sm text-gray-600">
//                     <div className="flex justify-between">
//                       <span>Service:</span>
//                       <span className="font-medium">{selectedService.service_name}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Duration:</span>
//                       <span className="font-medium">Duration not specified</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Price:</span>
//                       <span className="font-medium">₹{selectedService.service_price}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <button
//                 className={`w-full py-3 px-4 rounded-md text-white font-medium ${
//                   selectedService && selectedTime
//                     ? 'bg-blue-600 hover:bg-blue-700'
//                     : 'bg-gray-400 cursor-not-allowed'
//                 }`}
//                 onClick={handleBooking}
//                 disabled={!selectedService || !selectedTime}
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default DoctorDetails;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaPhoneAlt, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    axios
      .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
      .then((response) => {
        const doctorData = response.data;
        setDoctor(doctorData);

        if (doctorData.email) {
          const data = JSON.stringify({ email: doctorData.email });
          axios
            .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
              headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
              setServices(response.data.services || []);
            })
            .catch((error) => console.error('Error fetching services:', error))
            .finally(() => setLoading(false));
        } else {
          console.error('Email not found in doctor data');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching doctor:', error);
        setLoading(false);
      });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const handleBooking = () => {
    if (selectedService && selectedTime) {
      navigate('/payment');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <p className="text-center text-lg text-gray-300">Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section with Back Button on Right */}
        <div className="relative h-80 rounded-3xl overflow-hidden mb-10">
          <button
            onClick={() => navigate('/doctor')}
            className="absolute top-4 right-4 z-10 flex items-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <img
            src={doctor.exterior_image}
            alt={doctor.enterprise_name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 flex items-end">
            <div className="p-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 animate-slide-up">
                {doctor.enterprise_name}
              </h1>
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="flex items-center text-yellow-400">
                  <FaStar className="mr-1" />
                  <span>4.7</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  <span className="line-clamp-1">{doctor.full_address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About & Contact Section */}
        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">About</h2>
          <p className="text-gray-300">{doctor.personal_intro}</p>
          <h3 className="text-xl font-bold text-white mt-6">Contact</h3>
          <p className="text-gray-300 flex items-center">
            <FaPhoneAlt className="mr-2" /> {doctor.contact_number}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Services Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in">Services</h2>
            <div className="space-y-5">
              {services.length > 0 ? (
                services.map((service) => (
                  <div
                    key={service.service_name}
                    className={`p-5 rounded-3xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedService?.service_name === service.service_name
                        ? 'bg-gradient-to-br from-purple-600 to-purple-700 scale-105'
                        : 'bg-gradient-to-br from-gray-700 to-indigo-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">{service.service_name}</h3>
                      <div className="text-lg font-semibold text-gray-200">₹{service.service_price}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-300">No services available at the moment.</p>
              )}
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
              <h2 className="text-xl font-bold text-white mb-5 animate-fade-in">Book Appointment</h2>

              {/* Time Slot Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Time Slot</label>
                <select
                  className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Choose a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>

              {/* Booking Summary */}
              {selectedService && (
                <div className="mb-6 p-4 bg-gray-700 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{selectedService.service_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">Not specified</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">₹{selectedService.service_price}</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 shadow-md ${
                  selectedService && selectedTime
                    ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg'
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
                onClick={handleBooking}
                disabled={!selectedService || !selectedTime}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorDetails;