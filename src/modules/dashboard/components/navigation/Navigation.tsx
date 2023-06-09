import SearchInput from "./search-input/SearchInput";
import Avatar from "../avatar/Avatar";
import NavLink from "./nav-link/NavLink";
import { DashboardLinks } from "./utils/data";

export default function Navigation() {
  return (
    <aside className="flex flex-col h-full p-3 w-60 border-r-2 border-gray-400">
      <div className="space-y-3">
        <SearchInput />
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {DashboardLinks.map(dashboardLink => (
              <NavLink key={dashboardLink.id} dashboardLink={dashboardLink} />
            ))}
          </ul>
        </div>
      </div>
      <Avatar />
    </aside>
  );
}
