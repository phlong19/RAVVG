import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGameList } from "../../services/apiGames";
import { useSearchParams } from "react-router-dom";
import { ITEM_PER_PAGE } from "../../utils/variables";
import { Order } from "../../utils/model";

export function useGamesList(slug: string | null, order: Order) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  // const order=searchParams.get('')

  const { data: { results, count } = {}, isLoading } = useQuery({
    queryKey: ["games", slug, page, order],
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

  return { results, count, isLoading };
}
