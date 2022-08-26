import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PrivateRoutes = ({ children }) => {
  const { login } = useContext(AuthContext);
  return login ? children : <Navigate to="/auth/login" />;
};
