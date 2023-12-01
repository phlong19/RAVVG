import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBox() {
  return (
    <form className="flex h-7 w-1/2 items-center rounded-full bg-white bg-opacity-10 text-white sm:h-11 sm:w-[60%]">
      <div className="absolute pl-2 text-inherit sm:pl-4 sm:text-xl">
        <HiMiniMagnifyingGlass />
      </div>
      <input
        type="text"
        placeholder="Search for games..."
        className="h-full w-full rounded-full bg-inherit pl-9 pr-2 italic text-opacity-60 outline-none sm:pl-12"
      />
    </form>
  );
}

export default SearchBox;
