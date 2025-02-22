// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     sessionStorage.getItem("isAuthenticated") === "true"
//   );

//   const login = () => {
//     setIsAuthenticated(true);
//     sessionStorage.setItem("isAuthenticated", "true"); // ✅ Store in sessionStorage
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     sessionStorage.removeItem("isAuthenticated"); // ✅ Remove from sessionStorage
//   };

//   useEffect(() => {
//     setIsAuthenticated(sessionStorage.getItem("isAuthenticated") === "true");
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// src/auth/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("user", JSON.stringify(userData)); // ✅ Store user data in sessionStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
  };

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem("isAuthenticated") === "true");
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // ✅ Load user from sessionStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
