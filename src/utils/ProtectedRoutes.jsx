import React from "react";
import { useOutletContext, Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const context = useOutletContext();
  console.log("login inside protected route", context.isLoggedIn);
  if (!context.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet context={context} />;
};
