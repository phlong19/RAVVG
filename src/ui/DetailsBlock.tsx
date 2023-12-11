import { Link } from "react-router-dom";
import { firstCap, generateComma } from "../utils/helpers";
import React from "react";

export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: null;
    year_end: null;
    year_start: number;
    games_count: number;
    image_background: string;
  };
  released_at: null;
  requirements: {
    minimum?: undefined;
  };
}

interface Other {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

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
  array?: Platform[] | Other[];
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

  if (array) {
    return (
      <div className={`mb-3 ${width > 50 ? "w-full" : "w-1/2"} pr-2 text-left`}>
        <div className="mb-2 text-left text-sm font-medium text-white/20">
          {firstCap(title)}
        </div>
        <div className="break-words">
          {title === "platforms" &&
            (array as Platform[]).map((p, i) => {
              return (
                <React.Fragment key={i}>
                  <Link
                    key={i}
                    className="text-sm underline hover:text-white/40 lg:text-base"
                    to={`/games/${p.platform.slug}`}
                  >
                    {p.platform.name}
                  </Link>
                  {generateComma(array.length, i)}
                </React.Fragment>
              );
            })}
          {title !== "platforms" &&
            (array as Other[]).map((el, i) => {
              return (
                <React.Fragment key={i}>
                  <Link
                    className="text-sm underline hover:text-white/40 lg:text-base"
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
  }
}

export default DetailsBlock;
