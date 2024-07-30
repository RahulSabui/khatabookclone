import { useState, useCallback } from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./Router";
// import MainLayout from "./layouts/MainLayout.jsx";
// import { HomePage } from "./pages/HomePage.jsx";
// import { Customers } from "./pages/Customers.jsx";
// import { AddCustomer } from "./pages/AddCustomer.jsx";
// import AddFund from "./pages/AddFund.jsx";
// import Login from "./pages/Login.jsx";
// import EditCustomer from "./pages/EditCustomer.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";
// import { AuthContext } from "./shared/auth-context.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  console.log(isLoggedIn);

  return (
    <>
      <Outlet context={{ isLoggedIn, login, logout }} />
      <RouterProvider router={router} />
    </>
  );
}
export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {/* <Route> */}
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path="/customers" element={<Customers />} />
//         <Route path="/addCustomer" element={<AddCustomer />} />
//         <Route path="/addFund" element={<AddFund />} />
//         <Route path="/login" element={<Login loginUser={loginUser} />} />
//         <Route
//           path="/customers/:custid/edit"
//           element={<EditCustomer customers={customers} />}
//         />
//         <Route path="*" element={<NotFoundPage />} />
//         {/* </Route> */}
//       </Route>
//     </AuthContext.Provider>
//   )
// );
// return <RouterProvider router={router} />;
// return (
//   <Routes>
//     <Route path="/" element={<MainLayout />}>
//       <Route index element={<HomePage />} />
//       <Route path="/customers" element={<Customers />} />
//       <Route path="/addCustomer" element={<AddCustomer />} />
//       <Route path="/addFund" element={<AddFund />} />
//       <Route path="/login" element={<Login loginUser={loginUser} />} />
//       <Route
//         path="/customers/:custid/edit"
//         element={<EditCustomer customers={customers} />}
//       />
//       <Route path="*" element={<NotFoundPage />} />
//     </Route>
//   </Routes>
// );
