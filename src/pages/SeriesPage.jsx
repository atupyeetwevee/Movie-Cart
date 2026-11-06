import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useSeries } from "../hooks/useSeries";

function SeriesPage() {
  // const navigate = useNavigate();

  const { search, profileMenu, showDetails, setShowDetails, setSelectedMovie } =
    useOutletContext();

  const [popular] = useState("summer");

  const { data: popularSeries, isLoading } = useSeries({
    search: search || popular,
  });

  const handleViewMovie = (id) => {
    // navigate(`/series/${id}`);
    setSelectedMovie(id);
    setShowDetails(true);
  };

  if (isLoading) {
    return <p>Loading Series...</p>;
  }

  return (
    <div className="border border-gray-600 rounded-2xl">
      <h1>Popular Series</h1>

      <div
        className={`grid ${showDetails ? "grid-cols-4 gap-1" : profileMenu ? "grid-cols-5 gap-1" : "grid-cols-7 gap-3"}`}
      >
        {(popularSeries?.Search || []).map((series) => (
          <div
            key={series.imdbID}
            onClick={() => handleViewMovie(series.imdbID)}
            title={`${series.Title} - ${series.Year}`}
            className="relative flex flex-col gap-3 px-2 pt-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <img
              className="object-cover h-full rounded-md border-2 border-white"
              src={series.Poster}
              alt={series.Title}
            />

            <p className="line-clamp-1 font-medium">
              {series.Title}-{series.Year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeriesPage;
