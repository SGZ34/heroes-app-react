import React from "react";
import { Marvel, Dc, Search, Heroe } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 p-4">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<Dc />} />
          <Route path="heroe/:id" element={<Heroe />} />
          <Route path="search" element={<Search />} />
          <Route path="/*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
