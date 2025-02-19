// import React, { useState } from "react";
// import Header from "../components/Header";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DriverMaster = () => {
//   const [formData, setFormData] = useState({
//     driverName: "",
//     licenseNumber: "",
//     contactNumber: "",
//     address: "",
//     dateOfBirth: "",
//     aadhaarNumber: "",
//     bloodGroup: "",
//     experience: "",
//     emergencyContact: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     toast.success("Driver details submitted successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//     setFormData({
//       driverName: "",
//       licenseNumber: "",
//       contactNumber: "",
//       address: "",
//       dateOfBirth: "",
//       aadhaarNumber: "",
//       bloodGroup: "",
//       experience: "",
//       emergencyContact: "",
//     });
//   };

//   return (
//     <div>
//       <Header />
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <ToastContainer />
//         <h1 className="text-2xl font-bold text-blue-800 mb-6">Driver Master</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-6"
//         >
//           {/* Driver Name and License Number */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="driverName"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Driver Name
//               </label>
//               <input
//                 type="text"
//                 id="driverName"
//                 name="driverName"
//                 value={formData.driverName}
//                 onChange={handleChange}
//                 placeholder="Enter driver name"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="licenseNumber"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 License Number
//               </label>
//               <input
//                 type="text"
//                 id="licenseNumber"
//                 name="licenseNumber"
//                 value={formData.licenseNumber}
//                 onChange={handleChange}
//                 placeholder="Enter license number"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Contact Number and Aadhaar Number */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="contactNumber"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Contact Number
//               </label>
//               <input
//                 type="text"
//                 id="contactNumber"
//                 name="contactNumber"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 placeholder="Enter contact number"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="aadhaarNumber"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Aadhaar Number
//               </label>
//               <input
//                 type="text"
//                 id="aadhaarNumber"
//                 name="aadhaarNumber"
//                 value={formData.aadhaarNumber}
//                 onChange={handleChange}
//                 placeholder="Enter Aadhaar number"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Date of Birth and Blood Group */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="dateOfBirth"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="bloodGroup"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Blood Group
//               </label>
//               <input
//                 type="text"
//                 id="bloodGroup"
//                 name="bloodGroup"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 placeholder="Enter blood group"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Experience and Emergency Contact */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="experience"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Experience (Years)
//               </label>
//               <input
//                 type="number"
//                 id="experience"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 placeholder="Enter years of experience"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="emergencyContact"
//                 className="block text-gray-700 font-semibold mb-2"
//               >
//                 Emergency Contact
//               </label>
//               <input
//                 type="text"
//                 id="emergencyContact"
//                 name="emergencyContact"
//                 value={formData.emergencyContact}
//                 onChange={handleChange}
//                 placeholder="Enter emergency contact number"
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DriverMaster;



import React, { useState } from "react";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DriverMaster = () => {
  const [formData, setFormData] = useState({
    driverName: "",
    licenseNumber: "",
    contactNumber: "",
    address: "",
    dateOfBirth: "",
    aadhaarNumber: "",
    bloodGroup: "",
    experience: "",
    emergencyContact: "",
  });

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const licenseRegex = /^[A-Z0-9]{6,15}$/;
    const contactRegex = /^[6-9]\d{9}$/;
    const aadhaarRegex = /^\d{12}$/;
    const bloodGroupRegex = /^(A|B|AB|O)[+-]$/;
    const experienceRegex = /^[0-9]{1,2}$/;

    if (!nameRegex.test(formData.driverName)) {
      toast.error("Invalid Driver Name. Must be 3-50 alphabetic characters.");
      return false;
    }
    if (!licenseRegex.test(formData.licenseNumber)) {
      toast.error(
        "Invalid License Number. Must be 6-15 alphanumeric characters."
      );
      return false;
    }
    if (!contactRegex.test(formData.contactNumber)) {
      toast.error("Invalid Contact Number. Must be a valid 10-digit number.");
      return false;
    }
    if (!aadhaarRegex.test(formData.aadhaarNumber)) {
      toast.error("Invalid Aadhaar Number. Must be a 12-digit number.");
      return false;
    }
    if (!bloodGroupRegex.test(formData.bloodGroup)) {
      toast.error("Invalid Blood Group. Must be A+, A-, B+, B-, AB+, AB-, O+ or O-.");
      return false;
    }
    if (!experienceRegex.test(formData.experience)) {
      toast.error("Invalid Experience. Must be a number between 0-99.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = JSON.stringify({
      driverName: formData.driverName,
      licenseNumber: formData.licenseNumber,
      contactNumber: formData.contactNumber,
      adharNumber: formData.aadhaarNumber,
      dateOfBirth: formData.dateOfBirth,
      bloodGroup: formData.bloodGroup,
      experience: formData.experience,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://node-fleet.vercel.app/api/driver_master",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      if (response.data.message) {
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
        <ToastContainer />
        <h1 className="text-2xl font-bold text-blue-800 mb-6">Driver Master</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-6"
        >
          {/* Driver Name and License Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="driverName" className="block text-gray-700 font-semibold mb-2">
                Driver Name
              </label>
              <input
                type="text"
                id="driverName"
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                placeholder="Enter driver name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="licenseNumber" className="block text-gray-700 font-semibold mb-2">
                License Number
              </label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="Enter license number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Contact Number and Aadhaar Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="aadhaarNumber" className="block text-gray-700 font-semibold mb-2">
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                placeholder="Enter Aadhaar number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Date of Birth and Blood Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="bloodGroup" className="block text-gray-700 font-semibold mb-2">
                Blood Group
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                placeholder="Enter blood group"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Experience and Emergency Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">
                Experience (Years)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter years of experience"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact" className="block text-gray-700 font-semibold mb-2">
                Emergency Contact
              </label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Enter emergency contact number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverMaster;



