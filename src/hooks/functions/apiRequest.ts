import axiosInstance from "@/lib/axios";

type RequestProps = {
  type: string;
  payload: unknown;
  errorMsg: string;
  method: "get" | "delete" | "put" | "post";
};

export const apiRequest = async ({
  type,
  payload,
  errorMsg,
  method,
}: RequestProps) => {
  try {
    let response;
    switch (method) {
      case "get":
        response = await axiosInstance.get(`/${type}`, payload ? payload : {});
        break;
      case "delete":
        response = await axiosInstance.delete(
          `/${type}`,
          payload ? payload : {}
        );
        break;
      case "put":
        response = await axiosInstance.put(`/${type}`, payload);
        break;
      case "post":
        response = await axiosInstance.post(`/${type}`, payload);
        break;
      default:
        response = await axiosInstance.get(`/${type}`, payload ? payload : {});
        break;
    }
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(errorMsg, error);
    throw new Error(errorMsg);
  }
};
