import { useQuery } from "@tanstack/react-query";
import { moviesApi } from "../services/movies.service";

export const useMovies = ({ search, type, year }) => {
  return useQuery({
    queryFn: () => moviesApi({ search, type, year }),
    queryKey: ["movies", search, type, year],
  });
};
