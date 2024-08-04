import { useNavigate, NavLink } from "react-router-dom";
// import { useContext } from "react";

export default function Navbar({ isLoggedIn, logout }) {
  const navigate = useNavigate();
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  // console.log(isLoggedIn, logout);
  const handleSubmit = () => {
    logout();
    return navigate("/");
  };

  return (
    <nav className="bg-cyan-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              {/* <img className="h-10 w-auto" src={logo} alt="React Jobs" /> */}
              <span className="hidden md:block text-white text-3xl font-bold ml-2">
                Khatabook
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/customers" className={linkClass}>
                  All Customer
                </NavLink>
                <NavLink to="/addCustomer" className={linkClass}>
                  Add Customer
                </NavLink>
                <NavLink to="/addFund" end className={linkClass}>
                  Add Funds
                </NavLink>
                {isLoggedIn ? (
                  <form onSubmit={handleSubmit}>
                    <NavLink className={linkClass}>Logout</NavLink>
                  </form>
                ) : (
                  <NavLink to="/login" className={linkClass}>
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
