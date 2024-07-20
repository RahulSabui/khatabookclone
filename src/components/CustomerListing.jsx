import React from 'react';
import List from "./List";

const customer = [
  {
    id: 1,
    name: "Rohan",
    moneyAdded: "30000",
    date: "24/06/2024",
    details: "dudhdjcdcbudcbdbdhvfh",
  },
  {
    id: 2,
    name: "Hodla",
    moneyAdded: "40000",
    date: "24/06/2024",
    details: "dudhdjcdcbudcbdbdhvfh",
  },
];

export default function CustomerListing() {
  return (
    <section className="flex items-center justify-center ">
      <div className="container-xl lg:container">
        {/* <div className="grid grid-cols-1 gap-4 place-content-center place-items-center">
          {customer.map((cus) => {
            return <List key={cus.id} {...cus} />;
          })}
        </div> */}
        <div className="flex justify-center mt-10">
          <table className="table-fixed w-full max-w-2xl border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Song</th>
                <th className="border border-gray-300 px-4 py-2">Artist</th>
                <th className="border border-gray-300 px-4 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="border border-gray-300 px-4 py-2">Malcolm Lockyer</td>
                <td className="border border-gray-300 px-4 py-2">1961</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Witchy Woman</td>
                <td className="border border-gray-300 px-4 py-2">The Eagles</td>
                <td className="border border-gray-300 px-4 py-2">1972</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Shining Star</td>
                <td className="border border-gray-300 px-4 py-2">Earth, Wind, and Fire</td>
                <td className="border border-gray-300 px-4 py-2">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
