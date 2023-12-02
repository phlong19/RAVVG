import GameCardInfo from "../../ui/GameCardInfo";
import { fakeData } from "./fakeQueryAPI";

function GamesList() {
  // 1. query hook
  const games = fakeData.results;
  // 2.1 waiting with spinner

  // 4. hook back query and render
  return (
    <div className="m-auto flex h-full max-w-[480px] flex-col justify-center gap-y-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
      {games.map((game) => (
        <GameCardInfo game={game} />
      ))}
    </div>
  );
}

export default GamesList;
