import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h3 className="relative text-lg font-extrabold tracking-[5px] text-white">
        RA<span className="tracking-tighter">VV</span>
        <span className="tracking-widest"> G</span>
      </h3>
    </Link>
  );
}

export default Logo;
