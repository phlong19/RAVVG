import { useQuery } from "@tanstack/react-query";
import { getGamesByCategory } from "../../services/apiCategories";
import { useSearchParams } from "react-router-dom";
import { Order } from "../../utils/model";

export function useCategory(category: string, slug: string) {
  const [searchParams] = useSearchParams();
  // order & filter
  const orderValue = searchParams.get("ordering") || "popular";
  const order = orderValue as Order;
  const year = searchParams.get("year") || "none";

  const { data: { dataDes, dataGames } = {}, isLoading } = useQuery({
    queryKey: [category, slug, order, year],
    queryFn: () => getGamesByCategory(category, slug, order, year),
  });

  return { isLoading, dataDes, dataGames };
}
