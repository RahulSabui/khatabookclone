import { useState, useEffect } from "react";
import List from "./List";
// import { use } from "../../../backend-1/App/routes/customer.route";

export default function CustomerListing({ deleteCustomer }) {
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomer() {
      const apiUrl = "/api/c/customers";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCustomer(data);
      } catch (err) {
        console.log("Oh NOO Error!!", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomer();
  }, []);
  return (
    <section className="px-2 py-2">
      <div className="container-xl lg:container my-5">
        <div className=" grid grid-cols-5 mb-1 px-2 py-6 font-bold bg-slate-200 gap-y-4 justify-items-center border border-slate-400 rounded shadow-md">
          <div>Customer Name</div>
          <div>Money Added</div>
          <div>Date</div>
          <div>Details</div>
        </div>

        <div>
          {loading ? (
            <span> Loading</span>
          ) : (
            <div>
              {" "}
              {customer.map((cus) => {
                return (
                  <List key={cus.id} {...cus} deleteCustomer={deleteCustomer} />
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* <table className=" w-100 table-auto border-collapse border border-slate-400">
        <thead className="bg-slate-300 p-4">
          <tr>
            <th>Customer Name</th>
            <th>Money Added</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((cus) => {
            return <List key={cus.id} {...cus} />;
          })}
        </tbody>
      </table> */}
    </section>
  );
}
