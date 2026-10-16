import { useParams } from "react-router-dom"
import { useMovieDetails } from "../hooks/useMovieDetails"


const MovieDetailsPage = () => {
const {id} = useParams()

  const {data:movie, isLoading} = useMovieDetails(id)


  return (
    <div>MovieDetailsPage</div>
  )
}

export default MovieDetailsPage