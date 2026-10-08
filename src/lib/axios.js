import axios from "axios";

const api = axios.create(
  {
    baseURL: "https://www.omdbapi.com/",
    params: {
      apikey: import.meta.env.VITE_API_KEY,
    },
    headers: {
      accept: "application/json",
    },
  }
);

export default api;