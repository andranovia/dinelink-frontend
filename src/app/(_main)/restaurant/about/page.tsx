"use client";

import MapDefault from "@/components/map";
import RestaurantCategoryInfo from "@/components/restaurant/about/RestaurantCategoryInfo";
import RestaurantFacilities from "@/components/restaurant/about/RestaurantFacilities";
import RestaurantInfo from "@/components/restaurant/about/RestaurantInfo";
import RestaurantPreview from "@/components/restaurant/about/RestaurantPreview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import React from "react";

const Page = () => {
  const { restaurantByCode } = useRestaurant({});

  return (
    <div className="p-3 grid grid-cols-5 gap-4">
      <Card className="col-span-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Restaurant Details
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 w-full gap-y-10 ">
          <RestaurantPreview />
          <RestaurantCategoryInfo />
        </CardContent>
      </Card>
      <Card className="pt-6 col-span-3 h-full">
        <CardContent className="h-full">
          <RestaurantInfo />
        </CardContent>
      </Card>
      <Card className=" col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Available Facilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RestaurantFacilities />
        </CardContent>
      </Card>
      <Card className=" col-span-5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Restaurant Location
          </CardTitle>
          <CardDescription>
            <p className="text-sm">
              {restaurantByCode?.restaurant.address
                ? restaurantByCode?.restaurant.address
                : "No address available"}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {restaurantByCode?.restaurant.address ? (
            <MapDefault
              className="h-[20rem]"
              position={restaurantByCode?.restaurant.address}
            />
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
