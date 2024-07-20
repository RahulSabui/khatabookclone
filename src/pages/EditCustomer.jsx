import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function EditCustomer({ customers }) {
  const { custid } = useParams();
  console.log(customers);
  const cust = customers.filter((c) => c.id == custid);
  const customer = cust[0];
  const [formData, setFormData] = useState({
    name: customer.name,
    moneyAdded: customer.moneyAdded,
    date: customer.date,
    details: customer.details,
  });
  const handleChange = (evt) => {
    setFormData((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value.toString() };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <>
      <Navbar />

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
                  htmlFor="moneyAdded"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Money Added{" "}
                </label>
                <input
                  type="number"
                  name="moneyAdded"
                  id="moneyAdded"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Add money"
                  value={formData.moneyAdded}
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
