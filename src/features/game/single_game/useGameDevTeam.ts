import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDevTeam } from "../../../services/apiGames";

export function useGameDevTeam() {
  const { name } = useParams();
  const { data: gameDevTeam, isLoading } = useQuery({
    queryKey: [`${name}`, "game-devs"],
    queryFn: () => getDevTeam(name!),
  });

  return { gameDevTeam, isLoading };
}
