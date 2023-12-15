import { firstCap } from "../utils/helpers";
import { GameDetailsProps } from "../utils/model";
import DynamicFaIcon from "./DynamicFaIcon";

function CardPlatforms({ game }: { game: GameDetailsProps }) {
  return (
    <div className="mb-2 flex">
      <div className="mr-[6px] flex flex-1 justify-start gap-1">
        {game.parent_platforms.map((p) => (
          <div key={p.platform.id} className="text-sm">
            <DynamicFaIcon name={"Fa" + `${firstCap(p.platform.slug)}`} />
          </div>
        ))}
      </div>
      {game.metacritic && (
        <div className="inline-block min-w-[32px] rounded border border-solid border-[#6dc849] text-center font-bold text-[#6dc849]">
          {game.metacritic}
        </div>
      )}
    </div>
  );
}

export default CardPlatforms;
