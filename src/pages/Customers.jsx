// import Navbar from "../components/Navbar";
import CustomerListing from "../components/CustomerListing";

export const Customers = ({ deleteCustomer }) => {
  return (
    <>
      {/* <Navbar /> */}
      <CustomerListing deleteCustomer={deleteCustomer} />
    </>
  );
};
