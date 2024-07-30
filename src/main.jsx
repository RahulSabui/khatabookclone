import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const addCustomer = (addCust) => {
//   const randid = Math.floor(Math.random() * 20) + 1;
//   customers = [...customers, { id: randid, addCust }];
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/customers",
//     element: <Customers customers={customers} />,
//   },
//   {
//     path: "/addCustomer",
//     element: <AddCustomer />,
//   },
//   {
//     path: "/addFund",
//     element: <AddFund />,
//   },
//   {
//     path: "/login",
//     element: <Login loginUser={loginUser} />,
//   },
//   {
//     path: "/customers/:custid/edit",
//     element: <EditCustomer customers={customers} />,
//   },
//   {
//     path: "*",
//     element: <NotFoundPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
