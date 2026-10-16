import { useQuery } from "@tanstack/react-query"
import { moviesDetails } from "../services/movies.service";

export const useMovieDetails = (imdbID) => {
    return useQuery({
        queryKey: ["moviesDetails", imdbID],
        queryFn: () => moviesDetails(imdbID),
        enabled: !!imdbID,
    });
};