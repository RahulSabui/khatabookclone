import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// import MainLayout from "./layouts/MainLayout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Customers } from "./pages/Customers.jsx";
import { AddCustomer } from "./pages/AddCustomer.jsx";
import AddFund from "./pages/AddFund.jsx";
import Login from "./pages/Login.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const customer = [
  {
    id: 1,
    name: "Rohan",
    money: "30000",
    date: "24/06/2024",
    details: "dudhdjcdcbudcbdbdhvfh",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/addCustomer",
    element: <AddCustomer />,
  },
  {
    path: "/addFunds",
    element: <AddFund />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
