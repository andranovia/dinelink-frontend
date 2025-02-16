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
  const { login, logout, token } = useAuthStore();

  const { mutateAsync: loginAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "login",
        errorMsg: "Login failed, check your credentials.",
        payload: LoginPayload,
        method: "post",
      }),
    onSuccess: (data) => {
      login(data.user, data.token);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      redirect("/menu-order");
    },
  });

  const { mutateAsync: registerAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "register",
        errorMsg: "Register failed, something is wrong.",
        payload: RegisterPayload,
        method: "post",
      }),
    onSuccess: () => {
      redirect("/login");
    },
  });

  const { mutateAsync: logoutAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "logout",
        errorMsg: "Logout failed, something is wrong.",
        payload: `Bearer ${token || localStorage.getItem("token")}`,
        method: "post",
      }),
    onSuccess: () => {
      logout();
      localStorage.removeItem("token");
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      redirect("/login");
    },
  });

  return { loginAction, registerAction, logoutAction };
};

export default useAuth;
