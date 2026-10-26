// import { useState } from "react";
import { useMovies } from "../hooks/useMovies";

function AdsPage() {
  const { data, isLoading } = useMovies({
    search: "Batman",
    type: "movie",
  });

  const movies = data?.Search || [];

  if (isLoading) return <p>Loading ads...</p>;

  if (!movies.length) return <p>No movies available.</p>;

  return (
    <div className="h-full w-full">
      <div className="grid h-full grid-cols-2 md:grid-cols-4 movie-track gap-2">
        {[...movies, ...movies].map((movie, index) => (
          <div
            key={`${movie.imdbID}-${index}`}
            className="min-h-0 min-w-0 overflow-hidden  rounded-lg"
          >
            <div className="relative shrink-0">
              <img
                className="block h-full w-full object-cover transition-transform duration-300 ease-out
    hover:scale-110 hover:z-10"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdsPage;
