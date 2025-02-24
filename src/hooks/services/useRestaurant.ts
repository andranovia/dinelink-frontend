import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../functions/apiRequest";
import {
  ProductCategoryType,
  ProductType,
  RestaurantCodeType,
  RestaurantFloorType,
  RestaurantTableType,
} from "@/types/restaurant";
import useAuth from "./useAuth";
import { useProductStore } from "@/store/productStore";

export function useRestaurant({
  restaurantCode,
  editUserRestaurantTablePayload,
  cancelUserTablePayload,
}: {
  editUserRestaurantTablePayload?: {
    id: number;
    floor_id: number;
    number: number;
    persons: number;
    notes: string;
    seats: number;
    is_active: string;
  };
  cancelUserTablePayload?: {
    table_id: number;
  };
  restaurantCode?: string;
}) {
  const { userData } = useAuth({});
  const queryClient = useQueryClient();
  const { productsCategoryFilter } = useProductStore();

  const code = localStorage.getItem("restaurantCode");

  const { data: restaurantByCode, isLoading: isRestaurantByCodeLoading } =
    useQuery<RestaurantCodeType>({
      queryKey: ["restaurantByCode"],
      queryFn: () =>
        apiRequest({
          type: "restaurants/code",
          errorMsg: "Get restaurant by code failed, something is wrong.",
          payload: {
            params: {
              code: restaurantCode || code,
            },
          },
          method: "get",
        }),

      enabled: !!code || !!restaurantCode,
    });

  const { data: products, isLoading: isProductsLoading } = useQuery<
    ProductType[]
  >({
    queryKey: ["products"],
    queryFn: () =>
      apiRequest({
        type: "products",
        errorMsg: "Get products failed, something is wrong.",
        payload: {
          params: {
            restaurantId: restaurantByCode?.restaurant.id,
          },
        },
        method: "get",
      }),

    enabled: !!restaurantByCode?.restaurant.id,
  });

  const { data: restaurantFloor, isLoading: isRestaurantFloorLoading } =
    useQuery<RestaurantFloorType>({
      queryKey: ["restaurantFloor"],
      queryFn: () =>
        apiRequest({
          type: "tables/floor",
          errorMsg: "Get restaurant floor failed, something is wrong.",
          payload: {
            params: { restaurant_id: restaurantByCode?.restaurant.id },
          },
          method: "get",
        }),

      enabled:
        !!localStorage.getItem("token") && !!restaurantByCode?.restaurant.id,
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
              restaurant_id: restaurantByCode?.restaurant.id,
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
        type: "tables/user",
        errorMsg: "Update user restaurant table failed, something is wrong.",
        payload: {
          user_id: userData?.id,
          restaurant_id: restaurantByCode?.restaurant.id,
          ...editUserRestaurantTablePayload,
        },
        method: "put",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantTableUser"] });
      queryClient.invalidateQueries({ queryKey: ["restaurantTable"] });
    },
  });

  const { mutateAsync: cancelUserTable } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "tables/cancel",
        errorMsg: "Cancel user restaurant table failed, something is wrong.",
        payload: {
          user_id: userData?.id,
          restaurant_id: restaurantByCode?.restaurant.id,
          ...cancelUserTablePayload,
        },
        method: "put",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantTableUser"] });
      queryClient.invalidateQueries({ queryKey: ["restaurantTable"] });
    },
  });

  const { data: restaurantTableUser, isLoading: isRestaurantTableUserLoading } =
    useQuery<RestaurantTableType>({
      queryKey: ["restaurantTableUser"],
      queryFn: () =>
        apiRequest({
          type: "tables/user",
          errorMsg: "Get user restaurant table failed, something is wrong.",
          payload: {
            params: {
              restaurant_id: restaurantByCode?.restaurant.id,
              user_id: userData?.id,
            },
          },
          method: "get",
        }),

      enabled:
        !!localStorage.getItem("token") &&
        !!userData?.id &&
        !!restaurantByCode?.restaurant.id,
    });

  const { data: restaurantTable, isLoading: isRestaurantTableLoading } =
    useQuery<RestaurantTableType>({
      queryKey: ["restaurantTable"],
      queryFn: () =>
        apiRequest({
          type: "tables",
          errorMsg: "Get restaurant table failed, something is wrong.",
          payload: {
            params: { restaurant_id: restaurantByCode?.restaurant.id },
          },
          method: "get",
        }),

      enabled:
        !!localStorage.getItem("token") && !!restaurantByCode?.restaurant.id,
    });

  const { data: productCategories, isLoading: isProductCategoriesLoading } =
    useQuery<ProductCategoryType[]>({
      queryKey: ["productCategories"],
      queryFn: () =>
        apiRequest({
          type: "categories",
          errorMsg: "Get restaurant table failed, something is wrong.",
          payload: {
            params: { restaurantId: restaurantByCode?.restaurant.id },
          },
          method: "get",
        }),

      enabled:
        !!localStorage.getItem("token") && !!restaurantByCode?.restaurant.id,
    });

  return {
    products,
    isProductsLoading,
    cancelUserTable,
    filteredProducts,
    isFilteredProductsLoading,
    restaurantByCode,
    isRestaurantFloorLoading,
    restaurantFloor,
    isRestaurantByCodeLoading,
    restaurantTable,
    productCategories,
    isProductCategoriesLoading,
    isRestaurantTableLoading,
    restaurantTableUser,
    isRestaurantTableUserLoading,
    editUserRestaurantTable,
  };
}
