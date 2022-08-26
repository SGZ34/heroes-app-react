import { useReducer } from "react";
import { AuthContext } from ".";

import { authReducer } from ".";
const init = () => {
  const user = localStorage.getItem("user");

  return {
    login: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = () => {
    const user = "simon";

    const action = { type: "login", payload: user };
    localStorage.setItem("user", user);
    dispatch(action);
  };

  const logout = () => {
    const action = { type: "logout" };
    localStorage.clear();
    dispatch(action);
  };
  return (
    <AuthContext.Provider value={{ onLogin, ...authState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
