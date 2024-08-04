import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export default function List({
  id,
  name,
  money,
  date,
  details,
  deleteCustomer,
}) {
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
        {/*         
          <button
            className="bg-red-400 hover:bg-red-500 border border-solid border-slate-100 rounded-full text-sm font-semibold text-gray-700 px-3 py-2"
            to={`/customers/${id}/edit`}
          >
            Delete
            
          </button> */}
        <button
          // onClick={deleteCustomer(id)}
          className="bg-red-400 hover:bg-red-500 text-white font-semibold rounded-full focus:outline-none focus:shadow-outline px-2 py-1.5 ml-2 text-sm "
        >
          Delete
        </button>
      </div>

      {/* <div className="bg-slate-100 rounded">
        <div className="px-6 py-4"></div>
      </div> */}
      {/* <div className="bg-white w-100  rounded overflow-hidden shadow-md "> */}
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}

      {/* <div className="flex justify-around px-4 py-4  ">
          <span>{name}</span>
          <span>{moneyAdded}</span>
          <span>{date}</span>
          <span>{details}</span>
        </div> */}
      {/* <div className="px-20 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{details}</p>
        <div className="text-gray-600 my-2">Date - {date}</div>
      </div>
      <div className="px-20 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rs. {moneyAdded}
        </span>

        <Link to={`/edit/${id}`}>
          <button className="inline-block bg-teal-300 hover:bg-teal-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Edit
          </button>
        </Link>
      </div>
     </div> 
     */}
      {/* // <tr>
    //   <td>{name}</td>
    //   <td>{moneyAdded}</td>
    //   <td>{date}</td>
    //   <td>{details}</td>
    //   <td>edit</td>
    </tr> */}
    </div>
  );
}
