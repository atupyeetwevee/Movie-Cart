import api from "../lib/axios";

export const moviesApi = async ({ search, type, year }) => {
  const response = await api.get("/", {
    params: {
      s: search,
      type: type,
      year: year,
      i: imdbID,
      plot: "full",
    },
  });

  return response.data;
};

