import { Link } from "react-router-dom";

interface GameProps {
  game: {
    background_image: string;
    slug: string;
    name: string;
    // add more
  };
}

function GameCardInfo({ game }: GameProps) {
  return (
    <div className="border border-red-500 px-2 md:px-0">
      <div className="w-full overflow-hidden rounded-t-xl">
        <img src={game.background_image} alt={game.slug} />
      </div>
      <div className="bg-black p-4 lg:px-4 lg:pb-6 lg:pt-4">
        <Link to={`games/${game.slug}`}>{game.name}</Link>
      </div>
    </div>
  );
}

export default GameCardInfo;
