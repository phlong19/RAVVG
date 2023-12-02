import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGameList } from "../../services/api";

export function useGameList() {
  const { slug } = useParams();

  const { data: games, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: () => getGameList(slug),
  });

  return { games, isLoading };
}
