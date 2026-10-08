import { useOutletContext } from "react-router-dom";
import { useSearchMovies } from "../hooks/useMovies";

function MoviesPage() {
  const { search } = useOutletContext();
  
  const {
    data,
    isLoading,
    isError,
    error,
  } = useSearchMovies(search);

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(data);

  return (
    <div className="py-4">
        <h1>Popular Movies</h1>

        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 pt-4">
        {data?.Search?.map((movie) => (
            <div key={movie.imdbID} className="flex flex-col gap-5 hover:border hover:border-gray-400 rounded-lg p-4">
                <p >
                    {movie.Title}-{movie.Year}
                </p>
                
                <img className="h-60 w-full object-cover"
                    src={movie.Poster}
                    alt={movie.Title}
                />
            </div>
      ))}
      </div>
    </div>
  )
}

export default MoviesPage;