import { HiBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { useMenu } from "../context/MenuContext";

function Header() {
  const { open } = useMenu();

  return (
    <header className="flex items-center justify-between px-5 py-3.5 md:col-span-2 md:px-6 md:py-10">
      <Logo />
      <SearchBox />

      <button
        aria-label="toggle-menu"
        onClick={open}
        className="text-3xl text-white"
      >
        <HiBars3 />
      </button>
    </header>
  );
}

export default Header;
