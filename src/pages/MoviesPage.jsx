import { useSearchMovies } from "../hooks/useMovies";

function MoviesPage() {
    const {
    data,
    isLoading,
    isError,
    error,
  } = useSearchMovies();

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(data);

  return (
    <div>
      <h1>Popular Movies</h1>

      {data?.Search?.map((movie) => (
        <div>
            <p key={movie.imdbID}>
                {movie.Title}
            </p>

            <img
                src={movie.Poster}
                alt={movie.Title}
            />
        </div>
      ))}
    </div>
  )
}

export default MoviesPage;