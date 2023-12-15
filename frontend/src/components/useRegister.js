import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../services/apiUser";

export function useRegister() {
  const {
    mutate: signUp,
    isLoading: isSignup,
    error,
  } = useMutation({
    mutationFn: signupApi,
  });

  return { signUp, isSignup, error };
}
