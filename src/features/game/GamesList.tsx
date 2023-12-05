import ErrorFallBack from "../../ui/ErrorFallBack";
import GameCard from "../../ui/GameCard";
import Spinner from "../../ui/Spinner";
import { useGamesList } from "./useGamesList";
import { fakeData } from "../../../data/data";

function GamesList() {
  // const { games, isLoading, error } = useGamesList();

  // if (isLoading) return <Spinner />;
  // if (error) return <ErrorFallBack />;

  const games = fakeData.results;
  return (
    <>
      <div className="m-auto flex max-w-[480px] flex-col gap-y-6 lg:block lg:max-w-full lg:columns-3 lg:gap-x-6 2xl:columns-4">
        {games!.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
      <div className="h-20 bg-slate-400">pagination</div>
    </>
  );
}

export default GamesList;
