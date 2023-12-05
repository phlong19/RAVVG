import GamesList from "../features/game/GamesList";
import ControlList from "../ui/ControlList";
import MainLayout from "../ui/MainLayout";
import { firstCapMoveDash } from "../utils/helpers";

function Discover({ slug }: { slug: string }) {
  const title = firstCapMoveDash(slug);

  return (
    <MainLayout title={title}>
      <ControlList />
      <GamesList />
    </MainLayout>
  );
}

export default Discover;
