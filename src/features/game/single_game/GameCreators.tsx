import React from "react";
import { firstCap, generateComma } from "../../../utils/helpers";
import { useGameDevTeam } from "./useGameDevTeam";

import SkeletonCardsLoading from "../../../ui/SkeletonCardsLoading";
import CardItemsList from "../../../ui/CardItemsList";

function GameCreators({ title }: { title: string }) {
  const { gameDevTeam, isLoading } = useGameDevTeam();

  if (isLoading) {
    return (
      <div className="mt-8 h-auto overflow-auto">
        <SkeletonCardsLoading />
      </div>
    );
  }

  return (
    <div className="relative mt-8">
      {/* title */}
      <div className="flex w-full items-baseline">
        <h2 className="mr-2 shrink grow text-2xl font-bold leading-7 text-white underline">
          {title} created by
        </h2>
        <div className="whitespace-nowrap text-xs text-white/40 underline lg:text-base">
          {gameDevTeam!.count} creators
        </div>
      </div>
      {/* slider */}
      <div className="ml-[-10px] mt-4 w-[calc(100%+20px)] overflow-auto pb-7 lg:overflow-visible">
        <div className="mb-4 flex w-fit flex-nowrap items-start gap-2 lg:flex-wrap lg:justify-around lg:gap-10">
          {gameDevTeam!.results.map((c, i) => (
            // wrapper
            <div
              key={i}
              className={`ml-2.5 w-[264px] duration-300 hover:scale-110 lg:w-[304px] ${
                i === gameDevTeam!.count - 1 ? "mr-2.5" : ""
              }`}
            >
              {/* inner wrapper with bg image */}
              <div
                style={
                  {
                    "--image-url": `url(${c.image_background})`,
                  } as React.CSSProperties
                }
                className={`card h-[354px] bg-[image:linear-gradient(rgba(255,255,255,0.1),rgb(32,32,32)90%),var(--image-url)] lg:h-[430px]`}
              >
                <div className="shrink grow basis-auto">
                  {/* avatar */}
                  {c.image && (
                    <div className="flex items-center justify-center">
                      <div
                        style={
                          {
                            "--image-avt": `url(${c.image})`,
                          } as React.CSSProperties
                        }
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
                <CardItemsList list={c} title="Known for"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameCreators;
