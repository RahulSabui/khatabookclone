import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export default function List({
  id,
  name,
  money,
  date,
  details,
  deleteCustomer,
}) {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this cutomer?"
    );
    if (confirm) {
      const msg = deleteCustomer(id);
      toast.success(msg);
      window.location.reload();
    }
  };
  return (
    //grid format
    <div className="grid grid-cols-5 justify-items-center my-1 py-4  bg-white rounded shadow-md">
      <div>{name}</div>
      <div>{money}</div>
      <div>{date}</div>
      <div>{details}</div>
      <div>
        <Link
          className="bg-sky-300 hover:bg-sky-400 border border-solid border-slate-100 rounded-full text-sm font-semibold text-gray-700 px-3 py-2"
          to={`/customers/${id}/edit`}
        >
          {/* <FaEdit className="bg-teal-300" /> */}
          Edit
        </Link>
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full focus:outline-none focus:shadow-outline px-2 py-1.5 ml-2 text-sm "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
