import { Link } from "react-router-dom";
import { firstCap, generateComma } from "../utils/helpers";
import React from "react";
import { Genre, PlatformDetail } from "../utils/model";

function DetailsBlock({
  width = 50,
  children,
  type,
  title,
  array,
}: {
  width?: number;
  type?: "non-array";
  children?: React.ReactNode;
  title:
    | "release date"
    | "metascore"
    | "age rating"
    | "platforms"
    | "genre"
    | "developer"
    | "publisher"
    | "other games in the series"
    | "tags"
    | "website";
  array?: PlatformDetail[] | Genre[];
}) {
  if (type) {
    return (
      <div className="mb-3 w-1/2 pr-2 text-left">
        <div className="mb-2 text-left text-sm font-medium text-white/20">
          {firstCap(title)}
        </div>
        <div className="text-sm lg:text-base">{children}</div>
      </div>
    );
  }

  if (array && array.length > 0) {
    return (
      <div className={`mb-3 ${width > 50 ? "w-full" : "w-1/2"} pr-2 text-left`}>
        <div className="mb-2 text-left text-sm font-medium text-white/20">
          {firstCap(title)}
        </div>
        <div className="break-words">
          {title === "platforms" &&
            (array as PlatformDetail[]).map((p, i) => {
              return (
                <React.Fragment key={i}>
                  <Link
                    key={i}
                    className="text-sm underline duration-200 hover:text-white/60 lg:text-base"
                    to={`/games/${p.platform.slug}`}
                  >
                    {p.platform.name}
                  </Link>
                  {generateComma(array.length, i)}
                </React.Fragment>
              );
            })}
          {title !== "platforms" &&
            (array as Genre[]).map((el, i) => {
              return (
                <React.Fragment key={i}>
                  <Link
                    className="text-sm underline duration-200 hover:text-white/60 lg:text-base"
                    to={`/${
                      title === "other games in the series" ? "game" : "games"
                    }/${el.slug}`}
                  >
                    {el.name}
                  </Link>
                  {generateComma(array.length, i)}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`mb-3 ${width > 50 ? "w-full" : "w-1/2"} pr-2 text-left`}>
        <div className="mb-2 text-left text-sm font-medium text-white/20">
          {firstCap(title)}
        </div>
        <div className="break-words">
          <span>There're no {title}</span>;
        </div>
      </div>
    );
  }
}

export default DetailsBlock;
