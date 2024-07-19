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
    <section>
      <div className="container-xl lg:container my-5">
        <div className="grid grid-cols-1 gap-4 place-content-center place-items-center">
          {customer.map((cus) => {
            return <List key={cus.id} {...cus} />;
          })}
        </div>
      </div>
    </section>
  );
}
