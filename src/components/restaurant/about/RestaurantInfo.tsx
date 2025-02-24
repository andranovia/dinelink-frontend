import { useRestaurant } from "@/hooks/services/useRestaurant";
import React from "react";

const RestaurantInfo = () => {
  const { restaurantByCode } = useRestaurant({});

  return (
    <div className="flex flex-col justify-between h-full">
      <h2 className="font-semibold text-3xl">Introduction</h2>
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-xl">
          What is {restaurantByCode?.restaurant.name} ?
        </h3>
        <p className="text-sm font-medium text-gray-500">
          {restaurantByCode?.restaurant.description
            ? restaurantByCode?.restaurant.description
            : "No description available"}
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
