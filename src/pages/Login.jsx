import { useState, useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

import { useHttpClient } from "../shared/hooks/http-hook";
import { Spinner } from "../components/Spinner";

export default function Login() {
  const context = useOutletContext();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { isLoading, error, sendRequest } = useHttpClient();
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log(formData);
    try {
      const res = await sendRequest(
        "/api/login",
        "POST",
        JSON.stringify(formData),
        {
          "Content-Type": "application/json",
        }
      );
      // console.log("res is", res);
      context.login(res.token);
      toast.success(res.message);
      return navigate("/customers");
    } catch (err) {
      toast.error(error);
    }
  };

  return (
    <section>
      {isLoading && <Spinner loading={isLoading} />}
      {/* <div className="container mx-auto px-4 justify-center m-4"> */}
      <div className=" container m-auto mt-10 max-w-lg pt-10">
        <div className="bg-cyan-900 px-6 py-8 mb-2 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-gray-100 text-3xl text-center font-semibold mb-6">
              Login
            </h2>
            <div className="mb-4">
              <label
                htmlFor="username"
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

//without custom hook rendering
// const handleSubmit = async (evt) => {
//   evt.preventDefault();
//   // console.log(formData);
//   try {
//     setIsLoading(true);
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();
//     if (!res.ok) {
//       throw new Error(data.message);
//     }
//     console.log(data);
//     context.login();
//     toast.success(data.message);
//     return navigate("/customers");
//   } catch (err) {
//     setError(err.message || "Something Went Wrong, please try again");
//     toast.error(error);
//   } finally {
//     setIsLoading(false);
//   }
// };
