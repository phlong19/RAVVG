import { useParams } from "react-router-dom";

import BreadCrumbs from "../../../ui/BreadCrumbs";
import Button from "../../../ui/Button";
import Spinner from "../../../ui/Spinner";
import ErrorFallBack from "../../../ui/ErrorFallBack";
import { FaPlus, FaRegComment } from "react-icons/fa";

import { useGameDetails } from "./useGameDetails";
import GameHeading from "./GameHeading";
import GameScreenShots from "./GameScreenShots";
import GameRatings from "./GameRatings";
import GameInfomations from "./GameInfomations";
import GameStores from "./GameStores";
import GameCreators from "./GameCreators";
import Copy from "../../../ui/Copy";
import GameAbout from "./GameAbout";

function GameDetails() {
  const { name } = useParams();
  const { game, gameDevTeam, gameSeries, screenshots, isLoading } =
    useGameDetails();

  if (isLoading) return <Spinner />;
  if (!game || !gameDevTeam || !gameSeries || !screenshots)
    return <ErrorFallBack />;

  return (
    <div className="block px-2.5 sm:px-0 xl:m-auto xl:max-w-6xl">
      <BreadCrumbs name={name!} />
      <GameHeading game={game} />
      <GameScreenShots screenshots={screenshots} />
      <GameRatings game={game} />

      <div>
        <Button icon={<FaPlus />}>Write a review {game.reviews_count}</Button>
        <Button icon={<FaRegComment />}>Write a comment</Button>
      </div>

      <GameAbout description={game.description_raw} />
      <GameInfomations game={game} gameSeries={gameSeries} />
      <GameStores stores={game.stores} />
      <GameCreators gameDevTeam={gameDevTeam} title={game.name} />

      <div className="mb-3 mt-8 block text-right text-lg sm:text-center lg:hidden">
        <Copy />
      </div>
    </div>
  );
}

export default GameDetails;
