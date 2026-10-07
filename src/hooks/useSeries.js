import { useQuery } from "@tanstack/react-query";
import { searchSeries } from "../services/series.services";

export const useSearchSeries = (searchTerm) => {
  return useQuery({
    queryKey: ["searchTerm", searchTerm],
    queryFn: () => searchSeries(searchTerm),
    enabled: !!searchTerm,
  });
};