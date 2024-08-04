import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import List from "./List";
import { Spinner } from "./Spinner";
import { useHttpClient } from "../shared/hooks/http-hook";
import { toast } from "react-toastify";

export default function CustomerListing() {
  const context = useOutletContext();
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoading, error, sendRequest } = useHttpClient();
  const navigate = useNavigate();

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

  const deleteCustomer = async (id) => {
    try {
      const res = await sendRequest(`/api/c/customers/${id}`, "DELETE", null, {
        Authorization: "Bearer " + context.token,
      });
      toast.success(res.message);
      // return navigate("/customers");
      return;
    } catch (err) {
      console.log(err);
      toast.error(error);
    }
  };

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
            <Spinner loading={loading} />
          ) : customer.length <= 0 ? (
            <span className="container m-auto">No Customer</span>
          ) : (
            <div>
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
