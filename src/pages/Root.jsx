import { useState, useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";

export const Root = () => {
  const [token, setToken] = useState(false);

  const login = useCallback((resToken) => {
    localStorage.setItem("userData", JSON.stringify({ token: resToken }));
    setToken(resToken);
  }, []);

  const logout = useCallback(() => {
    setToken(false);
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.token);
    }
  }, [login]);

  return (
    <>
      {token && <Navbar isLoggedIn={!!token} logout={logout} />}

      <Outlet context={{ isLoggedIn: !!token, token, login, logout }} />
      <ToastContainer />
    </>
  );
};
