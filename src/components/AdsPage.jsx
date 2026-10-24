import { useState } from "react";
import { useMovies } from "../hooks/useMovies";

function AdsPage() {
  const [popular] = useState("secret");

  const { data: popularMovies, isLoading } = useMovies({
    search: popular,
  });

  const movies = popularMovies?.Search || [];

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="h-full w-full">
      <div className="grid h-full grid-cols-2 md:grid-cols-4 gap-2">
        {movies.slice(0, 4).map((movie) => (
          <div
            key={movie.imdbID}
            className="min-h-0 min-w-0 overflow-hidden rounded-lg"
          >
            <img
              className="block h-full w-full object-cover"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdsPage;
