"use client";

import { FormModal } from "@/components/modals/FormModal";
import RestaurantReviews from "@/components/restaurant/reviews/restaurantReviews";
import RestaurantReviewsSummary from "@/components/restaurant/reviews/restaurantReviewsSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRestaurantRating } from "@/hooks/services/useRestaurantRating";
import React from "react";

const Page = () => {
  const [rating, setRating] = React.useState({
    rating: 0,
    comment: "",
  });
  const { postRating } = useRestaurantRating({
    changeStatusPayload: rating,
  });

  return (
    <div className="p-3">
      <Card>
        <CardHeader className="flex justify-between flex-row">
          <CardTitle className="text-3xl font-bold">Reviews</CardTitle>
          <FormModal
            buttonLabel="Add Review"
            modalTrigger={<Button className="w-fit">Add Review</Button>}
            initialData={{
              rating: 1,
              comment: "",
            }}
            onSubmit={(values) => {
              setRating(values);
              postRating();
            }}
            formData={{
              title: "Add Review",
              description: "Add a review for the restaurant.",
              form: [
                {
                  name: "rating",
                  label: "Rating",
                  type: "number",
                  placeholder: "1",
                  defaultValue: 1,
                },
                {
                  name: "comment",
                  label: "comment",
                  type: "text",
                  placeholder: "This place is great",
                  defaultValue: "",
                },
              ],
            }}
          />
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

export default Page;
