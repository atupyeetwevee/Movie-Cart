import axios from "axios";

const api = await axios.create(
  {
    baseURL: "https://jsonplaceholder.typicode.com"
  }
);

export default api;