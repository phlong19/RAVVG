import { format } from "date-fns";
import {
  firstCap,
  getColorForRating,
  mostRating,
  sortRatingsById,
} from "../../../utils/helpers";
import { FaRegEdit } from "react-icons/fa";
import { GameDetails } from "../../../utils/model";

function GameRatings({ game }: { game: GameDetails }) {
  const { updated, reviews_count } = game;
  const icon = mostRating(game.ratings);
  const sortedRatings = sortRatingsById(game.ratings);

  return (
    <div className="items-center lg:flex lg:flex-row-reverse xl:flex-col-reverse">
      {/* edit button and last updated time */}
      <div className="lg:mt-7 xl:w-full">
        <button className="mt-4 inline-flex w-full shrink-0 items-center justify-center rounded-md bg-white p-[15px] text-black duration-200 hover:opacity-60">
          <span className="mr-2 text-xl">
            <FaRegEdit />
          </span>
          Edit the game info
        </button>
        <p className="mb-4 mt-2 text-center text-sm text-white/40 lg:mb-0">
          Last modified: {format(new Date(updated), "MMM d, yyyy")}
        </p>
      </div>
      {/* ratings */}
      <div className="mt-2 flex w-full shrink-0 flex-col items-center justify-center lg:mr-auto lg:w-[65%] xl:-mb-5 xl:w-full">
        <div className="mb-1.5 flex h-6 pb-2 text-xl font-bold tracking-wider lg:mr-auto lg:text-2xl">
          {firstCap(icon)}
          <img
            loading="lazy"
            className="ml-2 h-6 w-6 lg:h-8 lg:w-8"
            src={`/${icon}.png`}
            alt={icon}
          />
        </div>
        <a className="text-center text-xs uppercase tracking-[3px] text-white/40 underline lg:mr-auto lg:mt-1">
          {reviews_count} ratings
        </a>

        {/* rating bar */}
        <div className="relative mt-3.5 flex h-12 w-full">
          {sortedRatings.map((rate, i) => (
            <div
              key={i}
              style={{
                width: `${rate.percent}%`,
                backgroundImage: getColorForRating(rate.id),
              }}
            ></div>
          ))}
          <div className="absolute h-full w-full rounded-md  outline outline-stone-900"></div>
        </div>
        {/* legend */}
        <div className="mt-4 flex flex-wrap gap-1 px-2.5 xl:gap-2">
          {sortedRatings.map((rate, i) => (
            <div
              key={i}
              className="mb-1.5 ml-[-5px] mr-2 flex h-8 items-center justify-center py-1.5 text-sm xl:text-base"
            >
              <div
                style={{
                  backgroundImage: getColorForRating(rate.id),
                }}
                className="mr-1.5 h-2.5 w-2.5 rounded-[50%]"
              ></div>
              <div className="font-bold ">{firstCap(rate.title)}</div>
              <div className="ml-2 text-white/40">{rate.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameRatings;
