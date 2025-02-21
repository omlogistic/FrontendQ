import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaLocationArrow, FaBriefcase, FaFileImage } from 'react-icons/fa';

const Onboarding = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const exteriorImageRef = useRef(null);
  const interiorImageRef = useRef(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('enterprise_name', data.enterprise_name);
    formData.append('email', data.email);
    formData.append('contact_number', data.contact_number);
    formData.append('state', data.state);
    formData.append('city', data.city);
    formData.append('pincode', data.pincode);
    formData.append('full_address', data.full_address);
    formData.append('service_type', data.service_type);
    formData.append('years_of_experience', data.years_of_experience);
    formData.append('personal_intro', data.personal_intro);
    formData.append('password', data.password);
    formData.append('exterior_image', exteriorImageRef.current.files[0]);
    formData.append('interior_image', interiorImageRef.current.files[0]);

    try {
      const response = await axios.post('http://localhost:3000/api/vendors/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Registration successful!');
      console.log(response.data);
    } catch (error) {
      toast.error('Registration failed!');
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-purple-300">
      <ToastContainer />
     
      <Link to="/quirkyQ">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Vendor Onboarding</h2>
        </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaUser /> <span>Full Name</span>
            </label>
            <input
              {...register('name', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.name && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaBuilding /> <span>Enterprise Name</span>
            </label>
            <input
              {...register('enterprise_name', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.enterprise_name && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaEnvelope /> <span>Email</span>
            </label>
            <input
              {...register('email', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaPhone /> <span>Contact Number</span>
            </label>
            <input
              {...register('contact_number', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.contact_number && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaMapMarkerAlt /> <span>State</span>
            </label>
            <input
              {...register('state', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.state && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaCity /> <span>City</span>
            </label>
            <input
              {...register('city', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.city && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaLocationArrow /> <span>Pincode</span>
            </label>
            <input
              {...register('pincode', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.pincode && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaBuilding /> <span>Full Address</span>
            </label>
            <input
              {...register('full_address', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.full_address && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaBriefcase /> <span>Service Type</span>
            </label>
            <select
              {...register('service_type', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Salon">Salon</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaMapMarkerAlt /> <span>Years of Experience</span>
            </label>
            <input
              {...register('years_of_experience', { required: true })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.years_of_experience && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700">
            <FaBuilding /> <span>Personal Introduction</span>
          </label>
          <textarea
            {...register('personal_intro', { required: true })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.personal_intro && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700">
            <FaLocationArrow /> <span>Password</span>
          </label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.password && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaFileImage /> <span>Upload Exterior Image</span>
            </label>
            <input
              type="file"
              ref={exteriorImageRef}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaFileImage /> <span>Upload Interior Image</span>
            </label>
            <input
              type="file"
              ref={interiorImageRef}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Onboarding;