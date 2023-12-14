import parse from "html-react-parser";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
  desType?: "raw" | "not_raw";
}

function MainLayout({
  children,
  title,
  description,
  desType = "not_raw",
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="text-white">
      <div className="mb-4 h-[85px] text-center lg:h-auto lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">{title}</h1>
        {description && desType === "not_raw" && (
          <p className="mt-2">{description}</p>
        )}
        {description && desType === "raw" && (
          <div className="mt-4 text-base">
            <span
              className={`${
                show
                  ? "overflow-visible"
                  : "line-clamp-4 text-ellipsis whitespace-normal "
              }`}
            >
              {parse(description)}
            </span>
            <button
              onClick={() => setShow((s) => !s)}
              className="rounded bg-white px-[5px] pt-[1px] text-black"
            >
              {show ? "Show less" : "Read more"}
            </button>
          </div>
        )}
      </div>
      {/* games list */}
      {children}
    </div>
  );
}

export default MainLayout;
