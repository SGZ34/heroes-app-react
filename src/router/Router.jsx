import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./";
import { AuthRoutes } from "../auth";
import { HeroesRouter } from "../heroes/routes/HeroesRouter";
import { AuthProvider } from "../auth/context";

export const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* public routes */}
        <Route
          path="/auth/*"
          element={
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          }
        />

        {/* private routes */}
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRouter />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
};
