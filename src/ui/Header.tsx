import { useMenu } from "../context/MenuContext";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaProjectDiagram, FaSignInAlt, FaUserPlus } from "react-icons/fa";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Button from "./Button";
import { apiURL } from "../utils/variables";
import ButtonMini from "./ButtonMini";

function Header() {
  const { open } = useMenu();

  return (
    <header className="flex items-center justify-between px-5 py-4  lg:px-10 lg:py-8">
      <Logo />
      <SearchBox />

      <nav className="hidden items-center gap-3 lg:flex">
        <div className="w-fit">
          <Link to="login">
            <span className="hidden xl:block">
              <Button icon={<FaSignInAlt />}>Login</Button>
            </span>
            <ButtonMini>Login</ButtonMini>
          </Link>
        </div>
        <div className="w-fit">
          <Link to="signup">
            <span className="hidden xl:block">
              <Button icon={<FaUserPlus />}>Sign up</Button>
            </span>
            <ButtonMini>Sign up</ButtonMini>
          </Link>
        </div>
        <div className="w-fit">
          <Link to={apiURL}>
            <span className="hidden xl:block">
              <Button icon={<FaProjectDiagram />}>API</Button>
            </span>
            <ButtonMini>API</ButtonMini>
          </Link>
        </div>
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
