import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/marvel">
          {user}' Heroes App
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/dc"
              >
                Dc comics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>

          <button
            className="d-flex btn btn-outline-dark"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
