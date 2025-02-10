import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { BsStarFill } from "react-icons/bs";
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

const getBarWidth = (rating: number) => {
  const totalReviews = 10;
  const widthPercentage = (rating / totalReviews) * 100;
  return `${widthPercentage}%`;
};

const RestaurantReviewsSummary = () => {
  return (
    <>
      <Card className="border-none !border-r-2">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">
            Total Reviews
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <CardTitle className="text-3xl">10.0k</CardTitle>
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
          <CardTitle className="text-3xl">4.5</CardTitle>
          <div className=" flex gap-2 items-center font-medium py-0.5 text-yellow-400 text-sm px-3 rounded-md">
            {[...Array(5)].map((_, i) => (
              <BsStarFill key={i} size={20} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-gray-500">
          Average rating on this year
        </CardFooter>
      </Card>
      <Card className="border-none  ">
        <CardContent className=" pt-6">
          {[...Array(5)].map((_, i) => (
            <div className="flex items-center gap-2" key={4 - i}>
              <div className="flex items-center gap-1">
                <BsStarFill size={10} className="text-gray-400" />
                <span>{5 - i}</span>
              </div>
              <div
                style={{
                  width: getBarWidth(5 - i),
                }}
                className={cn(` h-2  rounded-lg ${getBarColor(5 - i)}`)}
              ></div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default RestaurantReviewsSummary;
