import { useParams } from "react-router-dom";

function GameCategory() {
  const { category } = useParams();

  return (
    <div>
      game base on category
      <p>{category}</p>
    </div>
  );
}

export default GameCategory;
