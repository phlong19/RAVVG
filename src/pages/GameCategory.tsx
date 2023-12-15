import { useParams } from "react-router-dom";
import MainLayout from "../ui/MainLayout";
import ControlList from "../ui/ControlList";
import GamesList from "../features/game/GamesList";
import { firstCap } from "../utils/helpers";
import SkeletonCardsLoading from "../ui/SkeletonCardsLoading";
import { useCategory } from "../features/category/useCategory";
import EmptyPage from "../ui/EmptyPage";

function GameCategory() {
  const { category, slug } = useParams();
  const { dataDes, dataGames, isLoading } = useCategory(category!, slug!);

  if (isLoading) {
    return (
      <MainLayout title={firstCap(slug!) + " games"}>
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
        <SkeletonCardsLoading />
      </MainLayout>
    );
  }

  const { description } = dataDes!;
  const { results, count } = dataGames!;

  if (!results!.length) return <EmptyPage />;

  return (
    <MainLayout
      title={firstCap(slug!) + " games"}
      description={description}
      desType="raw"
    >
      <ControlList />
      <GamesList results={results!} count={count!} />
    </MainLayout>
  );
}

export default GameCategory;
