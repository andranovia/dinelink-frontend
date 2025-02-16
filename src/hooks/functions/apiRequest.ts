/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/axios";
import { AxiosRequestConfig } from "axios";

type RequestProps = {
  type: string;
  payload: AxiosRequestConfig<any> | undefined | any;
  errorMsg: string;
  method: "get" | "delete" | "put" | "post";
  callbackFunction?: (response: any) => void;
};

export const apiRequest = async ({
  type,
  payload,
  errorMsg,
  method,
  callbackFunction,
}: RequestProps) => {
  let response;
  try {
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
    if (response.status === 200 || response.status === 401) {
      return response.data;
    }
    if (callbackFunction) {
      callbackFunction(response);
    }
  } catch (error) {
    console.error(errorMsg, error);
    throw new Error(errorMsg);
  }
};
