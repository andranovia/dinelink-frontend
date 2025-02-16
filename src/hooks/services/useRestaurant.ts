import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";
import { ProductType } from "@/types/restaurant";

export function useRestaurant({
  params,
}: {
  params: { restaurantId: number };
}) {
  const { data: products, isLoading: isProductsLoading } = useQuery<
    ProductType[]
  >({
    queryKey: ["products"],
    queryFn: () =>
      apiRequest({
        type: "products",
        errorMsg: "Get products failed, something is wrong.",
        payload: {
          params,
        },
        method: "get",
      }),
  });

  return {
    products,
    isProductsLoading,
  };
}
