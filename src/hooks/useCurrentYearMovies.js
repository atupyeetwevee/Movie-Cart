import { useQuery } from "@tanstack/react-query";
import { moviesApi } from "../services/movies.service";

export const useCurrentYearMovies = ({ search }) => {
  const currentYear = new Date().getFullYear();

  return useQuery({
    queryKey: ["currentYearMovies", search, currentYear],
    queryFn: () =>
      moviesApi({
        search,
        type: "movie",
        year: currentYear,
      }),
    staleTime: 1000 * 60 * 60,
    refetchInterval: 1000 * 60 * 60,
  });
};
