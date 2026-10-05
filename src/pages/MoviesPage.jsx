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
    <div className="py-4">
        <h1>Popular Movies</h1>

        <div className="grid grid-cols-4 gap-10 pt-8">
        {data?.Search?.map((movie) => (
            <div>
                <p key={movie.imdbID}>
                    {movie.Title}
                </p>

                <img className=""
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