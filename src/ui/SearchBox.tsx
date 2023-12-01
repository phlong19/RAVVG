import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBox() {
  return (
    <form className="text-white flex h-7 w-56 items-center bg-gray-600 rounded-full">
      <div className="absolute pl-2 text-inherit">
        <HiMiniMagnifyingGlass />
      </div>
      <input
        type="text"
        placeholder="Search for games..."
        className="rounded-full outline-none h-4/5 italic w-full bg-inherit pr-3 pl-9 text-opacity-60"
      />
    </form>
  );
}

export default SearchBox;
