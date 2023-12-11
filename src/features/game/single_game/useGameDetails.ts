import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../../services/apiGames";

export function useGameDetails() {
  const { name } = useParams();
  const {
    data: { game, screenshots, gameSeries, gameDevTeam } = {},
    isLoading,
  } = useQuery({
    queryKey: [`single_game-${name}`],
    queryFn: () => getGameDetails(name!),
    retry: false,
  });

  return { game, screenshots, gameSeries, gameDevTeam, isLoading };
}
