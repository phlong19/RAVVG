import { useEffect, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useGamesByQuery } from "./useGamesByQuery";
import Spinner from "../../ui/Spinner";
import CardPlatforms from "../../ui/CardPlatforms";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { count, results, isLoading } = useGamesByQuery(debouncedSearch);

  // debounced to prevent race conditions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length > 3) {
        setDebouncedSearch(search);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <form className="group relative flex h-7 w-1/2 items-center rounded-full bg-white/10 text-white md:h-11 md:w-[60%]">
      <div className="absolute pl-2 text-inherit duration-500 group-focus-within:text-black group-hover:text-black md:pl-4 md:text-xl">
        <HiMiniMagnifyingGlass />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for games..."
        className="peer h-full w-full rounded-full bg-inherit pl-9 pr-2 italic text-opacity-60 outline-none duration-500 hover:bg-white hover:text-black focus:bg-white focus:text-black md:pl-12"
      />
      {(isLoading || results) && (
        <div
          className={`${
            isLoading ? "h-56" : "h-auto"
          } invisible absolute right-12 top-10 z-50 mr-[-90px] w-[170%] overflow-y-auto rounded-lg bg-stone-800 peer-focus:visible sm:right-0 sm:mr-0 sm:w-full md:top-14`}
        >
          {isLoading && (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          )}
          {results && count && (
            <div className="flex flex-col gap-2 px-5 py-3.5">
              {/* count */}
              <div className="flex items-center justify-start text-sm md:text-base">
                Number of results
                <span className="ml-1 font-bold">{count}</span>
                <span className="lg:mt-[1px]">
                  <FaAngleRight />
                </span>
              </div>
              {/* list */}
              {results.map((el) => (
                <Link
                  to={`/game/${el.slug}`}
                  key={el.id}
                  className="hover:opacity-85 flex w-full gap-3 px-1.5 py-0.5 hover:text-white/60 hover:duration-200"
                >
                  <div className="h-[40px] w-12 rounded sm:w-14 md:w-16">
                    {el.background_image ? (
                      <img
                        src={el.background_image}
                        alt={el.slug}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="rounded border border-white text-sm md:text-base">
                        🖼 No image
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <CardPlatforms game={el} meta="no" />

                    <div className="text-xs font-bold md:text-base">
                      {el.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </form>
  );
}

export default SearchBox;
