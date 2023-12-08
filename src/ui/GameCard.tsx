import { GameProps } from "../utils/model";

import CardImage from "./CardImage";
import CardPlatforms from "./CardPlatforms";
import CardButtons from "./CardButtons";
import CardInfoHidden from "./CardInfoHidden";
import CardTitle from "./CardTitle";
import { mostRating } from "../utils/helpers";

function GameCard({ game }: GameProps) {
  const icon = mostRating(game.ratings);

  return (
    <div className="group/item mb-6 max-w-full break-inside-avoid px-2 duration-300 hover:scale-[1.05] md:px-0">
      <CardImage background_image={game.background_image} />

      <div className="rounded-b-xl bg-[#202020] p-4 lg:px-4 lg:pb-6 lg:pt-4">
        <CardPlatforms game={game} />
        <CardTitle icon={icon} name={game.name} slug={game.slug} />
        <CardButtons
          added={game.added}
          added_by_status={game.added_by_status}
        />
        <CardInfoHidden game={game} />
      </div>
    </div>
  );
}

export default GameCard;
