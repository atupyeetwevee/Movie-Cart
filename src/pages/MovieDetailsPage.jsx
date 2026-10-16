import { useParams } from "react-router-dom"
import { useMovieDetails } from "../hooks/useMovieDetails"


const MovieDetailsPage = () => {
  const {id} = useParams()

  const {data:movie, isLoading} = useMovieDetails(id)

  if (isLoading) {
  return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex gap-5 bg-amber-300">
        <div className="w-1/4 bg-red-200"><img /></div>
        <div className="w-3/4 flex flex-col bg-green-300">
          <h1 className="text-center">MOVIE TITLE</h1>
          <ul className="flex justify-evenly">
            <li>time</li>
            <li>year</li>
            <li>rate</li>
            <li>logo</li>
          </ul>
          <p className="text-center">PLOT</p>
          <div>
            <h2>GENRE</h2>
            <ul className="flex justify-evenly">
              <li>Drama</li>
              <li>Romance</li>
            </ul>
          </div>
          <div>
            <h2>CAST</h2>
            <ul>
              <li>John Doe</li>
              <li>Maggie Max</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetailsPage