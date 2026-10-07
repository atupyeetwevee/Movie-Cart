import api from "../lib/axios";

export const searchSeries = async (searchTerm) => {
    const response = await api.get("/",{
        params: {
            s: searchTerm,
            type: "series",
        }
    });
  return response.data
}
