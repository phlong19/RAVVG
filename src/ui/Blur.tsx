import React from "react";
import { useMenu } from "../context/MenuContext";

function Blur({ children }: { children: React.ReactNode }) {
  const { show } = useMenu();

  return (
    <div
      className={`${
        !show ? "hidden" : ""
      } fixed left-0 top-0 z-[99] h-full w-full backdrop-blur-md transition-all duration-500 lg:hidden`}
    >
      {children}
    </div>
  );
}

export default Blur;
