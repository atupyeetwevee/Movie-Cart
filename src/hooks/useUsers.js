import { users } from "../services/users.service";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
    return useQuery({
        queryFn: users,
        queryKey: ["users"]
    })
}