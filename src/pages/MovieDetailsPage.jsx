import { useParams } from "react-router-dom"
import { useMovieDetails } from "../hooks/useMovieDetails"


const MovieDetailsPage = () => {
  const {id} = useParams()

  const {data:movie, isLoading} = useMovieDetails(id)
  console.log("Movie data:", movie);

  if (isLoading) {
  return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex gap-15 px-4 py-4">
        <div className="w-1/4"><img src={movie?.Poster} alt={movie?.Title} /></div>
        <div className="w-3/4 flex flex-col gap-8">
          <h1 className="md:text-4xl">{movie?.Title}</h1>
          <ul className="flex gap-8 md:text-2xl">
            <li>{movie?.Year}</li>
            <li>{movie?.imdbRating}</li>
            <li>{movie?.Runtime}</li>
            <li>{movie?.Website}</li>
          </ul>
          
          <div>
            <h2 className="md:text-3xl">ABOUT</h2>
            <p className="">{movie?.Plot}</p>
          </div>

          <div>
            <h2 className="md:text-3xl">GENRE</h2>
            <p >{movie?.Genre}</p>
          </div>
          <div>
            <h2 className="md:text-3xl">CAST</h2>
            <p>{movie?.Actors}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetailsPage