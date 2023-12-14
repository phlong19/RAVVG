import { Link } from "react-router-dom";
import SkeletonCardsLoading from "../../ui/SkeletonCardsLoading";
import { useCategories } from "../categories/useCategories";
import toast from "react-hot-toast";
import CardItemsList from "../../ui/CardItemsList";

function CategoryList({ type }: { type: string }) {
  const { results, isLoading } = useCategories(type, 20);

  if (isLoading) {
    return (
      <div className="mt-8">
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
      </div>
    );
  }

  return (
    <div className="mb-10 flex w-full flex-col items-center gap-2.5 px-2.5 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-3 2xl:grid-cols-4">
      {results!.map((el, i) => (
        <div
          key={i}
          style={
            {
              "--image-cat": `url(${el.image_background})`,
            } as React.CSSProperties
          }
          className="relative box-border flex w-full max-w-[calc(100vw-20px)] flex-col justify-between overflow-hidden rounded-md bg-[rgb(32,32,32)] bg-[image:linear-gradient(rgba(32,32,32,0.5),rgb(32,32,32)70%),var(--image-cat)] bg-cover bg-[50%] bg-no-repeat px-6 py-8 shadow-[0_10px_20px_0_rgba(0,0,0,0.2)]"
        >
          {/* first part */}
          <div className="flex-[1_1_auto]">
            <div className="mb-4 text-center text-lg font-bold">
              <Link
                to={`/games/${type}/${el.slug}`}
                className="border-b border-b-white/70"
              >
                {el.name}
              </Link>
            </div>
            <div className="mb-6 flex items-center justify-center">
              <button
                onClick={() => toast.success("Just a button")}
                className="h-auto w-auto rounded bg-[hsl(0,0%,100%,0.1)] px-9 py-2.5 text-base font-normal text-white"
              >
                Follow
              </button>
            </div>
          </div>
          {/* list */}
          <div className="w-full">
            <CardItemsList list={el} title="Popular items" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
