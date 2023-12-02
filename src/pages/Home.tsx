import GamesList from "../features/game/GamesList";
import ControlList from "../ui/ControlList";
import MainLayout from "../ui/MainLayout";

const title = "New and trending";
const description = "Based on player counts and release date";

function Home() {
  return (
    <MainLayout title={title} description={description}>
      <ControlList />
      <GamesList />
    </MainLayout>
  );
}

export default Home;
