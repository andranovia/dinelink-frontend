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
import React from "react";

const page = () => {
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
              Jl. Pemuda No. 1, Kota Bandung, Jawa Barat
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MapDefault className="h-[20rem]" />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
