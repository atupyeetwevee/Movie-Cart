import { useQuery } from "@tanstack/react-query";
import { getCurrentYearMovies } from "../services/movies.service";

export const useCurrentYearMovies = () => {
  return useQuery({
    queryKey: ["currentYearMovies", new Date().getFullYear()],
    queryFn: () => getCurrentYearMovies("the"),
    staleTime: 1000 * 60 * 60,
    refetchInterval: 1000 * 60 * 60,
  });
};
