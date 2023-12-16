import { useEffect } from "react";
import GamesList from "../features/game/GamesList";
import { useGamesList } from "../features/game/useGamesList";
import ControlList from "../ui/ControlList";
import MainLayout from "../ui/MainLayout";
import SkeletonCardsLoading from "../ui/SkeletonCardsLoading";

const title = "New and trending";
const description = "Based on player counts and release date";

function Home() {
  const { results, count, isLoading } = useGamesList("home");

  useEffect(() => {
    document.title =
      "Brother of RAWG - The Biggest Video Game Discovery Services";
  }, []);

  if (isLoading) {
    return (
      <MainLayout title={title} description={description}>
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
      </MainLayout>
    );
  }

  return (
    <MainLayout title={title} description={description}>
      <ControlList control="home" />
      <GamesList results={results!} count={count!} />
    </MainLayout>
  );
}

export default Home;
