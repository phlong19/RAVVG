import { Link } from "react-router-dom";
import SkeletonCardsLoading from "../../ui/SkeletonCardsLoading";
import { firstCap, numberWithCommas } from "../../utils/helpers";
import { useCategories } from "./useCategories";
import { FaAngleRight } from "react-icons/fa";
import CardItemsList from "../../ui/CardItemsList";
import toast from "react-hot-toast";

interface Props {
  type:
    | "creators"
    | "developers"
    | "genres"
    | "platforms"
    | "publishers"
    | "tags"
    | "stores";
}

function CategoriesRow({ type }: Props) {
  const { count, results, isLoading } = useCategories(type);

  if (isLoading) {
    return (
      <div className="mb-10 overflow-hidden">
        <Link to={`/${type}`} className="mb-4 flex items-center text-lg">
          <h2 className="mr-2 font-bold underline underline-offset-4">
            {firstCap(type)}
          </h2>
          <span className="font-normal text-white/40">...</span>
          <span className="opacity-70">
            <FaAngleRight />
          </span>
        </Link>

        <SkeletonCardsLoading />
      </div>
    );
  }

  return (
    <div className="mb-10 overflow-hidden">
      <Link to={`/${type}`} className="mb-4 flex items-center text-lg">
        <h2 className="mr-2 font-bold underline underline-offset-4">
          {firstCap(type)}
        </h2>
        <span className="font-normal text-white/40">
          {numberWithCommas(count!)}
        </span>
        <span className="opacity-70">
          <FaAngleRight />
        </span>
      </Link>
      {/* lg */}
      <div className="hidden gap-3 overflow-auto whitespace-nowrap pb-4 lg:grid lg:grid-cols-[1fr_1fr_1fr]">
        {results!.slice(0, 3).map((el, i) => (
          <div
            key={i}
            style={
              {
                "--image-cat": `url(${el.image_background})`,
              } as React.CSSProperties
            }
            className="card mr-2.5 bg-[image:linear-gradient(rgba(30,30,30,0.5),rgb(32,32,32)70%),var(--image-cat)] align-top"
          >
            <div className="flex flex-col items-center justify-center">
              <Link
                to={`/games/${type}/${el.slug}`}
                className="mb-4 font-bold underline underline-offset-[3px] text-2xl"
              >
                {el.name}
              </Link>
              <button
                onClick={() => toast.success("Just a button")}
                className="mb-6 rounded bg-white/25 px-9 py-2.5 text-base"
              >
                Follow
              </button>
            </div>
            <div>
              <CardItemsList list={el} title="Popular items" />
            </div>
          </div>
        ))}
      </div>
      {/* md, sm */}
      <div className="flex gap-3 overflow-auto whitespace-nowrap pb-4 lg:hidden">
        {results!.map((el, i) => (
          <div
            key={i}
            style={
              {
                "--image-cat": `url(${el.image_background})`,
              } as React.CSSProperties
            }
            className="card mr-2.5 overflow-visible bg-[image:linear-gradient(rgba(30,30,30,0.5),rgb(32,32,32)70%),var(--image-cat)] align-top"
          >
            <div className="flex flex-col items-center justify-center">
              <Link
                to={`/games/${type}/${el.slug}`}
                className="mb-4 font-bold underline underline-offset-[3px]"
              >
                {el.name}
              </Link>
              <button
                onClick={() => toast.success("Just a button")}
                className="mb-6 rounded bg-white/25 px-9 py-2.5 text-base"
              >
                Follow
              </button>
            </div>
            <div className="min-w-[216px]">
              <CardItemsList list={el} title="Popular items" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesRow;
