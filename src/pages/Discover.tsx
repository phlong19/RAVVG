import GamesList from "../features/game/GamesList";
import { useGamesList } from "../features/game/useGamesList";
import ControlList from "../ui/ControlList";
import EmptyPage from "../ui/EmptyPage";
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

  if (!results?.length) return <EmptyPage />;

  return (
    <MainLayout title={title}>
      <ControlList control="discover" />
      <GamesList results={results!} count={count!} />
    </MainLayout>
  );
}

export default Discover;
