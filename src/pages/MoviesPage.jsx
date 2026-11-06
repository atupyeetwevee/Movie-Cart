import { useMovies } from "../hooks/useMovies";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function MoviesPage() {
  // const navigate = useNavigate();

  const { search, profileMenu, showDetails, setShowDetails, setSelectedMovie } =
    useOutletContext();

  const [popular] = useState("fault");

  const { data: popularMovies, isLoading } = useMovies({
    search: search || popular,
  });

  const handleViewMovie = (id) => {
    // navigate(`/movie/${id}`);
    setSelectedMovie(id);
    setShowDetails(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-4">
      <h1>Popular Movies</h1>

      <div
        className={`grid pt-4 ${showDetails ? "grid-cols-4 gap-1" : profileMenu ? "grid-cols-5 gap-3" : "grid-cols-7 gap-1"}`}
      >
        {(popularMovies?.Search || []).map((movie) => (
          <>
            <div
              key={movie.imdbID}
              onClick={() => handleViewMovie(movie.imdbID)}
              title={`${movie.Title} - ${movie.Year}`}
              className="flex flex-col gap-3 px-2 pt-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <img
                className="object-cover h-full rounded-md border-2 border-white"
                src={movie.Poster}
                alt={movie.Title}
              />

              <p className="line-clamp-1 font-medium">
                {movie.Title}-{movie.Year}
              </p>
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
