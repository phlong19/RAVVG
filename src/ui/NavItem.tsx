import { Link } from "react-router-dom";
import { capitalized } from "../utils/helpers";
import { useMenu } from "../context/MenuContext";

interface Props {
  to: string;
  type?: string;
  field: string;
}

function NavItem({ to, type, field }: Props) {
  const { close } = useMenu();

  if (type === "header") {
    return (
      <li className="pb-4 text-2xl font-bold">
        <Link onClick={close} to={to}>
          {capitalized(field)}
        </Link>
      </li>
    );
  }
  return (
    <li className="text-lg">
      <Link onClick={close} to={to}>
        {capitalized(to)}
      </Link>
    </li>
  );
}

export default NavItem;
