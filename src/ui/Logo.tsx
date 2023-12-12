import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="min-w-fit">
      <h3 className="relative text-2xl font-extrabold tracking-[4px] text-white">
        RA<span className="tracking-tighter">VV</span>
        <span className="tracking-wider"> G</span>
      </h3>
    </Link>
  );
}

export default Logo;
