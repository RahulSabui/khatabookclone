import React from "react";
import { useOutletContext, Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const context = useOutletContext();
  if (!context.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet context={context} />;
};
