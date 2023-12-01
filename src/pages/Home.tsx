function Home() {
  return (
    <div className="text-white h-full bg-purple-700">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">New and trending</h1>
        <p className="mt-2 md:text-lg">Based on player counts and release date</p>
      </div>
      <div className="my-4">
        <p>sort & filter</p>
        <div>content</div>
      </div>
    </div>
  );
}

export default Home;
