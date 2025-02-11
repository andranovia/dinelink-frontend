import RestaurantReviews from "@/components/restaurant/reviews/RestaurantReviews";
import RestaurantReviewsSummary from "@/components/restaurant/reviews/RestaurantReviewsSummary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div className="p-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-10">
            <RestaurantReviewsSummary />
            <Separator className="h-[0.5px] col-span-3" />
            <RestaurantReviews />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
