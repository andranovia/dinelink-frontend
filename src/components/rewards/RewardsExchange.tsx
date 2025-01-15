import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import RewardsExchangeCard from "./RewardsExchangeCard";

const RewardsExchange = () => {
  return (
    <Card className="col-span-1 lg:col-span-3 ">
      <CardHeader>
        <CardTitle>Your Rewards</CardTitle>
        <CardDescription>All your rewards in one place.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-4 w-full">
        <RewardsExchangeCard promoData={{ className: "bg-red-400" }} />
        <RewardsExchangeCard promoData={{ className: "bg-blue-400" }} />
        <RewardsExchangeCard promoData={{ className: "bg-green-400" }} />
        <RewardsExchangeCard promoData={{ className: "bg-yellow-400" }} />
      </CardContent>
    </Card>
  );
};

export default RewardsExchange;
