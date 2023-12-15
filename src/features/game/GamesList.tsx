import GameCard from "./GameCard";
import Pagination from "../../ui/Pagination";
import { GameDetailsProps } from "../../utils/model";

interface Props {
  results: GameDetailsProps[];
  count: number;
}

function GamesList({ results, count }: Props) {
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
