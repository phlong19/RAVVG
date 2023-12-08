import { Link } from "react-router-dom";

function BreadCrumbs({ name }: { name: string }) {
  return (
    <div className="mb-4 mt-6 flex justify-center text-center uppercase tracking-[1.7px] duration-300 md:mb-8 lg:justify-normal">
      <ol>
        <li className="inline-block align-top text-[10px] leading-[18px] text-white/40">
          <Link className=" hover:text-white" to="/">
            home
          </Link>
          <span className="mx-1">/</span>
        </li>
        <li className="inline-block align-top text-[10px] leading-[18px] text-white/40">
          <Link className=" hover:text-white" to="games">
            games
          </Link>
          <span className="mx-1">/</span>
        </li>
        <li className="inline-block align-top text-[10px] leading-[18px] text-white/40">
          <span>{name}</span>
        </li>
      </ol>
    </div>
  );
}

export default BreadCrumbs;
