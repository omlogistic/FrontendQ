


// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


// import VehicalMaster from "./pages/VehicalMaster";
// import DriverMaster from "./pages/DriverMaster";
// import ExpanceMaster from "./pages/ExpanceMaster";
// import PinMaster from "./pages/PinMaster";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import LoginPage from "./components/Login";
// import SignupPage from "./components/Signup";
// import { AuthProvider } from "./auth/AuthContext";
// import ProtectedRoute from "./auth/ProtectedRoute";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Redirect to /login on first render */}
//           <Route path="/" element={<Navigate to="/login" replace />} />

//           {/* Login and Signup Routes */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/registration" element={<SignupPage />} />

//           {/* Protected Routes */}
//           <Route
//             path="/*"
//             element={
//               <ProtectedRoute>
//                 <Sidebar>
//                   <Routes>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/vehical-master" element={<VehicalMaster />} />
//                     <Route path="/driver-master" element={<DriverMaster />} />
//                     <Route path="/expancemanagement" element={<ExpanceMaster />} />
//                     <Route path="/pinmaster" element={<PinMaster />} />
//                     <Route path="/vehical-masterr" element={<VehicalMaster />} />
//                     <Route path="/drivermaster" element={<DriverMaster />} />
//                   </Routes>
//                 </Sidebar>
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}
 export default App;