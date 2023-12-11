import { FaRegUser } from "react-icons/fa";
import {
  firstCap,
  generateComma,
  numberWithCommas,
} from "../../../utils/helpers";
import { Link } from "react-router-dom";
import React from "react";
import { GameDetailsProps } from "../../../utils/model";

interface Props {
  title: string;
  gameDevTeam: {
    count: number;
    results: {
      id: number;
      name: string;
      slug: string;
      image: string;
      image_background: string;
      games_count: number;
      games: GameDetailsProps[];
      positions: {
        id: number;
        name: string;
        slug: string;
      }[];
    }[];
  };
}

function GameCreators({ title, gameDevTeam }: Props) {
  return (
    <div className="relative mt-8">
      {/* title */}
      <div className="flex w-full items-baseline">
        <h2 className="mr-2 shrink grow text-2xl font-bold leading-7 text-white underline">
          {title} created by
        </h2>
        <div className="whitespace-nowrap text-xs text-white/40 underline lg:text-base">
          {gameDevTeam.count} creators
        </div>
      </div>
      {/* slider */}
      <div className="ml-[-10px] mt-4 w-[calc(100%+20px)] overflow-auto pb-7">
        <div className="mb-4 flex w-fit flex-nowrap items-start gap-2">
          {gameDevTeam.results.map((c, i) => (
            // wrapper
            <div
              key={i}
              className={`ml-2.5 w-[264px] lg:w-[304px] ${
                i === gameDevTeam.count - 1 ? "mr-2.5" : ""
              }`}
            >
              {/* inner wrapper with bg image */}
              <div
                style={{
                  "--image-url": `url(${c.image_background})`,
                }}
                className={`flex h-[354px] w-full flex-col justify-between overflow-hidden rounded-md bg-[rgb(32,32,32)]
                   bg-[image:linear-gradient(rgba(255,255,255,0.1),rgb(32,32,32)90%),var(--image-url)] bg-cover bg-[50%] bg-no-repeat px-6 py-8 shadow-md shadow-white/20 lg:h-[430px]`}
              >
                <div className="shrink grow basis-auto">
                  {/* avatar */}
                  {c.image && (
                    <div className="flex items-center justify-center">
                      <div
                        style={{ "--image-avt": `url(${c.image})` }}
                        className="h-24 w-24 rounded-[50%] bg-transparent bg-[image:var(--image-avt)] bg-cover bg-[50%] bg-no-repeat"
                      ></div>
                    </div>
                  )}
                  {/* name */}
                  <div className="my-4 text-center">
                    <div className="m-0 text-lg font-bold leading-[22px] underline underline-offset-[3px]">
                      {c.name}
                    </div>
                    {/* pos */}
                    <span>
                      {c.positions.map((pos, i) => (
                        <React.Fragment key={i}>
                          <span className="mt-2 min-h-[30px] w-full text-xs">
                            {firstCap(pos.name)}
                          </span>
                          {generateComma(c.positions.length, i)}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
                {/* game lists */}
                <div className="w-full">
                  {/* games count */}
                  <div className="flex text-sm">
                    <span className="mr-2 font-bold">Known for</span>
                    <span className="ml-auto whitespace-nowrap text-white/40 ">
                      {c.games_count}
                    </span>
                  </div>
                  {/* list */}
                  <ul className="mt-2 min-h-[68px] w-full border-t border-solid border-white/10 pt-2">
                    {[...c.games].slice(0, 3).map((game) => (
                      <li
                        key={game.id}
                        className="mb-1.5 flex w-full justify-between text-sm"
                      >
                        <Link
                          to={`/game/${game.slug}`}
                          className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-left underline"
                        >
                          {game.name}
                        </Link>
                        <span className="flex min-w-[56px] items-center justify-center gap-1 text-right opacity-40">
                          {numberWithCommas(game.added)}
                          <span className="text-xs">
                            <FaRegUser />
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameCreators;
