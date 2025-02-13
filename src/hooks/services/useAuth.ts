import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "../functions/apiRequest";

import { redirect } from "next/navigation";
import { LoginPayloadType, RegisterPayloadType } from "@/types/auth";

const useAuth = ({
  LoginPayload,
  RegisterPayload,
}: {
  RegisterPayload?: RegisterPayloadType | undefined;
  LoginPayload?: LoginPayloadType | undefined;
}) => {
  const queryClient = useQueryClient();
  const { login, logout } = useAuthStore();

  const { mutateAsync: loginAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "login",
        errorMsg: "Login failed, check your credentials.",
        payload: LoginPayload,
      }),
    onSuccess: (data) => {
      login(data.user, data.token);
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  const { mutateAsync: registerAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "register",
        errorMsg: "Register failed, something is wrong.",
        payload: RegisterPayload,
      }),
    onSuccess: (data) => {
      if (data.user) {
        redirect("/login");
      }
    },
  });

  const { mutateAsync: logoutAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "login",
        errorMsg: "Logout failed, something is wrong.",
        payload: null,
      }),
    onSuccess: () => {
      logout();
      localStorage.removeItem("token");
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  return { loginAction, registerAction, logoutAction };
};

export default useAuth;
