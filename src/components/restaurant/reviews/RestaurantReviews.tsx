import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";

const RestaurantReviews = () => {
  return (
    <Card className="border-none  col-span-3">
      <CardContent className="flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <div className="grid grid-cols-5 gap-6  " key={i}>
            <div className="flex p-6 gap-2 col-span-2">
              <Avatar className="h-20 w-20 rounded-md">
                <AvatarImage
                  className="rounded-md"
                  src="/avatars/01.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="rounded-md">SN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-xl mb-1">Towhidur Rahman</h4>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-500">
                    Total Spend:
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    $200
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-500">
                    Total Review
                  </span>
                  <span className="text-sm font-semibold text-primary">14</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-col col-span-3 p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} size={20} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-500">
                  24-10-2022
                </span>
              </div>
              <p className="mt-2 text-gray-600">
                My first time here and I was very impressed. The food was very
                delicious and the service was top-notch. The staff were very
                friendly and attentive. I would definitely recommend this place
                to anyone looking for a great meal.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Button variant="outline" color="primary">
                  <IoHeartOutline />
                </Button>
                <Button variant="outline" color="primary">
                  <IoHeartDislikeOutline />
                </Button>
              </div>
            </div>
            <Separator className="h-[0.5px] col-span-5" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantReviews;
