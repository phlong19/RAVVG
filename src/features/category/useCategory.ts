import { useQuery } from "@tanstack/react-query";
import { getGamesByCategory } from "../../services/apiCategories";

export function useCategory(category: string, slug: string) {
  const { data: { dataDes, dataGames } = {}, isLoading } = useQuery({
    queryKey: [category, slug],
    queryFn: () => getGamesByCategory(category, slug),
  });
  
  return { isLoading, dataDes, dataGames };
}
