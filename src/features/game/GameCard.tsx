import { GameDetailsProps } from "../../utils/model";

import CardImage from "../../ui/CardImage";
import CardPlatforms from "../../ui/CardPlatforms";
import CardButtons from "../../ui/CardButtons";
import CardInfoHidden from "../../ui/CardInfoHidden";
import CardTitle from "../../ui/CardTitle";
import { mostRating } from "../../utils/helpers";

function GameCard({ game }: { game: GameDetailsProps }) {
  const icon = mostRating(game.ratings);

  return (
    <div className="group/item mb-4 max-w-full break-inside-avoid px-2 duration-300 hover:scale-[1.05] md:px-0 lg:mb-6">
      {game.background_image && (
        <CardImage background_image={game.background_image} />
      )}

      <div className="rounded-b-xl bg-[#202020] p-4 lg:px-4 lg:pb-6 lg:pt-4">
        {game.platforms && <CardPlatforms game={game} />}
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
