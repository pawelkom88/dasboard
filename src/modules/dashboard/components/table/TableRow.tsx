import Dropdown from "../../../common/components/dropdown/Dropdown";
import { formatDate, formatTime } from "./helpers/helpers";
import { Airline } from "./types/types";

export default function TableRow({ airline }: { airline: Airline }) {
  const {
    flight_date,
    flight_status,
    airline: { name },
    departure,
    arrival,
  } = airline;

  return (
    <>
      <tr className="text-lg">
        <td className="text-center border-2">
          <p>{formatDate(flight_date)}</p>
        </td>
        <td className="text-center border-2">
          <p>{flight_status}</p>
        </td>
        <td className="text-center border-2">
          <p>{name}</p>
        </td>
        <td className="text-center border-2">
          <p>{formatTime(departure.estimated)}</p>
        </td>
        <td className="text-center border-2">
          <p>{formatTime(arrival.estimated)}</p>
        </td>
        <td className="border-2 text-center">
          <Dropdown />
        </td>
      </tr>
    </>
  );
}


