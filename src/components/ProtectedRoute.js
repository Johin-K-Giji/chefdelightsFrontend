<<<<<<< HEAD
// components/ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
=======
// components/ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
>>>>>>> dd1c7660312511267f84c83e0cf8e0dde30732b8
