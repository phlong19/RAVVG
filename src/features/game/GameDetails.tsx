import { useParams } from "react-router-dom";
import BreadCrumbs from "../../ui/BreadCrumbs";
import { fakeSingle } from "../../../data/single_data";
import DynamicFaIcon from "../../ui/DynamicFaIcon";
import { firstCap, mostRating } from "../../utils/helpers";
import { FaRegEdit } from "react-icons/fa";
import { format } from "date-fns";

const fakeScreenshots = [
  {
    id: 1886815,
    image:
      "https://media.rawg.io/media/screenshots/831/8314575622c6ac8de538e890ec6a2aab.jpg",
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1886816,
    image:
      "https://media.rawg.io/media/screenshots/eb7/eb7d75e25be2c76d6e1bd454f2071aad.jpg",
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1886818,
    image:
      "https://media.rawg.io/media/screenshots/b71/b71ee1cd39f5e8685900b47980d715a1_I3dtqc6.jpg",
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1886819,
    image:
      "https://media.rawg.io/media/screenshots/291/29185669bd2fdf8c0ec10fcf10da3063.jpg",
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1886821,
    image:
      "https://media.rawg.io/media/screenshots/7ba/7ba2d1b2998ae2c76c3ef3509ea8e104.jpg",
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1886823,
    image:
      "https://media.rawg.io/media/screenshots/234/234c1ba4292f69ffc3c988dab739fa91.jpg",
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
];

function GameDetails() {
  const { name } = useParams();
  // const icon = mostRating(game.ratings);
  // custom hook

  // https://api.rawg.io/api/games/{game_pk}/screenshots
  // https://api.rawg.io/api/games/{game_pk}/game-series
  // https://api.rawg.io/api/games/{game_pk}/development-team

  // spinner
  const game = fakeSingle;
  const icon = mostRating(game.ratings);
  const {
    parent_platforms,
    name: title,
    playtime,
    added_by_status,
    updated,
    ratings,
    reviews_count,
    description_raw,
    released,
    tba,
    genres,
    developers,
    publishers,
    esrb_rating,
    website,
    tags,
    stores,
  } = game;

  return (
    <div className="px-2.5">
      <BreadCrumbs name={name!} />
      {/* platforms + play time and title */}
      <div className="relative flex min-h-[auto] flex-col items-center justify-center lg:min-h-[100px]">
        <div className="flex flex-wrap items-center justify-center text-center text-xs font-normal uppercase leading-normal">
          <div className="mb-3 mr-3.5 flex shrink-0">
            {parent_platforms.map((p, i) => (
              <div key={i} className="mr-1.5 text-[15px]">
                <DynamicFaIcon name={"Fa" + `${firstCap(p.platform.slug)}`} />
              </div>
            ))}
          </div>
          <div className="mb-3 flex shrink-0 tracking-[0.15em]">
            average playtime: {playtime} hours
          </div>
        </div>
        <h1 className="mb-4 mt-0 break-words p-0 text-center text-4xl font-bold lg:mt-8">
          {title}
        </h1>
      </div>
      {/* screen shots */}
      <div className="mb-6 box-border h-44 w-full overflow-x-auto">
        <div className="flex w-fit flex-nowrap gap-4 lg:flex-wrap">
          {fakeScreenshots.map((img, i) => (
            <div
              key={i}
              className="relative mb-4 h-[148px] w-[265px] cursor-pointer overflow-hidden rounded-md bg-white/[0.05] lg:h-[102px] lg:w-[185px]"
            >
              <img
                className="absolute object-cover"
                src={img.image}
                alt={img.image}
              />
            </div>
          ))}
        </div>
      </div>
      {/* edit button and last updated time */}
      <div>
        <button className="mt-4 inline-flex w-full shrink-0 items-center justify-center rounded-md bg-white p-[15px] text-black ">
          <span className="mr-2 text-xl">
            <FaRegEdit />
          </span>
          Edit the game info
        </button>
        <p className="mb-4 mt-2 text-center text-sm text-white/40 lg:mb-0">
          Last modified: {format(new Date(updated), "MMM d, yyyy")}
        </p>
      </div>
      {/* ratings */}
      <div className="mt-2 flex w-full shrink-0 flex-col items-center justify-center">
        <div className="mb-1.5 flex h-6 pb-2 text-xl font-bold tracking-wider lg:text-2xl">
          {firstCap(icon)}
          <img
            className="ml-2 h-6 w-6 lg:h-8 lg:w-8"
            src={`/${icon}.png`}
            alt={icon}
          />
        </div>
        <a className="text-center text-xs uppercase tracking-[3px] text-white/40 underline">
          {reviews_count} ratings
        </a>
      </div>
      {/* review btn with count and comment btn */}

      {/* about */}

      {/* main details (flex wrap)*/}
      {/* platforms list with link, genres, release date, dev, publisher, age rating = esrb rating */}

      {/* get game in the series */}

      {/* tags */}

      {/* system requirement */}

      {/* stores list */}

      {/* list creators */}
      <div className=""></div>
    </div>
  );
}

export default GameDetails;
