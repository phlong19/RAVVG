function EmptyPage() {
  return (
    <div className="flex h-screen w-full items-start justify-center font-bold">
      <div className="mt-36">
        <span className="mb-4 flex items-center justify-center text-8xl">
          🤔
        </span>
        <h3 className="mt-5 text-3xl">No games found...</h3>
      </div>
    </div>
  );
}

export default EmptyPage;
