import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movies.service";

export const useSearchMovies = (searchTerm) => {
  return useQuery({
    queryKey: ["searchTerm", searchTerm],
    queryFn: () => searchMovies("Kissing Booth"),
    enabled: !!searchTerm,
  });
};