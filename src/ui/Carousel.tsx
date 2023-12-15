import { useCallback, useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Screenshot } from "../utils/model";

interface Props {
  images: Screenshot[];
}

function Carousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  const next = useCallback(() => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-2xl xl:m-auto xl:mb-3 xl:w-[90%]">
      <div
        className={`duration-40 flex transition ease-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img) => (
          <img key={img.id} src={img.image} alt={img.image} loading="lazy" />
        ))}
      </div>
      <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl text-white">
        <button title="previous" onClick={previous}>
          <FaRegArrowAltCircleLeft />
        </button>
        <button title="next" onClick={next}>
          <FaRegArrowAltCircleRight />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {images.map((_, i) => {
          return (
            <div
              onClick={() => setCurrent(i)}
              key={i}
              className={`h-5 w-5 cursor-pointer rounded-full  ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
