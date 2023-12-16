import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGameList } from "../../services/apiGames";
import { useSearchParams } from "react-router-dom";
import { ITEM_PER_PAGE } from "../../utils/variables";
import { Order } from "../../utils/model";

export function useGamesList(slug: string | null) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // pagination
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  // order
  const order = searchParams.get("ordering") || "popular";
  const validatedOrder = order as Order; // type assertion

  // filter
  const year = searchParams.get("year") || "none";

  // query
  const { data: { results, count } = {}, isLoading } = useQuery({
    queryKey: ["games", slug, page, order, year],
    queryFn: () => getGameList(slug, page, validatedOrder, year),
  });

  // PRE - FETCH
  const totalPages = Math.ceil(count! / ITEM_PER_PAGE);
  // prev page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["games", slug, page - 1, validatedOrder, year],
      queryFn: () => getGameList(slug, page - 1, validatedOrder, year),
    });
  }
  // next page
  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["games", slug, page + 1, validatedOrder, year],
      queryFn: () => getGameList(slug, page + 1, validatedOrder, year),
    });
  }

  return { results, count, isLoading };
}
