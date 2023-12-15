import GamesList from "../features/game/GamesList";
import { useGamesList } from "../features/game/useGamesList";
import ControlList from "../ui/ControlList";
import MainLayout from "../ui/MainLayout";
import SkeletonCardsLoading from "../ui/SkeletonCardsLoading";
import { firstCapMoveDash } from "../utils/helpers";

function Discover({ slug }: { slug: string }) {
  const title = firstCapMoveDash(slug);
  const { results, count, isLoading } = useGamesList(slug);

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
      <GamesList results={results!} count={count!} />
    </MainLayout>
  );
}

export default Discover;
