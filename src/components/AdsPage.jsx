import { useState, useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import { motion, AnimatePresence } from "framer-motion";

function AdsPage() {
  const { data, isLoading } = useMovies({
    search: "Batman",
    type: "movie",
  });

  const movies = data?.Search || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next movie every 4 seconds
  useEffect(() => {
    if (!movies.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies.length]);

  if (isLoading) return <p>Loading movies...</p>;

  if (!movies.length) return <p>No movies available.</p>;

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMovie.imdbID}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={currentMovie.Poster}
            alt={currentMovie.Title}
            className="h-auto w-full object-cover"
          />

          {/* Dark overlay for readable movie title */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/20" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="mb-2 text-sm text-amber-400">Featured Movie</p>

            <h2 className="text-2xl font-bold md:text-4xl">
              {currentMovie.Title}
            </h2>

            <p className="mt-2 text-sm text-gray-300">{currentMovie.Year}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Previous button */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + movies.length) % movies.length,
          )
        }
        aria-label="Previous movie"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-amber-600"
      >
        &#10094;
      </button>

      {/* Next button */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
        }
        aria-label="Next movie"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-amber-600"
      >
        &#10095;
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-3 right-30 z-10 flex gap-2">
        {movies.map((movie, index) => (
          <button
            key={movie.imdbID}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to ${movie.Title}`}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-amber-500" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AdsPage;
