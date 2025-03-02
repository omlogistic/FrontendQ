

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai';
// import { HiLocationMarker } from 'react-icons/hi';
// import { BsCalendar } from 'react-icons/bs';
// import Footer from '../components/Footer';
// import Navbar from './Navbar';

// const SalonDetails = () => {
//   const { id } = useParams();
//   const [salon, setSalon] = useState(null);
//   const [services, setServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Fetch Salon and Services Data
//   useEffect(() => {
//     // Fetch salon details
//     axios
//       .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
//       .then((response) => {
//         setSalon(response.data);
//       })
//       .catch((error) => console.error('Error fetching salon:', error));

//     // Fetch services
//     const data = JSON.stringify({ id });
//     axios
//       .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
//         headers: { 'Content-Type': 'application/json' },
//       })
//       .then((response) => {
//         setServices(response.data.services || []);
//       })
//       .catch((error) => console.error('Error fetching services:', error))
//       .finally(() => setLoading(false));
//   }, [id]);

//   const handleBooking = () => {
//     if (selectedService && selectedDate && selectedTime) {
//       window.location.href = '/payment';
//     }
//   };

//   if (loading) return <p className="text-center text-lg">Loading...</p>;
//   if (!salon) return <p className="text-center text-lg">Salon not found.</p>;

//   return (
//     <div>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all ${
//           isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//         }`}
//       >
//         <Navbar />
//       </header>

//       <div className="max-w-6xl mx-auto px-4 mt-16 py-6">
//         {/* Salon Hero Section */}
//         <div className="relative h-96 rounded-xl overflow-hidden mb-8">
//           <img
//             src={salon.exterior_image}
//             alt={salon.enterprise_name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
//             <div className="p-8 text-white">
//               <h1 className="text-4xl font-bold mb-2">{salon.enterprise_name}</h1>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <AiFillStar className="h-5 w-5 text-yellow-400" />
//                   <span className="ml-1">4.5 </span>
//                 </div>
//                 <div className="flex items-center">
//                   <HiLocationMarker className="h-5 w-5" />
//                   <span className="ml-1">{salon.full_address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Services List */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
//             <div className="space-y-4">
//               {services.length > 0 ? (
//                 services.map((service) => (
//                   <div
//                     key={service.service_name}
//                     className={`p-4 border rounded-lg cursor-pointer transition-colors ${
//                       selectedService?.service_name === service.service_name
//                         ? 'border-purple-500 bg-purple-50'
//                         : 'border-gray-200 hover:border-purple-500'
//                     }`}
//                     onClick={() => setSelectedService(service)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900">{service.service_name}</h3>
//                         {/* <div className="flex items-center text-gray-600">
//                           <AiOutlineClockCircle className="h-4 w-4 mr-1" />
//                           <span>Duration not specified</span>
//                         </div> */}
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
              
//               {/* Date Selection */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Select Date
//                 </label>
//                 <div className="relative">
//                   <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="date"
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* Time Selection */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Select Time
//                 </label>
//                 <select
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
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
//                       <span className="font-medium">${selectedService.service_price}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <button
//                 className={`w-full py-3 px-4 rounded-md text-white font-medium ${
//                   selectedService && selectedDate && selectedTime
//                     ? 'bg-purple-600 hover:bg-purple-700'
//                     : 'bg-gray-400 cursor-not-allowed'
//                 }`}
//                 onClick={handleBooking}
//                 disabled={!selectedService || !selectedDate || !selectedTime}
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

// export default SalonDetails;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendar } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const SalonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [salon, setSalon] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch Salon and Services Data
  useEffect(() => {
    // Fetch salon details
    axios
      .get(`https://quirky-backend.vercel.app/api/vendors/${id}`)
      .then((response) => {
        setSalon(response.data);
      })
      .catch((error) => console.error('Error fetching salon:', error));

    // Fetch services
    const data = JSON.stringify({ id });
    axios
      .post('https://quirky-backend.vercel.app/api/getVendorServicesByEmail', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        setServices(response.data.services || []);
      })
      .catch((error) => console.error('Error fetching services:', error))
      .finally(() => setLoading(false));
  }, [id]);

  const handleBooking = () => {
    if (selectedService && selectedDate && selectedTime) {
      window.location.href = '/payment';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!salon) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-center text-lg text-gray-700">Salon not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 ">
        {/* Salon Hero Section with Overlapping Back Button */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/salon')}
            className="absolute top-4 left-4 z-10 flex items-center bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 px-4 py-2 rounded-md transition"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          {/* Salon Image */}
          <img
            src={salon.exterior_image}
            alt={salon.enterprise_name}
            className="w-full h-full object-cover"
          />

          {/* Overlay with Salon Details */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{salon.enterprise_name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <AiFillStar className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1">4.5 </span>
                </div>
                <div className="flex items-center">
                  <HiLocationMarker className="h-5 w-5" />
                  <span className="ml-1">{salon.full_address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
            <div className="space-y-4">
              {services.length > 0 ? (
                services.map((service) => (
                  <div
                    key={service.service_name}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedService?.service_name === service.service_name
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-500'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.service_name}</h3>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">₹{service.service_price}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No services available at the moment.</p>
              )}
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Book Appointment</h2>
              
              {/* Date Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <BsCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
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
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Summary</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{selectedService.service_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">Duration not specified</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">₹{selectedService.service_price}</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  selectedService && selectedDate && selectedTime
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                onClick={handleBooking}
                disabled={!selectedService || !selectedDate || !selectedTime}
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

export default SalonDetails;