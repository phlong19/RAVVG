import { useQuery } from "@tanstack/react-query";
import { getGameList } from "../../services/apiGames";

type Slug = string | undefined;

export function useGamesList() {
  // home = / => ['','']
  // all games = /games => ['','games']
  // discover = /discover/last-30-days => ['', 'discover', 'last-30-days']

  let slug: Slug = undefined;
  const pathname = window.location.pathname;

  if (pathname.includes("discover")) {
    slug = pathname.split("/").pop()!;
  }
  if (pathname === "/") slug = "home";

  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: () => getGameList(slug),
    retry: false,
  });

  return { games, isLoading, error };
}
