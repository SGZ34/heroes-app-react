import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./auth";

import { HeroesRouter } from "./heroes/routes/HeroesRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<HeroesRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
