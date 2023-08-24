import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const { authenticated } = useAuth();

  console.log("private route:");
  console.log(authenticated);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
