import React from "react";
import { Login } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components";

export const AuthRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 p-4">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
