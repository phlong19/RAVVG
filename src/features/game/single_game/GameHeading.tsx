import { format } from "date-fns";
import DynamicFaIcon from "../../../ui/DynamicFaIcon";
import { firstCap } from "../../../utils/helpers";
import { GameDetails } from "../../../utils/model";

function GameHeading({ game }: { game: GameDetails }) {
  const { released, parent_platforms, playtime, name } = game;

  return (
    <div className="relative flex min-h-[auto] flex-col items-center justify-center lg:min-h-[100px]">
      <div className="flex flex-col flex-wrap items-center justify-center text-center text-xs font-normal uppercase leading-normal lg:mr-auto lg:flex-row">
        <div className="flex items-center">
          {released && (
            <div className="mb-3 mr-3.5 h-5 rounded bg-white px-[7.5px] py-[2px] tracking-widest text-black">
              {format(new Date(released), "MMM dd, yyyy").toUpperCase()}
            </div>
          )}
          <div className="mb-3 flex">
            {parent_platforms.map((p, i) => (
              <div key={i} className="mr-1.5 text-[15px] lg:text-base">
                <DynamicFaIcon name={"Fa" + `${firstCap(p.platform.slug)}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3 flex shrink-0 tracking-[0.15em]">
          average playtime: {playtime} hours
        </div>
      </div>
      <h1 className="mb-4 mt-0 w-full break-words p-0 text-center text-4xl font-bold lg:text-left lg:text-5xl lg:leading-snug xl:mb-6">
        {name}
      </h1>
    </div>
  );
}

export default GameHeading;
