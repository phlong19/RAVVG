import GamesList from "../features/game/GamesList";
import ControlList from "../ui/ControlList";
import MainLayout from "../ui/MainLayout";

function AllGames() {
  return (
    <MainLayout title="All Games">
      <ControlList />
      <GamesList />
    </MainLayout>
  );
}

export default AllGames;
