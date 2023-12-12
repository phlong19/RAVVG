import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { GameProps } from "../utils/model";
import { generateComma } from "../utils/helpers";

function CardInfoHidden({ game }: GameProps) {
  return (
    <ul className="invisible mt-2 h-0 w-full list-none pt-1 text-base group-hover/item:visible group-hover/item:h-[115px]">
      <li className="flex items-baseline justify-between border-b border-white/[0.07] py-3 text-xs">
        <div className="mr-[6px] text-white/40">Release date:</div>
        <div>{format(new Date(game.released!), "MMM dd, yyyy")}</div>
      </li>
      <li className="flex items-baseline justify-between border-b border-white/[0.07] py-3 text-xs">
        <div className="mr-[6px] text-white/40">Ratings:</div>
        <div>
          <span className="italic">{game.rating}</span> ⭐ on{" "}
          <span className="font-bold">{game.ratings_count}</span> ratings.
        </div>
      </li>
      <li className="flex items-baseline justify-between py-3 text-xs">
        <div className="mr-[6px] text-white/40">Genres:</div>
        <div className="text-right">
          {game.genres.map((genre, i) => {
            return (
              <React.Fragment key={i}>
                <Link
                  className="duration-300 hover:text-white/40"
                  to={`/games/${genre.slug}`}
                >
                  {genre.name}
                </Link>
                {generateComma(game.genres.length, i)}
              </React.Fragment>
            );
          })}
        </div>
      </li>
    </ul>
  );
}

export default CardInfoHidden;
