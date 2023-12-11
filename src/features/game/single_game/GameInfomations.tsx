import { Link } from "react-router-dom";
import DetailsBlock, { Platform } from "../../../ui/DetailsBlock";
import { format } from "date-fns";
import { GameDetailsProps } from "../../../utils/model";

interface Props {
  game: GameDetailsProps;
  gameSeries: {
    results: GameDetailsProps[];
  };
}

function GameInfomations({ game, gameSeries }: Props) {
  const {
    platforms,
    genres,
    developers,
    publishers,
    tba,
    esrb_rating,
    tags,
    website,
    released,
  } = game;

  return (
    <div className="mt-8 flex flex-wrap">
      <DetailsBlock title="platforms" array={platforms as Platform[]} />

      {game.metacritic && (
        <DetailsBlock title="metascore" type="non-array">
          (
          <div className="inline-block min-w-[32px] rounded border border-solid border-[#6dc849] text-center font-bold text-[#6dc849]">
            {game.metacritic}
          </div>
          )
        </DetailsBlock>
      )}
      <DetailsBlock title="genre" array={genres} />
      <DetailsBlock title="release date" type="non-array">
        {tba ? "TBA" : format(new Date(released!), "MMM dd, yyyy")}
      </DetailsBlock>
      <DetailsBlock title="developer" array={developers} />
      <DetailsBlock title="publisher" array={publishers} />
      <DetailsBlock title="age rating" type="non-array">
        {esrb_rating !== null ? esrb_rating.name : "Not rated"}
      </DetailsBlock>
      <DetailsBlock
        width={100}
        title="other games in the series"
        array={gameSeries.results}
      />
      <DetailsBlock width={100} title="tags" array={tags} />
      <DetailsBlock width={100} title="website" type="non-array">
        <Link to={website} className="text-sm underline hover:text-white/40">
          {website}
        </Link>
      </DetailsBlock>
    </div>
  );
}

export default GameInfomations;
