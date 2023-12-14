import { FaRegUser } from "react-icons/fa";
import { numberWithCommas } from "../utils/helpers";
import { Link } from "react-router-dom";

interface Categories {
  title: string;
  list: {
    games_count: number;
    games: {
      id: number;
      name: string;
      slug: string;
      added: number;
    }[];
  };
}

function CardItemsList({ list, title }: Categories) {
  return (
    <div className="w-full">
      {/* games count */}
      <div className="flex text-sm">
        <span className="mr-2 font-bold">{title}</span>
        <span className="ml-auto whitespace-nowrap text-white/40 ">
          {numberWithCommas(list.games_count)}
        </span>
      </div>
      {/* list */}
      <ul className="mt-2 min-h-[68px] w-full border-t border-solid border-white/10 pt-2">
        {[...list.games].slice(0, 3).map((game) => (
          <li
            key={game.id}
            className="mb-1.5 flex w-full justify-between text-sm"
          >
            <Link
              to={`/game/${game.slug}`}
              className="max-w-[75%] overflow-hidden text-ellipsis whitespace-nowrap text-left underline"
            >
              {game.name}
            </Link>
            <span className="flex min-w-[56px] items-center justify-center gap-1 text-right opacity-40">
              {numberWithCommas(game.added)}
              <span className="text-xs">
                <FaRegUser />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardItemsList;
