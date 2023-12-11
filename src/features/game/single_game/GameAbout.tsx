import { useState } from "react";

function GameAbout({ description }: { description: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-8">
      <h2 className="mb-2 text-xl font-normal">About</h2>
      <div>
        <span
          className={`${
            show
              ? "overflow-visible"
              : "line-clamp-4 text-ellipsis whitespace-normal"
          }`}
        >
          {description}
        </span>
        <button
          onClick={() => setShow((s) => !s)}
          className={`${
            show && "ml-2"
          } rounded bg-white px-[5px] pt-[1px] text-black`}
        >
          {show ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

export default GameAbout;
