import { BrowserRouter, Route, Routes , Navigate  } from "react-router-dom";
import React from "react";

import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/quirkyQ" replace />} />
        <Route path="/quirkyQ" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
