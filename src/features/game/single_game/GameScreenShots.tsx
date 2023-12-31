import Carousel from "../../../ui/Carousel";
import Spinner from "../../../ui/Spinner";
import { useGameScreenshots } from "./useGameScreenshots";

function GameScreenShots() {
  const { screenshots, isLoading } = useGameScreenshots();

  if (isLoading) {
    return (
      <div className="flex min-h-[11rem] items-center justify-center lg:min-h-[600px]">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="hidden lg:block">
        <Carousel images={screenshots!.results} />
      </div>
      <div className="mb-6 box-border h-44 w-full overflow-x-auto lg:hidden lg:h-auto">
        <div className="flex w-fit flex-nowrap gap-4 lg:flex-wrap lg:justify-around">
          {screenshots!.results.map((img, i) => (
            <div
              key={i}
              className="relative mb-4 h-[148px] w-[265px] cursor-pointer overflow-hidden rounded-md bg-white/[0.05] lg:h-[125px] lg:w-[221px]"
            >
              <img
                loading="lazy"
                className="absolute object-cover"
                src={img.image}
                alt={img.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GameScreenShots;
