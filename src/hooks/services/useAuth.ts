import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";
import { apiRequest } from "../functions/apiRequest";

import { redirect, useRouter } from "next/navigation";
import { LoginPayloadType, RegisterPayloadType } from "@/types/auth";
import useAlertStore from "@/store/alert";

const useAuth = ({
  LoginPayload,
  RegisterPayload,
}: {
  RegisterPayload?: RegisterPayloadType | undefined;
  LoginPayload?: LoginPayloadType | undefined;
}) => {
  const queryClient = useQueryClient();
  const { showAlert, hideAlert } = useAlertStore();
  const { login, logout, token, setUser } = useAuthStore();
  const router = useRouter();

  const { data: userData } = useQuery<{
    id: number;
    name: string;
    email: string;
    message: string;
  }>({
    queryKey: ["user"],
    queryFn: () =>
      apiRequest({
        type: "user",
        errorMsg: "Get user failed, something is wrong.",
        payload: {
          headers: {
            Authorization: `Bearer ${token || localStorage.getItem("token")}`,
          },
        },
        method: "get",
        callbackFunction(response) {
          setUser(response.data);
        },
      }),
    enabled: !!localStorage.getItem("token") || !!token,
  });

  const { mutateAsync: loginAction, data: isUserError } = useMutation({
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
      if (data.user.type === "owner") {
        window.location.href = `http://localhost:3000/verification/${data.token}`;
      } else if (data.user.type === "customer") {
        router.push("/restaurant");
      }
      showAlert(
        {
          title: "Login Success",
          message: "Successfully logged in.",
        },
        "default"
      );
      setTimeout(() => {
        hideAlert();
      }, 3000);
    },
    onError: (error) => {
      if (error) {
        showAlert(
          { title: "Login failed", message: "Check your credentials." },
          "destructive"
        );
        setTimeout(() => {
          hideAlert();
        }, 3000);
      }
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
      router.push("/login");

      showAlert(
        {
          title: "Register Success",
          message: "Successfully registered your account.",
        },
        "default"
      );
      setTimeout(() => {
        hideAlert();
      }, 3000);
    },
    onError: (error) => {
      if (error) {
        showAlert(
          { title: "Register Failed", message: "User already exists." },
          "destructive"
        );
        setTimeout(() => {
          hideAlert();
        }, 3000);
      }
    },
  });

  const { mutateAsync: logoutAction } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "logout",
        errorMsg: "Logout failed, something is wrong.",
        payload: {
          headers: {
            Authorization: `Bearer ${token || localStorage.getItem("token")}`,
          },
        },
        method: "post",
      }),
    onSuccess: () => {
      logout();
      localStorage.removeItem("token");
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      redirect("/login");
    },
  });

  return { loginAction, registerAction, logoutAction, userData, isUserError };
};

export default useAuth;
