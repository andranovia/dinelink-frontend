"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRestaurantRating } from "@/hooks/services/useRestaurantRating";
import moment from "moment";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const RestaurantReviews = () => {
  const { restaurantRating } = useRestaurantRating({});

  return (
    <Card className="border-none  col-span-6">
      <CardContent className="flex flex-col gap-2">
        {restaurantRating?.rating.map((rating, i) => (
          <div className="grid grid-cols-5 gap-6  " key={i}>
            <div className="flex p-6 gap-2 col-span-2">
              <Avatar className="h-20 w-20 rounded-md">
                <AvatarImage
                  className="rounded-md"
                  src="/avatars/01.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="rounded-md">
                  <BiUser size={30} />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-xl mb-1">
                  {rating.user.name}
                </h4>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-500">
                    Total Spend:
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    ${rating.total_spend}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-col col-span-3 p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-yellow-400">
                  {[...Array(rating.rating)].map((_, i) => (
                    <BsStarFill key={i} size={20} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-500">
                  {moment(rating.created_at).format("MMMM Do YYYY")}
                </span>
              </div>
              <p className="mt-2 text-gray-600">
                {rating.comment || "No comment provided."}
              </p>
            </div>
            <Separator className="h-[0.5px] col-span-5" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantReviews;
