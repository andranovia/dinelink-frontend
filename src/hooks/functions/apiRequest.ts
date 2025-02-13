import axiosInstance from "@/lib/axios";

type RequestProps = {
  type: string;
  payload: unknown;
  errorMsg: string;
};

export const apiRequest = async ({ type, payload, errorMsg }: RequestProps) => {
  try {
    const response = await axiosInstance.post(`/${type}`, payload);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(errorMsg, error);
    throw new Error(errorMsg);
  }
};
