import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PublicRoutes = ({ children }) => {
  const { login } = useContext(AuthContext);
  return login ? <Navigate to="/marvel" /> : children;
};
