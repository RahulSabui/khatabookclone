import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", passward: "" });
  const handleChange = (evt) => {
    setFormData((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <section>
      {/* <div className="container mx-auto px-4 justify-center m-4"> */}
      <div className=" container m-auto mt-10 max-w-lg pt-10">
        <div className="bg-cyan-900 px-6 py-8 mb-2 shadow-md rounded-md border m-4 md:m-0">
          <form action="/addCustomer" method="POST">
            <h2 className="text-gray-100 text-3xl text-center font-semibold mb-6">
              Login
            </h2>
            <div className="mb-4">
              <label
                htmlFor="usename"
                className="block text-gray-100 font-bold text-lg mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-100 font-bold text-lg mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="bg-blue-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 mb-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                {" "}
                Sign In
              </button>
            </div>
            {/* <div className="container mx-auto px-20"> */}
            <Link to="/">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mb-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                {" "}
                Go Back
              </button>
            </Link>
            {/* </div> */}
          </form>
        </div>
      </div>
    </section>
  );
}
