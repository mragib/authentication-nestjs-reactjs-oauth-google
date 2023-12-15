import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiUser";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      navigate("/", { replace: true });
    },
  });

  return { login, isLoading };
}
