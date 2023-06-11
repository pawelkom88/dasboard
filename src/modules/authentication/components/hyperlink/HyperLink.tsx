import { Link } from "react-router-dom";

export default function HyperLink({
  description = "Already have an account",
  action = "Login",
  link = "/",
}) {
  return (
    <small className="text-center text-gray-500 mt-4">
      {description}{" "}
      <Link className=" underline" to={link}>
        {action}
      </Link>
    </small>
  );
}
