import { useState, useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";

let logoutTimer;

export const Root = () => {
  const [token, setToken] = useState(false);
  const [tokenExpire, setTokenExpire] = useState();

  const login = useCallback((resToken, expirationDate) => {
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpire(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: resToken,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    setToken(resToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpire(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpire) {
      const remainingTime =
        new Date(tokenExpire).getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpire]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.token, new Date(storedData.expiration));
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
