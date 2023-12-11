import ErrorFallBack from "../../ui/ErrorFallBack";
import GameCard from "./GameCard";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useGamesList } from "./useGamesList";
// import { fakeData } from "../../../data/data";

function GamesList() {
  const { results, count, isLoading, error } = useGamesList();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorFallBack />;

  // const games = fakeData.results;
  return (
    <>
      {/* <div className="m-auto flex max-w-[480px] flex-col gap-y-6 lg:block lg:max-w-full lg:columns-3 lg:gap-x-6 2xl:columns-4"> */}
      <div className="flex flex-col lg:block lg:columns-3 lg:gap-x-6 2xl:columns-4">
        {results?.map((game, i) => <GameCard key={i} game={game} />)}
      </div>
      {count && <Pagination count={count} />}
    </>
  );
}

export default GamesList;
