import TableRow from "./TableRow";
import TableHead from "./TableHead";

const rowData = [
  { id: 1, name: "name" },
  { id: 2, name: "name" },
  { id: 3, name: "name" },
  { id: 4, name: "name" },
  { id: 5, name: "name" },
];

export default function Table({ airlines }: { airlines: any }) {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Data</h2>
      <p>Filters component: sort itp</p>
      <br />
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          {/* <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup> */}
          <TableHead />
          <br />
          <tbody>
            <TableRow rowData={rowData} />
          </tbody>
          <br />
          <tbody>
            <TableRow rowData={rowData} />
          </tbody>
          <br />
          <tbody>
            <TableRow rowData={rowData} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
