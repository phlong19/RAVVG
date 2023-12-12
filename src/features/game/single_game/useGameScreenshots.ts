import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getScreenShots } from "../../../services/apiGames";

export function useGameScreenshots() {
  const { name } = useParams();
  const { data: screenshots, isLoading } = useQuery({
    queryKey: [`${name}`, "game-screenshots"],
    queryFn: () => getScreenShots(name!),
  });

  return { screenshots, isLoading };
}
