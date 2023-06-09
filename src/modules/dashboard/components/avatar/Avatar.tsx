import { Link } from "react-router-dom";
import { user } from "../navigation/utils/data";

export default function Avatar() {
  const { name, img } = user;

  return (
    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
      <img src={img} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="flex items-center space-x-1">
          <Link to="/profile" className="text-xs hover:underline dark:text-gray-400">
            View profile
          </Link>
        </span>
      </div>
    </div>
  );
}
