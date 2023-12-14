import GameCard from "./GameCard";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

import { useGamesList } from "./useGamesList";
import EmptyPage from "../../ui/EmptyPage";

function GamesList() {
  const { results, count, isLoading } = useGamesList();

  if (isLoading) return <Spinner />;
  if (!results!.length) return <EmptyPage />;

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
