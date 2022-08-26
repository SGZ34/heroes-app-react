import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context";

export const Login = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  const handleLogin = () => {
    onLogin();
    navigate("/");
  };
  return (
    <>
      <h1>Login page</h1>

      <button className="btn btn-primary mt-4" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </>
  );
};
