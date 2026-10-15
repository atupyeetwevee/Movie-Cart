import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useSeries } from "../hooks/useSeries";

function SeriesPage() {
  const { search } = useOutletContext();
  const [popular] = useState("from");

  const {
    data: popularSeries,
    isLoading: isLoadingPopularSeries,
  } = useSeries({search: popular, type: "series"});

  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    isError,
  } = useSeries({search: search?.trim() || "", type: "series"});

  if (search?.trim()) {
    if (isLoadingSearch){
      return<p>Searching movies...</p>
    }

    if (isError){
      return<p>Failed to search movies. Please try again</p>
    }

    const seriesMovies = searchResults?.Search || [];

    return (
      <div>
        <h1 className="text-xl font-bold">
          Search results for "{search}"
        </h1>

        {seriesMovies.length === 0 ? (
          <p className="pt-4">No series found.</p>
        ) : (
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pt-4">
            {seriesMovies.map((series) => (
              <div
                key={series.imdbID}
                className="flex flex-col gap-3 rounded-lg p-4 hover:border hover:border-gray-400"
              >
                <img
                  className="h-60 w-full object-cover"
                  src={series.Poster}
                  alt={series.Title}
                />
                <p>
                  {series.Title} - {series.Year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (isLoadingPopularSeries){
    return <p>Loading movies...</p>
  }
  return (
    <div className="py-4">
        <h1>Popular Series</h1>

        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 pt-4">
        {(popularSeries?.Search || []).map((series) => (
            <div key={series.imdbID} className="flex flex-col gap-5 hover:border hover:border-gray-400 rounded-lg p-4">
                <p >
                    {series.Title}-{series.Year}
                </p>
                
                <img className="h-60 w-full"
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