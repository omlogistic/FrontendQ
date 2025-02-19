

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LoginPage = () => {
//   const navigate = useNavigate(); // Hook to programmatically navigate
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://fleet-node.vercel.app/api/signin",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       // Handle success
//       const { name, companyName } = response.data;
//       toast.success(`Welcome back, ${name} from ${companyName}!`, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });

//       setTimeout(() => {
//         navigate("/dashboard"); // Redirect to dashboard
//       }, 3000);
//     } catch (err) {
//       // Handle error
//       const errorMessage =
//         err.response?.data?.error || "Something went wrong. Please try again.";
//       toast.error(errorMessage, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });
//     }
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     navigate("/registration"); // Redirect to sign-up page
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
//       style={{ backgroundImage: "url('/loginbg.avif')" }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <ToastContainer /> {/* Toast notification container */}

//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">
//           Sign In
//         </h1>
//         <h2 className="text-lg text-center text-gray-600 mb-8">
//           Welcome to <span className="font-semibold text-blue-800">MyFleet</span>
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSignIn}>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* Additional Links */}
//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <button
//               onClick={handleSignUp}
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               Sign Up
//             </button>
//           </p>
//           <p className="text-sm text-gray-600 mt-2">
//             Forgot your password?{" "}
//             <a
//               href="#reset"
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               Reset Password
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../auth/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://node-fleet.vercel.app/api/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Handle success
      const { name, companyName } = response.data;
      toast.success(`Welcome back, ${name} from ${companyName}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      login(); // Set authentication state to true
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to dashboard
      }, 3000);
    } catch (err) {
      // Handle error
      const errorMessage =
        err.response?.data?.error || "Something went wrong. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/registration");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/loginbg.avif')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <ToastContainer />

        {/* Heading */}
        <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">
          Sign In
        </h1>
        <h2 className="text-lg text-center text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-blue-800">MyFleet</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={handleSignUp}
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot your password?{" "}
            <a
              href="#reset"
              className="text-blue-500 font-semibold hover:underline"
            >
              Reset Password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
