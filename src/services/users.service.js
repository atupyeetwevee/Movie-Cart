import api from "../lib/axios"

export const users = async () => {
    const response = await api.get("/users");
    return response.data
}