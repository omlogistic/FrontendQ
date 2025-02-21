import { BrowserRouter, Route, Routes , Navigate  } from "react-router-dom";
import React from "react";
import { ToastContainer } from 'react-toastify';

import LandingPage from "./components/LandingPage";
import Login from "./auth/Login";
import VendorOnboard from "./components/VendorOnboard";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
     <ToastContainer autoClose={1800} />
      <Routes>
        <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/professional" element={<VendorOnboard/>} />
        <Route path="/quirkyQ" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;






