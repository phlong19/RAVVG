import React, { SyntheticEvent } from "react";

import { NavLink } from "react-router-dom";
import DynamicFaIcon from "./DynamicFaIcon";

interface Props {
  to: string;
  icon: string;
  children: React.ReactNode;
}

function SideIconLink({ to, icon, children }: Props) {
  function handleClick(e: SyntheticEvent) {
    const parentNavLink = (e.target as HTMLElement).closest("a");
    if (parentNavLink?.className.includes("active")) {
      e.preventDefault();
    }
  }

  return (
    <li className="group/item mb-2" onClick={handleClick}>
      <NavLink to={to} className="z-50 flex items-center gap-1">
        <div className="relative mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-white/10 transition-all duration-300 group-hover/item:bg-white group-hover/item:text-black">
          <span className="absolute text-xl">
            <DynamicFaIcon name={icon} />
          </span>
        </div>
        <span className="text-base font-normal">{children}</span>
      </NavLink>
    </li>
  );
}

export default SideIconLink;
