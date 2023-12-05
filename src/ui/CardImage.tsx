function CardImage({ background_image }: { background_image: string }) {
  return (
    <div className="w-full overflow-hidden rounded-t-xl">
      <div className="relative h-0 w-full overflow-hidden pb-[56.25%]">
        <img
          src={background_image}
          alt=""
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default CardImage;
