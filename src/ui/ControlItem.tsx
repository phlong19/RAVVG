import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useClickOutside } from "../hooks/useClickOutside";
import ControlDropDown from "./ControlDropDown";
import { useSearchParams } from "react-router-dom";
import { firstCap } from "../utils/helpers";
import { Option } from "../utils/model";

interface Rect {
  x: number;
  y: number;
}

interface Props {
  root: string;
  options: Option[];
  title: string;
  query: string;
  defaultOption: string;
  idContainter: string;
}

const currentYear = new Date().getFullYear();

function ControlItem({
  root,
  title,
  options,
  query,
  defaultOption,
  idContainter,
}: Props) {
  const [showList, setShowList] = useState(false);
  const [position, setPosition] = useState<Rect | null>(null);

  const [searchParams] = useSearchParams();
  const ordering = searchParams.get(query) || defaultOption;

  const close = () => setShowList(false);
  const ref = useClickOutside(close);

  function handleToggle(e: React.MouseEvent) {
    if (e.target instanceof HTMLElement) {
      const rect = e.target
        .closest(`#${idContainter}`)!
        .getBoundingClientRect();

      setPosition({
        x: window.innerWidth < 1024 ? rect.x + 8 : rect.x,
        y: rect.height + rect.y + 2, // 8px
      });

      setShowList((s) => !s);
    }
  }

  return (
    <div ref={ref} onClick={handleToggle} id={idContainter}>
      <div className="flex h-[55px] items-center justify-start">
        <div className="mr-2">
          <button className="w-auto min-w-[150px] rounded-lg bg-[hsla(0,0%,100%,.07)] px-4 py-2.5 text-sm">
            <div className="flex h-full w-full items-center justify-between">
              <div className="mr-1.5 whitespace-nowrap transition-opacity duration-200 hover:opacity-70">
                {firstCap(title)}:{" "}
                <span className="font-bold">
                  {options.find((el) => el.value === ordering)?.label ||
                    `1950-${currentYear}`}
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
        <ControlDropDown
          close={close}
          rect={position}
          root={root}
          ordering={ordering}
          options={options}
          query={query}
        />
      )}
    </div>
  );
}

export default ControlItem;
