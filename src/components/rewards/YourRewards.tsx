import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import YourRewardsCard from "./YourRewardsCard";
import { Button } from "../ui/button";

const YourRewards = () => {
  return (
    <Card className="col-span-1 lg:col-span-3 ">
      <CardHeader className="flex justify-between flex-row items-center w-full">
        <div className="flex flex-col gap-2">
          <CardTitle>Your Rewards</CardTitle>
          <CardDescription>All your rewards in one place.</CardDescription>
        </div>
        <Button variant="outline">See More</Button>
      </CardHeader>
      <CardContent className="grid grid-cols-4 w-full">
        <YourRewardsCard promoData={{ className: "bg-red-400" }} />
        <YourRewardsCard promoData={{ className: "bg-blue-400" }} />
        <YourRewardsCard promoData={{ className: "bg-green-400" }} />
        <YourRewardsCard promoData={{ className: "bg-yellow-400" }} />
      </CardContent>
    </Card>
  );
};

export default YourRewards;
