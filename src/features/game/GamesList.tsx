import ErrorFallBack from "../../ui/ErrorFallBack";
import GameCard from "./GameCard";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useGamesList } from "./useGamesList";

function GamesList() {
  const { results, count, isLoading, error } = useGamesList();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorFallBack />;

  return (
    <>
      <div className="flex flex-col lg:block lg:columns-3 lg:gap-x-6 2xl:columns-4">
        {results!.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
      {count && <Pagination count={count} />}
    </>
  );
}

export default GamesList;
