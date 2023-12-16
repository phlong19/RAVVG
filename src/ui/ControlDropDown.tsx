import { useSearchParams } from "react-router-dom";
import { Option } from "../utils/model";

interface Props {
  close: () => void;
  rect: { x: number; y: number };
  ordering: string;
  options: Option[];
  query: string;
}

function ControlDropDown({ rect, ordering, options, query }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set(query, value);

    if (value === "clear") {
      searchParams.delete("year");
    }

    if (searchParams.get("page")) {
      searchParams.set("page", "1");
    }

    setSearchParams(searchParams);
  }

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
          <button
            key={o.value}
            onClick={() => handleClick(o.value)}
            className={`${
              o.value === "clear"
                ? "border-b border-gray-300 pb-2 text-red-600"
                : "hover:bg-stone-400"
            } relative z-10 my-1.5 flex h-5 w-full cursor-pointer items-center justify-between whitespace-nowrap rounded px-2.5 text-xs transition duration-200
              `}
          >
            {o.label} {ordering === o.value ? "✔" : ""}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ControlDropDown;
