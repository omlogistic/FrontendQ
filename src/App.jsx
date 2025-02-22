// import { BrowserRouter, Route, Routes , Navigate  } from "react-router-dom";
// import React from "react";
// import { ToastContainer } from 'react-toastify';

// import LandingPage from "./components/LandingPage";
// import Login from "./auth/Login";
// import VendorOnboard from "./components/VendorOnboard";
// import Signup from "./components/Signup";
// import Dashboard from "./pages/Dashboard";
// import Salon from "./pages/Salon";
// import Doctor from "./pages/Doctor";

// const App = () => {
//   return (
//     <BrowserRouter>
//      <ToastContainer autoClose={1800} />
//       <Routes>
//         <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<Signup/>} />
//         <Route path="/professional" element={<VendorOnboard/>} />
//         <Route path="/quirkyQ" element={<LandingPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/salon" element={<Salon />} />
//         <Route path="/doctor" element={<Doctor />} />
       
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;






// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import React from "react";
// import { ToastContainer } from 'react-toastify';

// import LandingPage from "./components/LandingPage";
// import Login from "./auth/Login";
// import VendorOnboard from "./components/VendorOnboard";
// import Signup from "./components/Signup";
// import Dashboard from "./pages/Dashboard";
// import Salon from "./pages/Salon";
// import Doctor from "./pages/Doctor";
// import ProtectedRoute from "./auth/ProtectedRoute";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <ToastContainer autoClose={1800} />
//       <Routes>
//         <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/professional" element={<VendorOnboard />} />
//         <Route path="/quirkyQ" element={<LandingPage />} />
        
//         {/* Protected Routes */}
//         <Route 
//           path="/dashboard" 
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           } 
//         />
//         <Route 
//           path="/salon" 
//           element={
//             <ProtectedRoute>
//               <Salon />
//             </ProtectedRoute>
//           } 
//         />
//         <Route 
//           path="/doctor" 
//           element={
//             <ProtectedRoute>
//               <Doctor />
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./auth/ProtectedRoute";

import LandingPage from "./components/LandingPage";
import Login from "./auth/Login";
import VendorOnboard from "./components/VendorOnboard";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import Salon from "./pages/Salon";
import Doctor from "./pages/Doctor";
import { AuthProvider } from "./auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={1800} />
        <Routes>
          <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/professional" element={<VendorOnboard />} />
          <Route path="/quirkyQ" element={<LandingPage />} />
          
          {/* ✅ Apply Protected Route to these pages */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/salon" element={<ProtectedRoute><Salon /></ProtectedRoute>} />
          <Route path="/doctor" element={<ProtectedRoute><Doctor /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
