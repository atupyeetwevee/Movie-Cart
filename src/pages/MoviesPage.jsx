import { useMovies } from "../hooks/useMovies";
import { LuBookmark } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoviesPage() {
  const navigate = useNavigate();

  const [popular, setPopular] = useState("fault")

  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useMovies({ search: popular });

  const handleViewMovie = (id) => {
    navigate(`/movie/${id}`)
  }

    return (
      <div>
        <h1 className="text-xl font-bold">
          Search results for "{search}"
        </h1>

        {movies.length === 0 ? (
          <p className="pt-4">No movies found.</p>
        ) : (
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-4">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                onClick={handleViewMovie(movie.imdbID)}
                className="flex flex-col gap-3 rounded-lg p-4 hover:border hover:border-gray-400"
              >
                <img
                  className="h-60 w-full object-cover"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <p>
                  {movie.Title} - {movie.Year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

if(isLoading){
  return<p>Loading movies...</p>
}
  return (
    <div className="py-4">
      <h1>Popular Movies</h1>

      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 pt-4">
        {(popularMovies?.Search || []).map((movie) => (
          <>
            <div
              key={movie.imdbID}
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
