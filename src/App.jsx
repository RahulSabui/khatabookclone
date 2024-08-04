import { useState, useCallback } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./Router";

function App() {
  return (
    <>
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
