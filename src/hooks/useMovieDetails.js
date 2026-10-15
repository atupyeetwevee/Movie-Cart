import { useQuery } from "@tanstack/react-query"

export const useMovieDetails = (imdbID) => {
    return useQuery({
        queryKey: ["moviesDetails", imdbID],
        queryFn: () => getMovieDetails(imdbID),
        enabled: !!imdbID,
    });
};