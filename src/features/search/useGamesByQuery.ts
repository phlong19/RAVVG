import { useQuery } from "@tanstack/react-query";
import { getGamesBySearch } from "../../services/apiGames";

export function useGamesByQuery(query: string) {
  const { data: { results, count } = {}, isLoading } = useQuery({
    queryKey: ["games-query", query],
    queryFn: () => getGamesBySearch(query),
    enabled: query.length > 3,
  });

  return { results, count, isLoading };
}
