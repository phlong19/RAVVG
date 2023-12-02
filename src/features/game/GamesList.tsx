import GameCardInfo from "../../ui/GameCardInfo";
import { useGameList } from "./useGameList";

function GamesList() {
  const { games, isLoading } = useGameList();

  if (isLoading) return <div></div>;

  return (
    <div className="m-auto overflow-y-auto flex max-w-[480px] flex-col gap-y-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
      {games!.map((game, i) => (
        <GameCardInfo key={i} game={game} />
      ))}
    </div>
  );
}

export default GamesList;
