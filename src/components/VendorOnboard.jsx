
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaLocationArrow, FaBriefcase, FaFileImage, FaEye, FaEyeSlash } from 'react-icons/fa';

// const Onboarding = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility

//   const onSubmit = async (data) => {
//     setLoading(true);
//     const formData = {
//       name: data.name,
//       enterprise_name: data.enterprise_name,
//       email: data.email,
//       contact_number: `+91${data.contact_number}`,
//       state: data.state,
//       city: data.city,
//       pincode: data.pincode,
//       full_address: data.full_address,
//       service_type: data.service_type,
//       years_of_experience: data.years_of_experience,
//       personal_intro: data.personal_intro,
//       password: data.password,
//       exterior_image: data.exterior_image,
//       interior_image: data.interior_image,
//     };

//     try {
//       const response = await axios.post('https://quirky-backend.vercel.app/api/register', formData, {
//         headers: { 'Content-Type': 'application/json' },
//       });
//       toast.success('Registration successful!');
//       console.log(response.data);
//     } catch (error) {
//       toast.error('Registration failed!');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to block numbers and special characters
//   const blockInvalidChars = (e) => {
//     if (!/[A-Za-z\s]/.test(e.key)) {
//       e.preventDefault();
//     }
//   };

//   // Function to block spaces in password
//   const blockSpace = (e) => {
//     if (e.key === ' ') {
//       e.preventDefault();
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-purple-300">
//       <ToastContainer />
//       <Link to="/quirkyQ">
//         <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Professional Onboarding</h2>
//       </Link>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaUser /> <span>Full Name</span>
//             </label>
//             <input
//               {...register('name', {
//                 required: 'Full Name is required',
//                 pattern: {
//                   value: /^[A-Za-z\s]+$/,
//                   message: 'Only letters and spaces are allowed',
//                 },
//                 minLength: { value: 2, message: 'Must be at least 2 characters' },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               onKeyPress={blockInvalidChars} // Block numbers and special characters
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaBuilding /> <span>Enterprise Name</span>
//             </label>
//             <input
//               {...register('enterprise_name', {
//                 required: 'Enterprise Name is required',
//                 pattern: {
//                   value: /^[A-Za-z\s]+$/,
//                   message: 'Only letters and spaces are allowed',
//                 },
//                 minLength: { value: 2, message: 'Must be at least 2 characters' },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               onKeyPress={blockInvalidChars} // Block numbers and special characters
//             />
//             {errors.enterprise_name && <p className="text-red-500 text-sm">{errors.enterprise_name.message}</p>}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaEnvelope /> <span>Email</span>
//             </label>
//             <input
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                   message: 'Enter a valid email (e.g., user@example.com)',
//                 },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaPhone /> <span>Contact Number</span>
//             </label>
//             <div className="flex">
//               <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-r-0 rounded-l">+91</span>
//               <input
//                 {...register('contact_number', {
//                   required: 'Contact Number is required',
//                   pattern: {
//                     value: /^[0-9]{10}$/,
//                     message: 'Must be exactly 10 digits',
//                   },
//                 })}
//                 className="w-full p-2 border rounded-r focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 maxLength={10}
//                 type="tel"
//                 onKeyPress={(e) => {
//                   if (!/[0-9]/.test(e.key)) e.preventDefault();
//                 }}
//               />
//             </div>
//             {errors.contact_number && <p className="text-red-500 text-sm">{errors.contact_number.message}</p>}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaMapMarkerAlt /> <span>State</span>
//             </label>
//             <input
//               {...register('state', {
//                 required: 'State is required',
//                 pattern: {
//                   value: /^[A-Za-z\s]+$/,
//                   message: 'Only letters and spaces are allowed',
//                 },
//                 minLength: { value: 2, message: 'Must be at least 2 characters' },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
//           </div>

//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaCity /> <span>City</span>
//             </label>
//             <input
//               {...register('city', {
//                 required: 'City is required',
//                 pattern: {
//                   value: /^[A-Za-z\s]+$/,
//                   message: 'Only letters and spaces are allowed',
//                 },
//                 minLength: { value: 2, message: 'Must be at least 2 characters' },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaLocationArrow /> <span>Pincode</span>
//             </label>
//             <input
//               {...register('pincode', {
//                 required: 'Pincode is required',
//                 pattern: {
//                   value: /^[0-9]{6}$/,
//                   message: 'Must be exactly 6 digits',
//                 },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               maxLength={6}
//               type="tel"
//               onKeyPress={(e) => {
//                 if (!/[0-9]/.test(e.key)) e.preventDefault();
//               }}
//             />
//             {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
//           </div>

//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaBuilding /> <span>Full Address</span>
//             </label>
//             <input
//               {...register('full_address', {
//                 required: 'Full Address is required',
//                 minLength: { value: 10, message: 'Must be at least 10 characters' },
//                 maxLength: { value: 100, message: 'Must not exceed 100 characters' },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             {errors.full_address && <p className="text-red-500 text-sm">{errors.full_address.message}</p>}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaBriefcase /> <span>Service Type</span>
//             </label>
//             <select
//               {...register('service_type', { required: 'Service Type is required' })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             >
//               <option value="">Select Service Type</option>
//               <option value="Salon">Salon</option>
//               <option value="Doctor">Doctor</option>
//             </select>
//             {errors.service_type && <p className="text-red-500 text-sm">{errors.service_type.message}</p>}
//           </div>

//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaMapMarkerAlt /> <span>Years of Experience</span>
//             </label>
//             <input
//               {...register('years_of_experience', {
//                 required: 'Years of Experience is required',
//                 pattern: {
//                   value: /^[0-9]+$/,
//                   message: 'Must be a whole number',
//                 },
//                 min: { value: 0, message: 'Cannot be negative' },
//                 max: { value: 50, message: 'Must not exceed 50 years' },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               type="number"
//               min="0"
//               max="50"
//               onKeyPress={(e) => {
//                 if (!/[0-9]/.test(e.key)) e.preventDefault();
//               }}
//             />
//             {errors.years_of_experience && <p className="text-red-500 text-sm">{errors.years_of_experience.message}</p>}
//           </div>
//         </div>

//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaBuilding /> <span>Personal Introduction</span>
//           </label>
//           <textarea
//             {...register('personal_intro', {
//               required: 'Personal Introduction is required',
//               minLength: { value: 20, message: 'Must be at least 20 characters' },
//               maxLength: { value: 500, message: 'Must not exceed 500 characters' },
//             })}
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           {errors.personal_intro && <p className="text-red-500 text-sm">{errors.personal_intro.message}</p>}
//         </div>

//         <div>
//           <label className="flex items-center space-x-2 text-gray-700">
//             <FaLocationArrow /> <span>Password</span>
//           </label>
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: { value: 8, message: 'Must be at least 8 characters' },
//                 pattern: {
//                   value: /^[A-Za-z\d@$!%*?&]+$/,
//                   message: 'Spaces are not allowed; use letters, numbers, or special characters (@$!%*?&)',
//                 },
//               })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               onKeyPress={blockSpace} // Block spaces
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-600"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>
//           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaFileImage /> <span>Upload Exterior Image</span>
//             </label>
//             <input
//               {...register('exterior_image', { required: 'Exterior Image URL is required' })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="https://example.com/exterior.jpg"
//             />
//             {errors.exterior_image && <p className="text-red-500 text-sm">{errors.exterior_image.message}</p>}
//           </div>

//           <div>
//             <label className="flex items-center space-x-2 text-gray-700">
//               <FaFileImage /> <span>Upload Interior Image</span>
//             </label>
//             <input
//               {...register('interior_image', { required: 'Interior Image URL is required' })}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="https://example.com/interior.jpg"
//             />
//             {errors.interior_image && <p className="text-red-500 text-sm">{errors.interior_image.message}</p>}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center justify-center"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Onboarding;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaLocationArrow, FaBriefcase, FaFileImage, FaEye, FaEyeSlash } from 'react-icons/fa';

const Onboarding = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Added reset
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for success message
  const navigate = useNavigate(); // For redirection

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = {
      name: data.name,
      enterprise_name: data.enterprise_name,
      email: data.email,
      contact_number: `+91${data.contact_number}`,
      state: data.state,
      city: data.city,
      pincode: data.pincode,
      full_address: data.full_address,
      service_type: data.service_type,
      years_of_experience: data.years_of_experience,
      personal_intro: data.personal_intro,
      password: data.password,
      exterior_image: data.exterior_image,
      interior_image: data.interior_image,
    };

    try {
      const response = await axios.post('https://quirky-backend.vercel.app/api/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Registration successful!');
      setRegistrationSuccess(true); // Show success message
      reset(); // Clear the form
      setTimeout(() => {
        navigate('/quirkyQ'); // Redirect after 15 seconds
      }, 10000); // 15 seconds = 15000 milliseconds
      console.log(response.data);
    } catch (error) {
      toast.error('Registration failed!');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const blockInvalidChars = (e) => {
    if (!/[A-Za-z\s]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const blockSpace = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-purple-300 relative">
      <ToastContainer />
      <Link to="/quirkyQ">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Professional Onboarding</h2>
      </Link>

      {/* Success Message Box */}
      {registrationSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-center transform transition-all scale-100 animate-fade-in">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Registration Successful!</h3>
            <p className="text-gray-700 mb-6">
              Thank you for registering! Please wait for admin approval within 24 hours. You will be redirected in 10 seconds.
            </p>
            <div className="w-12 h-12 mx-auto border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaUser /> <span>Full Name</span>
            </label>
            <input
              {...register('name', {
                required: 'Full Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Only letters and spaces are allowed',
                },
                minLength: { value: 2, message: 'Must be at least 2 characters' },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={blockInvalidChars}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaBuilding /> <span>Enterprise Name</span>
            </label>
            <input
              {...register('enterprise_name', {
                required: 'Enterprise Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Only letters and spaces are allowed',
                },
                minLength: { value: 2, message: 'Must be at least 2 characters' },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={blockInvalidChars}
            />
            {errors.enterprise_name && <p className="text-red-500 text-sm">{errors.enterprise_name.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaEnvelope /> <span>Email</span>
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Enter a valid email (e.g., user@example.com)',
                },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaPhone /> <span>Contact Number</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-r-0 rounded-l">+91</span>
              <input
                {...register('contact_number', {
                  required: 'Contact Number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Must be exactly 10 digits',
                  },
                })}
                className="w-full p-2 border rounded-r focus:outline-none focus:ring-2 focus:ring-purple-500"
                maxLength={10}
                type="tel"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) e.preventDefault();
                }}
              />
            </div>
            {errors.contact_number && <p className="text-red-500 text-sm">{errors.contact_number.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaMapMarkerAlt /> <span>State</span>
            </label>
            <input
              {...register('state', {
                required: 'State is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Only letters and spaces are allowed',
                },
                minLength: { value: 2, message: 'Must be at least 2 characters' },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaCity /> <span>City</span>
            </label>
            <input
              {...register('city', {
                required: 'City is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Only letters and spaces are allowed',
                },
                minLength: { value: 2, message: 'Must be at least 2 characters' },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaLocationArrow /> <span>Pincode</span>
            </label>
            <input
              {...register('pincode', {
                required: 'Pincode is required',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: 'Must be exactly 6 digits',
                },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              maxLength={6}
              type="tel"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) e.preventDefault();
              }}
            />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaBuilding /> <span>Full Address</span>
            </label>
            <input
              {...register('full_address', {
                required: 'Full Address is required',
                minLength: { value: 10, message: 'Must be at least 10 characters' },
                maxLength: { value: 100, message: 'Must not exceed 100 characters' },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.full_address && <p className="text-red-500 text-sm">{errors.full_address.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaBriefcase /> <span>Service Type</span>
            </label>
            <select
              {...register('service_type', { required: 'Service Type is required' })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Service Type</option>
              <option value="Salon">Salon</option>
              <option value="Doctor">Doctor</option>
            </select>
            {errors.service_type && <p className="text-red-500 text-sm">{errors.service_type.message}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaMapMarkerAlt /> <span>Years of Experience</span>
            </label>
            <input
              {...register('years_of_experience', {
                required: 'Years of Experience is required',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Must be a whole number',
                },
                min: { value: 0, message: 'Cannot be negative' },
                max: { value: 50, message: 'Must not exceed 50 years' },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="number"
              min="0"
              max="50"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) e.preventDefault();
              }}
            />
            {errors.years_of_experience && <p className="text-red-500 text-sm">{errors.years_of_experience.message}</p>}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700">
            <FaBuilding /> <span>Personal Introduction</span>
          </label>
          <textarea
            {...register('personal_intro', {
              required: 'Personal Introduction is required',
              minLength: { value: 20, message: 'Must be at least 20 characters' },
              maxLength: { value: 500, message: 'Must not exceed 500 characters' },
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.personal_intro && <p className="text-red-500 text-sm">{errors.personal_intro.message}</p>}
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700">
            <FaLocationArrow /> <span>Password</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Must be at least 8 characters' },
                pattern: {
                  value: /^[A-Za-z\d@$!%*?&]+$/,
                  message: 'Spaces are not allowed; use letters, numbers, or special characters (@$!%*?&)',
                },
              })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={(e) => {
                if (e.key === ' ') e.preventDefault(); // Block spaces
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-purple-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaFileImage /> <span>Upload Exterior Image</span>
            </label>
            <input
              {...register('exterior_image', { required: 'Exterior Image URL is required' })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/exterior.jpg"
            />
            {errors.exterior_image && <p className="text-red-500 text-sm">{errors.exterior_image.message}</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaFileImage /> <span>Upload Interior Image</span>
            </label>
            <input
              {...register('interior_image', { required: 'Interior Image URL is required' })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/interior.jpg"
            />
            {errors.interior_image && <p className="text-red-500 text-sm">{errors.interior_image.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300 flex items-center justify-center"
          disabled={loading || registrationSuccess} // Disable button after success
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Onboarding;

