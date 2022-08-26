import { useNavigate } from "react-router-dom";

import { Navbar } from "../components";

export const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/marvel");
  };
  return (
    <>
      <h1>Login page</h1>

      <button className="btn btn-primary mt-4" onClick={onLogin}>
        Iniciar sesión
      </button>
    </>
  );
};
