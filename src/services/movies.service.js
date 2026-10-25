import api from "../lib/axios";

export const moviesApi = async ({ search, type, year }) => {
  const response = await api.get("/", {
    params: {
      s: search,
      type: type,
      y: year,
      plot: "full",
    },
  });

  return response.data;
};

export const moviesDetails = async (id) => {
  const response = await api.get("/", {
    params: {
      i: id,
    },
  });
  return response.data;
};

export const getCurrentYearMovies = async (search = "the") => {
  const currentYear = new Date().getFullYear();

  return moviesApi({
    search,
    type: "movie",
    year: currentYear,
  });
};
