import List from "./List";

export default function CustomerListing({ customers }) {
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
          {customers.map((cus) => {
            return <List key={cus.id} {...cus} />;
          })}
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
