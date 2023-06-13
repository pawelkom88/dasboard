import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { Airline } from "./types/types";

export default function Table({ airlines }: { airlines: Airline[] }) {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Data</h2>
      <p>Filters component: sort itp</p>
      <br />
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <TableHead />

          <tbody>
            {airlines.map((airline: Airline) => {
              return <TableRow key={airline.flight.icao} airline={airline} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
