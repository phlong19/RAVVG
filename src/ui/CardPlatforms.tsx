import { firstCap } from "../utils/helpers";
import { GameDetailsProps } from "../utils/model";
import DynamicFaIcon from "./DynamicFaIcon";

interface Props {
  game: GameDetailsProps;
  meta?: string;
}

function CardPlatforms({ game, meta = "yes" }: Props) {
  return (
    <div className="mb-2 flex">
      <div className="mr-[6px] flex flex-1 justify-start gap-1">
        {game.parent_platforms.map((p) => (
          <div key={p.platform.id} className="text-sm">
            <DynamicFaIcon name={"Fa" + `${firstCap(p.platform.slug)}`} />
          </div>
        ))}
      </div>
      {meta === "yes" && game.metacritic && (
        <div className="inline-block min-w-[32px] rounded border border-solid border-[#6dc849] text-center font-bold text-[#6dc849]">
          {game.metacritic}
        </div>
      )}
    </div>
  );
}

export default CardPlatforms;
