import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../../services/apiGames";

export function useGameDetails() {
  const { name } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`${name}`, "game"],
    queryFn: () => getGameDetails(name!),
  });

  return { data, isLoading };
}
