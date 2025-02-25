"use client";

import { RatingType } from "@/types/restaurant";
import { apiRequest } from "../functions/apiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRestaurant } from "./useRestaurant";
import useTransaction from "./useTransaction";
import useAuth from "./useAuth";

export function useRestaurantRating({
  changeStatusPayload,
}: {
  changeStatusPayload?: {
    rating: number;
    comment: string;
  };
}) {
  const { restaurantByCode } = useRestaurant({});
  const { userData } = useAuth({});
  const { transactions } = useTransaction();
  const queryClient = useQueryClient();

  const { data: restaurantRating, isLoading: isRestaurantRatingLoading } =
    useQuery<RatingType>({
      queryKey: ["restaurantRating"],
      queryFn: () =>
        apiRequest({
          type: "restaurants/rating",
          errorMsg: "Get user restaurant table failed, something is wrong.",
          payload: {
            params: {
              restaurant_id: restaurantByCode?.restaurant.id,
            },
          },
          method: "get",
        }),

      enabled:
        !!localStorage.getItem("token") && !!restaurantByCode?.restaurant.id,
    });

  const { mutate: postRating } = useMutation({
    mutationFn: () =>
      apiRequest({
        type: "restaurants/rating",
        errorMsg: "Change rating show failed, something is wrong.",
        payload: {
          ...changeStatusPayload,
          restaurant_id: restaurantByCode?.restaurant.id,
          total_spend: transactions?.reduce(
            (acc, transaction) => acc + transaction.total,
            0
          ),
          user_id: userData?.id,
        },
        method: "post",
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantRating"] });
    },
  });

  return {
    restaurantRating,
    postRating,
    isRestaurantRatingLoading,
  };
}
