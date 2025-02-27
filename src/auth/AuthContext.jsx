

// // src/auth/AuthContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     sessionStorage.getItem("isAuthenticated") === "true"
//   );
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     setIsAuthenticated(true);
//     setUser(userData);
//     sessionStorage.setItem("isAuthenticated", "true");
//     sessionStorage.setItem("user", JSON.stringify(userData)); // ✅ Store user data in sessionStorage
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     sessionStorage.removeItem("isAuthenticated");
//     sessionStorage.removeItem("user");
//   };

//   useEffect(() => {
//     setIsAuthenticated(sessionStorage.getItem("isAuthenticated") === "true");
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // ✅ Load user from sessionStorage
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

/// src/auth/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(sessionStorage.getItem("userId")); // ✅ Store user ID

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setUserId(userData.id); // ✅ Save ID
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("userId", userData.id); // ✅ Save ID in sessionStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserId(null);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userId"); // ✅ Clear ID on logout
  };

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem("isAuthenticated") === "true");
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setUserId(sessionStorage.getItem("userId")); // ✅ Load ID from sessionStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
