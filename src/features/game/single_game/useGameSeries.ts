import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGameSeries } from "../../../services/apiGames";

export function useGameSeries() {
  const { name } = useParams();
  const { data: gameSeries, isLoading } = useQuery({
    queryKey: [`${name}`, "game-series"],
    queryFn: () => getGameSeries(name!),
  });

  return { gameSeries, isLoading };
}
