"use client";

import { RatingType } from "@/types/restaurant";
import { apiRequest } from "../functions/apiRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRestaurant } from "./useRestaurant";

export function useRestaurantRating() {
  const { restaurantByCode } = useRestaurant({});
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

  // const { mutate: postRating } = useMutation({
  //   mutationFn: () =>
  //     apiRequest({
  //       type: "restaurants/rating",
  //       errorMsg: "Change rating show failed, something is wrong.",
  //       payload: {
  //         id: changeStatusPayload?.id,
  //         show: changeStatusPayload?.show,
  //       },
  //       method: "post",
  //     }),

  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["restaurantRating"] });
  //   },
  // });

  return {
    restaurantRating,
    isRestaurantRatingLoading,
  };
}
