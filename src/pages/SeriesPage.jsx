import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useSeries } from "../hooks/useSeries";

function SeriesPage() {
  const navigate = useNavigate();

  const { search, profileMenu } = useOutletContext();

  const [popular] = useState("summer");

  const { data: popularSeries, isLoading } = useSeries({
    search: search || popular,
  });

  const handleViewMovie = (id) => {
    navigate(`/series/${id}`);
  };

  if (isLoading) {
    return <p>Loading Series...</p>;
  }

  return (
    <div className="py-4">
      <h1>Popular Series</h1>

      <div
        className={`grid pt-4 px-4 ${profileMenu ? "grid-cols-6 gap-1" : "grid-cols-7 gap-3"}`}
      >
        {(popularSeries?.Search || []).map((series) => (
          <div
            key={series.imdbID}
            onClick={() => handleViewMovie(series.imdbID)}
            className="relative group flex flex-col gap-3 px-2 pt-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <img
              className="object-cover h-full rounded-md border-2 border-white"
              src={series.Poster}
              alt={series.Title}
            />

            <div
              className="absolute inset-0 flex items-end
  bg-gradient-to-t from-black via-black/30 to-transparent
  opacity-0 group-hover:opacity-100
  transition-opacity duration-300 p-3"
            >
              <p className="line-clamp-1 font-medium">
                {series.Title}-{series.Year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeriesPage;
