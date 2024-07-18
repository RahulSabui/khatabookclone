import { Link } from "react-router-dom";

export default function List({ id, name, moneyAdded, date, details }) {
  return (
    // <div className="bg-white rounded-xl shadow-md relative ">
    //   <div className="p-4">
    //     <div className="mb-6">
    //       <div className="text-gray-600 my-2">{name}</div>
    //       <h3 className="text-xl font-bold">{moneyAdded}</h3>
    //     </div>
    //   </div>
    // </div>
    //<div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="bg-white max-w-sm  rounded-xl overflow-hidden shadow-md ">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{details}</p>
        <div className="text-gray-600 my-2">Date - {date}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/${id}`}>
          <button className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Edit
          </button>
        </Link>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rs. {moneyAdded}
        </span>
      </div>
    </div>
  );
}
