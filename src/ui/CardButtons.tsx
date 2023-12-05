import { FaPlus } from "react-icons/fa";
import { numberWithCommas } from "../utils/helpers";
import { HiMiniEllipsisHorizontal, HiOutlineGift } from "react-icons/hi2";

interface Props {
  added: number;
  added_by_status: {
    playing: number;
    yet: number;
  };
}

function CardButtons({ added_by_status, added }: Props) {
  return (
    <div className="flex">
      <button className="game-info-btn">
        <span className="min-h-3 min-w-3 mr-[6px] text-sm">
          <FaPlus />
        </span>
        <span>
          {added_by_status?.playing
            ? numberWithCommas(added - added_by_status.playing)
            : numberWithCommas(added - (added_by_status.yet + 1))}
        </span>
      </button>
      <button
        title="Giveaway"
        className="game-info-btn invisible group-hover/item:visible"
      >
        <span className="min-h-3 min-w-3 self-center px-0.5 text-lg">
          <HiOutlineGift />
        </span>
      </button>
      <button
        title="More"
        className="game-info-btn invisible group-hover/item:visible"
      >
        <span className="min-h-3 min-w-3 self-center px-0.5 text-2xl font-bold">
          <HiMiniEllipsisHorizontal />
        </span>
      </button>
    </div>
  );
}

export default CardButtons;
