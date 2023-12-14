import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../../services/apiCategories";

export function useCategories(type: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories", type],
    queryFn: () => getCategory(type),
  });

  return { data, isLoading };
}
