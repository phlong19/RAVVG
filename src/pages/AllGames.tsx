import GamesList from "../features/game/GamesList";
import { useGamesList } from "../features/game/useGamesList";
import ControlList from "../ui/ControlList";
import MainLayout from "../ui/MainLayout";
import SkeletonCardsLoading from "../ui/SkeletonCardsLoading";

const title = "All Games";

function AllGames() {
  const { results, count, isLoading } = useGamesList();

  if (isLoading) {
    return (
      <MainLayout title={title}>
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
      </MainLayout>
    );
  }

  return (
    <MainLayout title={title}>
      <ControlList />
      <GamesList results={results!} count={count!} isLoading={isLoading} />
    </MainLayout>
  );
}

export default AllGames;
