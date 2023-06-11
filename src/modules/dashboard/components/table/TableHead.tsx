export default function TableHead() {
  return (
    <thead>
      <tr className="text-center text-lg font-bold">
        {tableHeadColumnName.map(({ id, name }) => (
          <td key={id}>{name}</td>
        ))}
        <th className="p-3 ">
          <span className="sr-only">Options</span>
        </th>
      </tr>
    </thead>
  );
}

const tableHeadColumnName = [
  {
    id: 1,
    name: "Flight Date",
  },
  {
    id: 2,
    name: "Flight Status",
  },
  {
    id: 3,
    name: "Airline",
  },
  {
    id: 4,
    name: "Departure",
  },
  {
    id: 5,
    name: "Arrival",
  },
  {
    id: 6,
    name: "Options",
  },
];
