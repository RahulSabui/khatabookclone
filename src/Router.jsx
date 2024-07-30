import { createBrowserRouter } from "react-router-dom";

import { Root } from "./pages/Root.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Customers } from "./pages/Customers.jsx";
import { AddCustomer } from "./pages/AddCustomer.jsx";
import AddFund from "./pages/AddFund.jsx";
import Login from "./pages/Login.jsx";
import EditCustomer, { customerLoader } from "./pages/EditCustomer.jsx";

// const customers = [
//   {
//     id: 1,
//     name: "Rohan Biswas",
//     moneyAdded: "30000",
//     date: "24-06-2024",
//     details: "dudhdjcdcbudcbdbdhvfh",
//   },
//   {
//     id: 2,
//     name: "Sukanya Bhattachharya",
//     moneyAdded: "40000",
//     date: "24-06-2024",
//     details: "dudhdjcdcbudcbdbdhvfh",
//   },
// ];

const loginUser = async (user) => {
  const res = await fetch("api/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

const addCustomer = (addCust) => {
  fetch("/api/c/customers", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringyfy(addCust),
  });
  // customers = [...customers, { id: randid, addCust }];
  return;
};

const editCustomer = (editCust) => {
  fetch("/api/c/customers", {
    method: "PUT",
    header: { "Content-Type": "application/json" },
    body: JSON.stringyfy(editCust),
  });
  // customers = [...customers, { id: randid, addCust }];
  return;
};

const deleteCustomer = (id) => {
  fetch(`/api/c/customers/${id}`, {
    method: "DELETE",
  });
  // customers = [...customers, { id: randid, addCust }];
  return;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/customers",
        element: <Customers deleteCustomer={deleteCustomer} />,
      },
      {
        path: "/addCustomer",
        element: <AddCustomer addCustomer={addCustomer} />,
      },
      {
        path: "/addFund",
        element: <AddFund />,
      },

      {
        path: "/customers/:custid/edit",
        element: <EditCustomer editCustomer={editCustomer} />,
        loader: { customerLoader },
      },
    ],
  },
  {
    path: "/login",
    element: <Login loginUser={loginUser} />,
  },
]);
export default router;
