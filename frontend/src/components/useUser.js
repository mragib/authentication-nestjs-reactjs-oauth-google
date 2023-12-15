import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser as getUserApi } from "../services/apiUser";

export function useUser() {
  const {
    data: user,
    isLoading: isGetingUser,
    error,
  } = useQuery({
    queryFn: getUserApi,
    queryKey: ["user"],
  });

  return { user, isGetingUser, error };
}
