import GamesList from "../features/game/GamesList";
import { useGamesList } from "../features/game/useGamesList";
import ControlList from "../ui/ControlList";
import EmptyPage from "../ui/EmptyPage";
import MainLayout from "../ui/MainLayout";
import SkeletonCardsLoading from "../ui/SkeletonCardsLoading";
import { useSearchParams } from "react-router-dom";

function AllGames() {
  const { results, count, isLoading } = useGamesList(null);

  const [searchParams] = useSearchParams();

  document.title = searchParams.get("year")
    ? "Best games of " + searchParams.get("year")
    : "List of Video Games";
  const title = searchParams.get("year")
    ? "Best game of " + searchParams.get("year")
    : "All Games";

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

  if (!results?.length) return <EmptyPage />;

  return (
    <MainLayout title={title}>
      <ControlList control="games" />
      <GamesList results={results!} count={count!} />
    </MainLayout>
  );
}

export default AllGames;
