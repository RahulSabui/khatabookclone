import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";

export const Root = () => {
  const [token, setToken] = useState(false);

  const login = useCallback((resToken) => {
    setToken(resToken);
  }, []);

  const logout = useCallback((resToken) => {
    setToken(resToken);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={{ isLoggedIn: !!token, token, login, logout }} />
      <ToastContainer />
    </>
  );
};
