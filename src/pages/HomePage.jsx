import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useCurrentYearMovies } from "../hooks/useCurrentYearMovies";

function HomePage() {
  // const navigate = useNavigate();

  const { search, profileMenu, showDetails, setShowDetails, setSelectedMovie } =
    useOutletContext();

  const [popular] = useState("secret");
  const [recommended] = useState("love");

  const { data: popularMovies, isLoading: isLoadingPopularMovies } =
    useCurrentYearMovies({
      search: search || popular,
    });

  const { data: recommendedMovies, isLoading: isLoadingRecommendedMovies } =
    useMovies({ search: search || recommended });

  const isLoading = isLoadingPopularMovies || isLoadingRecommendedMovies;

  const handleViewMovie = (id) => {
    // navigate(`/movie/${id}`);
    setSelectedMovie(id);
    setShowDetails(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="">
        <h1>Trending</h1>

        <div
          className={`grid ${showDetails ? "grid-cols-4 gap-1" : profileMenu ? "grid-cols-5 gap-1" : "grid-cols-7 gap-3"}`}
        >
          {(popularMovies?.Search || []).length === 0 ? (
            <p>No movies found for this search in the current year.</p>
          ) : (
            (popularMovies?.Search || []).map((movie) => (
              <div
                key={movie.imdbID}
                onClick={() => handleViewMovie(movie.imdbID)}
                title={`${movie.Title} - ${movie.Year}`}
                className="flex flex-col gap-2 px-2 pt-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
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
            ))
          )}
        </div>
      </div>

      <div className="pt-20">
        <h1>Recommended for you</h1>

        <div
          className={`grid px-4 ${showDetails ? "grid-cols-4 gap-1" : profileMenu ? "grid-cols-5 gap-1" : "grid-cols-7 gap-3"}`}
        >
          {(recommendedMovies?.Search || []).map((movie) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
