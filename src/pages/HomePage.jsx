import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useCurrentYearMovies } from "../hooks/useCurrentYearMovies";

function HomePage() {
  const navigate = useNavigate();

  const { search } = useOutletContext();

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
    navigate(`/movie/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="">
        <h1>Trending</h1>

        <div className="grid md:grid-cols-3 gap-5 pt-4">
          {(popularMovies?.Search || []).length === 0 ? (
            <p>No movies found for this search in the current year.</p>
          ) : (
            (popularMovies?.Search || []).map((movie) => (
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
            ))
          )}
        </div>
      </div>

      <div className="pt-8">
        <h1>Recommended for you</h1>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-4">
          {(recommendedMovies?.Search || []).map((movie) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
