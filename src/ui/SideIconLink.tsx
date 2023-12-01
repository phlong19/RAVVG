import React from "react";

import { Link } from "react-router-dom";
import DynamicFaIcon from "./DynamicFaIcon";

interface Props {
  to: string;
  icon: string;
  children: React.ReactNode;
}

function SideIconLink({ to, icon, children }: Props) {
  return (
    <li className="mb-2">
      <Link to={to} className="flex">
        <span>
          <DynamicFaIcon name={icon} />
        </span>
        <span className="text-base font-normal">{children}</span>
      </Link>
    </li>
  );
}

export default SideIconLink;
