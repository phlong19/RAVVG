import { HiArrowLeftOnRectangle, HiUserPlus, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

function MenuButtons() {
  const { close } = useMenu();
  return (
    <div className="absolute right-6 flex flex-col items-center gap-y-4 space-y-5 text-center text-4xl">
      <button aria-label="close" onClick={close}>
        <HiXMark />
      </button>
      <Link to="/login" onClick={close}>
        <button aria-label="login">
          <HiArrowLeftOnRectangle />
        </button>
        <p className="text-center text-sm">Log in</p>
      </Link>
      <Link to="/signup" onClick={close}>
        <button aria-label="signup">
          <HiUserPlus />
        </button>
        <p className="text-center text-sm">Sign up</p>
      </Link>
    </div>
  );
}

export default MenuButtons;
