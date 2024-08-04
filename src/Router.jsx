import { createBrowserRouter } from "react-router-dom";

import { Root } from "./pages/Root.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Customers } from "./pages/Customers.jsx";
import { AddCustomer } from "./pages/AddCustomer.jsx";
import AddFund from "./pages/AddFund.jsx";
import Login from "./pages/Login.jsx";
import EditCustomer, { customerLoader } from "./pages/EditCustomer.jsx";
import { ProtectedRoutes } from "./utils/ProtectedRoutes.jsx";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
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
            path: "/addFund",
            element: <AddFund />,
          },
          {
            path: "/customers/:custid/edit",
            element: <EditCustomer />,
            loader: customerLoader,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
