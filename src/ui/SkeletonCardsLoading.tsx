function SkeletonCardsLoading() {
  return (
    <div className="grid grid-cols-1 gap-x-2 overflow-hidden lg:grid-cols-4 lg:gap-x-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="skeleton mb-10 h-[250px] rounded-md bg-[rgb(32,32,32)] px-6 py-8"
        ></div>
      ))}
    </div>
  );
}

export default SkeletonCardsLoading;
