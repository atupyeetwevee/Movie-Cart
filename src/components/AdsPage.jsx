// import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { motion } from "framer-motion";

function AdsPage() {
  const { data, isLoading } = useMovies({
    search: "Batman",
    type: "movie",
  });

  const movies = data?.Search || [];

  if (isLoading) return <p>Loading ads...</p>;

  if (!movies.length) return <p>No movies available.</p>;

  const repeatedMovies = [...movies, ...movies];

  return (
    <div className="h-full w-full">
      <div className="flex w-full h-full gap-2">
        {repeatedMovies.map((movie, index) => (
          <motion.div
            key={`${movie.imdbID}-${index}`}
            className="rounded-lg w-full bg-amber-600"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <img
              className=" h-full w-full object-cover"
              src={movie.Poster}
              alt={movie.Title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdsPage;
