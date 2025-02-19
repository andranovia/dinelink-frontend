import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";
import {
  ProductCategoryType,
  ProductType,
  RestaurantTableType,
} from "@/types/restaurant";
import useAuth from "./useAuth";
import { useProductStore } from "@/store/productStore";

export function useRestaurant({
  params,
  editUserRestaurantTablePayload,
}: {
  params: { restaurantId: number };
  editUserRestaurantTablePayload?: {
    id: number;
    floor: number;
    number: number;
    persons: number;
    notes: string;
    seats: number;
    is_active: string;
  };
}) {
  const { userData } = useAuth({});
  const queryClient = useQueryClient();
  const { productsCategoryFilter } = useProductStore();

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

  const { data: filteredProducts, isLoading: isFilteredProductsLoading } =
    useQuery<ProductType[]>({
      queryKey: ["filteredProducts"],
      queryFn: () =>
        apiRequest({
          type: "products/filtered",
          errorMsg: "Get filtered products failed, something is wrong.",
          payload: {
            params: {
              restaurant_id: params.restaurantId,
              category_id: productsCategoryFilter,
            },
          },
          method: "get",
        }),
      enabled: !!localStorage.getItem("token") && !!productsCategoryFilter,
    });

  const { mutateAsync: editUserRestaurantTable } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "table/user",
        errorMsg: "Update user restaurant table failed, something is wrong.",
        payload: {
          user_id: userData?.id,
          restaurant_id: params.restaurantId,
          ...editUserRestaurantTablePayload,
        },
        method: "put",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantTableUser"] });
    },
  });

  const { data: restaurantTableUser, isLoading: isRestaurantTableUserLoading } =
    useQuery<RestaurantTableType>({
      queryKey: ["restaurantTableUser"],
      queryFn: () =>
        apiRequest({
          type: "table/user",
          errorMsg: "Get user restaurant table failed, something is wrong.",
          payload: {
            params: {
              restaurant_id: params.restaurantId,
              user_id: userData?.id,
            },
          },
          method: "get",
        }),

      enabled: !!localStorage.getItem("token") && !!userData?.id,
    });

  const { data: restaurantTable, isLoading: isRestaurantTableLoading } =
    useQuery<RestaurantTableType>({
      queryKey: ["restaurantTable"],
      queryFn: () =>
        apiRequest({
          type: "table",
          errorMsg: "Get restaurant table failed, something is wrong.",
          payload: {
            params: { restaurant_id: params.restaurantId },
          },
          method: "get",
        }),
    });

  const { data: productCategories, isLoading: isProductCategoriesLoading } =
    useQuery<ProductCategoryType[]>({
      queryKey: ["productCategories"],
      queryFn: () =>
        apiRequest({
          type: "categories",
          errorMsg: "Get restaurant table failed, something is wrong.",
          payload: {
            params: { restaurantId: params.restaurantId },
          },
          method: "get",
        }),

      enabled: !!localStorage.getItem("token"),
    });

  return {
    products,
    isProductsLoading,
    filteredProducts,
    isFilteredProductsLoading,
    restaurantTable,
    productCategories,
    isProductCategoriesLoading,
    isRestaurantTableLoading,
    restaurantTableUser,
    isRestaurantTableUserLoading,
    editUserRestaurantTable,
  };
}
