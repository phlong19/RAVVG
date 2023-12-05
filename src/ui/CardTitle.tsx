import { Link } from "react-router-dom";

interface Props {
  slug: string;
  name: string;
  icon: string;
}

function CardTitle({ slug, name, icon }: Props) {
  return (
    <Link to={`/games/${slug}`} className="duration-300 hover:text-white/40">
      <span className="text-2xl font-bold">
        {name}{" "}
        <img
          className="mb-1 inline-flex max-h-[24px] max-w-[27px]"
          src={`/${icon}.png`}
          title={icon}
        />
      </span>
    </Link>
  );
}

export default CardTitle;
