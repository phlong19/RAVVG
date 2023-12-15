import { FaPlus } from "react-icons/fa";
import { numberWithCommas } from "../utils/helpers";
import { HiMiniEllipsisHorizontal, HiOutlineGift } from "react-icons/hi2";
import toast from "react-hot-toast";

interface Props {
  added: number;
  added_by_status: {
    toplay: number;
  };
}

function CardButtons({ added_by_status, added }: Props) {
  return (
    <div className="flex">
      <button
        className="game-info-btn"
        onClick={() => toast.success("Added to your games list")}
      >
        <span className="mr-[6px] text-sm">
          <FaPlus />
        </span>
        {added_by_status?.toplay && (
          <span className="mr-2">
            {numberWithCommas(added - added_by_status.toplay)}
          </span>
        )}
      </button>
      <button
        onClick={() => toast.success("Give this game to your friend")}
        title="Giveaway"
        className="game-info-btn invisible pr-2 group-hover/item:visible"
      >
        <span className="self-center px-0.5 text-lg">
          <HiOutlineGift />
        </span>
      </button>
      <button
        onClick={() => toast.error("Nothing more to know")}
        title="More"
        className="game-info-btn invisible pr-2 group-hover/item:visible"
      >
        <span className="self-center px-0.5 text-2xl font-bold">
          <HiMiniEllipsisHorizontal />
        </span>
      </button>
    </div>
  );
}

export default CardButtons;
