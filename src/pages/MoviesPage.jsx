import { useMovies } from "../hooks/useMovies";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function MoviesPage() {
  const navigate = useNavigate();

  const { search } = useOutletContext();

  const [popular] = useState("fault");

  const { data: popularMovies, isLoading } = useMovies({
    search: search || popular,
  });

  const handleViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-4">
      <h1>Popular Movies</h1>

      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 pt-4">
        {(popularMovies?.Search || []).map((movie) => (
          <>
            <div
              key={movie.imdbID}
              onClick={() => handleViewMovie(movie.imdbID)}
              className="flex flex-col gap-5 hover:border hover:border-gray-400 rounded-lg p-4"
            >
              <p>
                {movie.Title}-{movie.Year}
              </p>

              <img
                className="h-60 w-full object-cover"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
            {/* <div className="">
              <LuBookmark />
            </div> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
