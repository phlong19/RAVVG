import { HiBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { useMenu } from "../context/MenuContext";

function Header() {
  const { open } = useMenu();

  return (
    <header className="flex items-center justify-between px-5 py-4 lg:col-span-2 lg:py-8 lg:px-10">
      <Logo />
      <SearchBox />

      <nav className="hidden lg:flex lg:gap-3 lg:items-center">
        <p>login</p>
        <p>sign up</p>
        <p>API</p>
      </nav>

      <button
        aria-label="toggle-menu"
        onClick={open}
        className="text-3xl text-white lg:hidden"
      >
        <HiBars3 />
      </button>
    </header>
  );
}

export default Header;
