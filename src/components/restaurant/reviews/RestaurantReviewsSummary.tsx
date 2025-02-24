"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRestaurantRating } from "@/hooks/services/useRestaurantRating";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";

const getBarColor = (rating: number) => {
  switch (rating) {
    case 5:
      return "bg-cyan-500";
    case 4:
      return "bg-purple-500";
    case 3:
      return "bg-yellow-500";
    case 2:
      return "bg-blue-500";
    case 1:
      return "bg-amber-500";
    default:
      return "bg-gray-500";
  }
};

const RatingStars = ({ averageRating }) => {
  if (!averageRating) return null;
  const clampedRating = Math.min(Math.max(averageRating, 0), 5);

  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = averageRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-2 items-center font-medium py-0.5 text-yellow-400 text-sm px-3 rounded-md">
      {[...Array(fullStars)].map((_, i) => (
        <BsStarFill key={`full-${i}`} size={20} />
      ))}

      {hasHalfStar && <BsStarHalf key="half" size={20} />}

      {[...Array(emptyStars)].map((_, i) => (
        <BsStar key={`empty-${i}`} size={20} />
      ))}
    </div>
  );
};

const RestaurantReviewsSummary = () => {
  const { restaurantRating } = useRestaurantRating({});
  const ratings = restaurantRating?.rating.map((item) => item.rating) || [];
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  restaurantRating?.rating.forEach((item) => {
    if (item.rating >= 1 && item.rating <= 5) {
      ratingCounts[item.rating]++;
    }
  });

  const totalRatings = restaurantRating?.rating.length;

  const getBarWidth = (star) => {
    return `${(ratingCounts[star] / totalRatings) * 100}%`;
  };

  return (
    <>
      <Card className="border-none !border-r-2">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">
            Total Reviews
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <CardTitle className="text-3xl">
            {restaurantRating?.rating.length}
          </CardTitle>
          <div className=" flex gap-2 items-center font-medium py-0.5 bg-green-100 text-green-700 text-sm px-3 rounded-md">
            <span>21% </span>
            <HiArrowTrendingUp />
          </div>
        </CardContent>
        <CardFooter className="text-gray-500">
          Growth in reviews on this year
        </CardFooter>
      </Card>
      <Card className="border-0 border-l-[1px] border-r-[1px] rounded-none">
        <CardHeader>
          <CardTitle className="text-xl  text-secondary">
            Average Rating
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <CardTitle className="text-3xl">{averageRating.toFixed(1)}</CardTitle>
          <RatingStars averageRating={averageRating} />
        </CardContent>
        <CardFooter className="text-gray-500">
          Average rating on this year
        </CardFooter>
      </Card>
      <Card className="border-none w-full ">
        <CardContent className=" py-3">
          {[...Array(5)].map((_, i) => {
            const star = 5 - i;
            return (
              <div className="flex items-center gap-2" key={star}>
                <div className="flex items-center gap-1">
                  <BsStarFill size={10} className="text-gray-400" />
                  <span>{star}</span>
                </div>
                <div
                  style={{
                    width: getBarWidth(star),
                  }}
                  className={`h-2 rounded-lg ${getBarColor(star)}`}
                ></div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default RestaurantReviewsSummary;
