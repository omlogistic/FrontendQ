import { BrowserRouter, Route, Routes , Navigate  } from "react-router-dom";
import React from "react";

import LandingPage from "./components/LandingPage";
import Login from "./auth/Login";
import VendorOnboard from "./components/VendorOnboard";
import Signup from "./components/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/professional" element={<VendorOnboard/>} />
        <Route path="/quirkyQ" element={<LandingPage />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
