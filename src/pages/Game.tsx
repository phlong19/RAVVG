import { useParams } from "react-router-dom";

function Game() {
  const { id } = useParams();

  return <div>single game with {id}</div>;
}

export default Game;
