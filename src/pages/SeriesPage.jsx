import { useOutletContext } from "react-router-dom";
import { useSearchSeries } from "../hooks/useSeries";

function SeriesPage() {
  const { search } = useOutletContext();
  const {
    data,
    isLoading,
    isError,
    error,
  } = useSearchSeries(search);

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(data);

  return (
    <div className="py-4">
        <h1>Popular Series</h1>

        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 pt-4">
        {data?.Search?.map((series) => (
            <div key={series.imdbID} className="flex gap-5 hover:border hover:border-gray-400 rounded-lg p-4">
                <p >
                    {series.Title}-{series.Year}
                </p>
                
                <img className="h-50 w-30"
                    src={series.Poster}
                    alt={series.Title}
                />
            </div>
      ))}
      </div>
    </div>
  )
}

export default SeriesPage;