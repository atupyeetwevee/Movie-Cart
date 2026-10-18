import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useSeries } from "../hooks/useSeries";

function SeriesPage() {
  const navigate = useNavigate();

  const { search } = useOutletContext();

  const [popular] = useState("summer");

  const { data: popularSeries, isLoading } = useSeries({search: search || popular});

  const handleViewMovie = (id) => {
    navigate(`/series/${id}`);
  };

  if (isLoading){
    return <p>Loading Series...</p>
  }

  return (
    <div className="py-4">
        <h1>Popular Series</h1>

      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-10 pt-4">
        {(popularSeries?.Search || []).map((series) => (
          <div key={series.imdbID}
            onClick={() => handleViewMovie(series.imdbID)} 
            className="flex flex-col gap-5 hover:border hover:border-gray-400 rounded-lg p-4">
                
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