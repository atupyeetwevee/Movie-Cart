import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { useOutletContext } from "react-router-dom";

function HomePage() {
  const { search } = useOutletContext();

  const currentYear = new Date().getFullYear
  const [popular] = useState("spider");

  const [recommended] = useState("love");

  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useMovies({
    search: popular, type: "movies", year: currentYear,
  });

  const { data: recommendedMovies, isLoading: isLoadingRecommendedMovies } =
    useMovies({ search: recommended });

  const { data: searchResults, isLoading: isLoadingSearch, isError} 
  = useMovies({ search: search?.trim() || ""});

  if (search?.trim()){
    if (isLoadingSearch){
      return <p>Searching movies...</p>
    }

    if (isError){
      return<p>Failed to search movies. Please try again.</p>
    }

    const movies = searchResults?.Search || [];
    
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

  if (isLoadingPopularMovies || isLoadingRecommendedMovies){
    return <p>Loading movies...</p>
  }
  return (
    <>
      <div className="">
        <h1>Trending</h1>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-4">
          {(popularMovies?.Search || []).map((movie) => (
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
          ))}
        </div>
      </div>

      <div className="pt-8">
        <h1>Recommended for you</h1>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-4">
          {(recommendedMovies?.Search || []).map((movie) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
