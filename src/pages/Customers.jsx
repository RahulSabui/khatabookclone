import Navbar from "../components/Navbar";
import CustomerListing from "../components/CustomerListing";

export const Customers = ({ customers }) => {
  return (
    <>
      <Navbar />
      <CustomerListing customers={customers} />
    </>
  );
};
