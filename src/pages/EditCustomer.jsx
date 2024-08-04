import { useState } from "react";
import {
  Link,
  useParams,
  useLoaderData,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { toast } from "react-toastify";

import { useHttpClient } from "../shared/hooks/http-hook";

function EditCustomer() {
  const context = useOutletContext();
  const { custid } = useParams();
  const { isLoading, error, sendRequest } = useHttpClient();
  const { customer } = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: customer.name,
    money: customer.money,
    date: customer.date,
    details: customer.details,
  });
  const handleChange = (evt) => {
    setFormData((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value.toString() };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await sendRequest(
        `/api/c/customers/${custid}`,
        "PUT",
        JSON.stringify(formData),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + context.token,
        }
      );
      toast.success(res.message);
      return navigate("/customers");
    } catch (err) {
      toast.error(error || err.message);
      console.log("error is", error);
      console.log("catch wala error is", err);
    }
  };
  return (
    <>
      {/* <Navbar /> */}

      <section>
        {/* <div className="container mx-auto px-4 justify-center m-4"> */}
        <div className="container m-auto max-w-2xl pt-5">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form action="/addCustomer" method="POST" onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Edit Customer
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="money"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Money Added{" "}
                </label>
                <input
                  type="number"
                  name="money"
                  id="money"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Add money"
                  value={formData.money}
                  onChange={handleChange}
                  min="0"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {" "}
                  Date{" "}
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="details"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {" "}
                  Details{" "}
                </label>
                <textarea
                  type="details"
                  name="details"
                  id="details"
                  className="border rounded w-full py-2 px-3"
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button className="bg-blue-400 hover:bg-cyan-600 text-white font-bold mb-4 py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                  {" "}
                  Sumbit
                </button>
              </div>

              <Link
                to="/customers"
                className="text-white text-center bg-indigo-700 hover:bg-indigo-900 inline-block w-full rounded-full px-2 py-2 "
              >
                Go Back
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const customerLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/c/customers/${params.custid}/edit`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};

export { EditCustomer as default, customerLoader };
