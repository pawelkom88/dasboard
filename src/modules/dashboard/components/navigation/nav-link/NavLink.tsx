import { Link } from "react-router-dom";
import { DashboardLink } from "../utils/types";

export default function NavLink({ dashboardLink }: { dashboardLink: DashboardLink }) {
  const { link, icon, name } = dashboardLink;

  return (
    <li className="rounded-sm">
      <Link to={link} className="flex items-center gap-2 p-2 space-x-3 rounded-md">
        {icon}
        {name}
      </Link>
    </li>
  );
}
