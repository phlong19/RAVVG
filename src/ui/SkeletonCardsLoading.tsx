function SkeletonCardsLoading() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-5 overflow-hidden">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="skeleton h-[350px] min-w-[250px] rounded-md bg-[rgb(32,32,32)] px-6 py-8"
        ></div>
      ))}
    </div>
  );
}

export default SkeletonCardsLoading;
