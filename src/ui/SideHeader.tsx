import { Link } from "react-router-dom";

interface Props {
  type: "header" | "list" | "browse";
  children: React.ReactNode;
  to?: string;
  label?: string;
}

const base = "text-2xl font-bold ";
const headerWithList = base + "mb-6 space-y-4";
const header = base + "mb-4 cursor-pointer duration-200 hover:opacity-60";

function SideHeader({ to, type, children, label }: Props) {
  if (type === "header" && to) {
    return (
      <Link to={to}>
        <div className={header}>{children}</div>
      </Link>
    );
  }

  if (type === "list") {
    return (
      <div className={headerWithList}>
        <span>{label}</span>
        <ul>{children}</ul>
      </div>
    );
  }

  if (type === "browse" && to)
    return (
      <div className={headerWithList}>
        <Link to={to} className={header + " block w-[200px]"}>
          Browse
        </Link>
        {children}
      </div>
    );
}

export default SideHeader;
