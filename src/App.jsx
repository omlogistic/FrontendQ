


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
import SalonDetails from "./pages/SalonDetails";
import DocterDetails from "./pages/DocterDetails";
import ContactUs from "./components/ContactUs";
import Apporaval from "./components/Apporaval";
import AdminLogin from "./auth/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <ToastContainer autoClose={1800} />
//         <Routes>
//           <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/professional" element={<VendorOnboard />} />
//           <Route path="/quirkyQ" element={<LandingPage />} />
//           <Route path="/contact-us" element={<ContactUs />} />
          
//           {/* ✅ Apply Protected Route to these pages */}
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/salon" element={<ProtectedRoute><Salon /></ProtectedRoute>} />
//           <Route path="/salon/:id" element={<ProtectedRoute><SalonDetails /></ProtectedRoute>} />
//           <Route path="/doctor" element={<ProtectedRoute><Doctor /></ProtectedRoute>} />
//           <Route path="/doctors/:id" element={<ProtectedRoute><DocterDetails /></ProtectedRoute>} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={1800} />
          <Routes>
            <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/professional" element={<VendorOnboard />} />
            <Route path="/quirkyQ" element={<LandingPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/Approval" element={<Apporaval />} />

            {/* ✅ Apply Protected Route to these pages */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/salon" element={<ProtectedRoute><Salon /></ProtectedRoute>} />
            <Route path="/salon/:id" element={<ProtectedRoute><SalonDetails /></ProtectedRoute>} />
            <Route path="/doctor" element={<ProtectedRoute><Doctor /></ProtectedRoute>} />
            <Route path="/doctors/:id" element={<ProtectedRoute><DocterDetails /></ProtectedRoute>} />
            <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;



