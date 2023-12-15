import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const options = [
  { label: "Date updated", value: "updated" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "released" },
  { label: "Popularity", value: "popular" },
  { label: "Average rating", value: "rating" },
];

interface Rect {
  x: number;
  y: number;
}

function ControlList() {
  const [showList, setShowList] = useState(false);
  const [active, setActive] = useState("popular");
  const [position, setPosition] = useState<Rect | null>(null);

  const close = () => setShowList(false);

  const ref = useClickOutside(close);

  function handleToggle(e: React.MouseEvent) {
    if (e.target instanceof HTMLElement) {
      const rect = e.target.closest("#order")!.getBoundingClientRect();
      setPosition({
        x: window.innerWidth < 1024 ? rect.x + 8 : rect.x,
        y: rect.height + rect.y + 2, // 8px
      });

      setShowList((s) => !s);
    }
  }

  return (
    <div
      id="order"
      ref={ref}
      onClick={handleToggle}
      className="mb-4 h-14 px-2.5 text-sm lg:mb-6 lg:pl-0"
    >
      <div className="flex h-[55px] items-center justify-start">
        <div className="mr-2">
          <button className="w-auto min-w-[150px] rounded-lg bg-[hsla(0,0%,100%,.07)] px-4 py-2.5 text-sm">
            <div className="flex h-full w-full items-center justify-between">
              <div className="mr-1.5 whitespace-nowrap transition-opacity duration-200 hover:opacity-70">
                Order by:{" "}
                <span className="font-bold">
                  {options.find((el) => el.value === active)?.label}
                </span>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </div>
          </button>
        </div>
      </div>
      {showList && position !== null && (
        <List
          close={close}
          rect={position}
          active={active}
          setActive={setActive}
        />
      )}
    </div>
  );
}

function List({
  close,
  rect,
  active,
  setActive,
}: {
  close: () => void;
  rect: { x: number; y: number };
  active: string;
  setActive: (param: string) => void;
}) {
  return (
    <div
      style={{
        left: rect.x,
        top: rect.y,
      }}
      className="absolute z-[1] block w-[185px] rounded text-black shadow-[0_2px_4px_0_rgba(0,0,0,.1)]"
    >
      <div className="m-0 box-border w-full overflow-visible rounded bg-white px-2.5 pb-2.5 pt-1">
        {options.map((o) => (
          <Link
            key={o.value}
            to={`/`}
            onClick={() => {
              setActive(o.value);
              close();
            }}
            className="relative z-10 my-1.5 flex h-5 w-full cursor-pointer items-center justify-between whitespace-nowrap rounded px-2.5 text-xs transition duration-200 hover:bg-stone-400"
          >
            {o.label} {active === o.value ? "✔" : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ControlList;
