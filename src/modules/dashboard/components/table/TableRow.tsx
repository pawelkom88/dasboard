import Dropdown from "../../../common/components/dropdown/Dropdown";

interface RowData {
  id: number;
  name: string;
}

export default function TableRow({ rowData }: { rowData: RowData[] }) {
  return (
    <tr className="text-lg">
      {rowData.map(({ id, name }) => {
        return (
          <td key={id} className="text-center border-2">
            <p>{name}</p>
          </td>
        );
      })}
      <td className="border-2 text-center">
        <Dropdown />
      </td>
    </tr>
  );
}
