import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movies.service";

export const useSearchMovies = () => {
  return useQuery({
    queryKey: ["searchTerm"],
    queryFn: () => searchMovies("Batman"),
  });
};