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
import EditCustomer from "./pages/EditCustomer.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const customers = [
  {
    id: 1,
    name: "Rohan Biswas",
    moneyAdded: "30000",
    date: "24-06-2024",
    details: "dudhdjcdcbudcbdbdhvfh",
  },
  {
    id: 2,
    name: "Sukanya Bhattachharya",
    moneyAdded: "40000",
    date: "24-06-2024",
    details: "dudhdjcdcbudcbdbdhvfh",
  },
];

// const addCustomer = (addCust) => {
//   const randid = Math.floor(Math.random() * 20) + 1;
//   customers = [...customers, { id: randid, addCust }];
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/customers",
    element: <Customers customers={customers} />,
  },
  {
    path: "/addCustomer",
    element: <AddCustomer />,
  },
  {
    path: "/addFund",
    element: <AddFund />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/customers/:custid/edit",
    element: <EditCustomer customers={customers} />,
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
