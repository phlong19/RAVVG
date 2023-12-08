import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGameList } from "../../services/apiGames";
import { useSearchParams } from "react-router-dom";
import { ITEM_PER_PAGE } from "../../utils/variables";

type Slug = string | undefined;

export function useGamesList() {
  const queryClient = useQueryClient();

  // home = / => ['','']
  // all games = /games => ['','games']
  // discover = /discover/last-30-days => ['', 'discover', 'last-30-days']
  let slug: Slug = undefined;
  const pathname = window.location.pathname;

  if (pathname.includes("discover")) {
    slug = pathname.split("/").pop()!;
  }
  if (pathname === "/") slug = "home";

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    data: { results, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games", slug, page],
    queryFn: () => getGameList(slug, page),
  });

  // PRE - FETCH
  const totalPages = Math.ceil(count! / ITEM_PER_PAGE);
  // prev page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["games", slug, page - 1],
      queryFn: () => getGameList(slug, page - 1),
    });
  }
  // next page
  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["games", slug, page + 1],
      queryFn: () => getGameList(slug, page + 1),
    });
  }

  return { results, count, isLoading, error };
}
