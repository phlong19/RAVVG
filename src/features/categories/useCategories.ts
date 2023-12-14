import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apiCategories";

export function useCategories(type: string, size = 8) {
  const { data: { count, results } = {}, isLoading } = useQuery({
    queryKey: ["categories", type, size],
    queryFn: () => getCategory(type, size),
  });

  return { count, results, isLoading };
}
