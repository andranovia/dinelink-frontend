import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";

export function useRestaurant({ id }: { id?: number }) {
  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      apiRequest({
        type: "products",
        errorMsg: "Get products failed, something is wrong.",
        payload: id,
        method: "get",
      }),
  });

  return {
    products,
    isProductsLoading,
  };
}
