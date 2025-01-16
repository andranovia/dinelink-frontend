import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ExchangePointsCard from "./ExchangePointsCard";
import { Button } from "../ui/button";

const ExchangePoints = () => {
  return (
    <Card className="col-span-1 lg:col-span-3 ">
      <CardHeader className="flex justify-between flex-row items-center w-full">
        <div className="flex flex-col gap-2">
          <CardTitle>Exchange Your Points</CardTitle>
          <CardDescription>Redeem your points for rewards.</CardDescription>
        </div>
        <Button variant="outline">See More</Button>
      </CardHeader>
      <CardContent className="grid grid-cols-4 w-full gap-4">
        <ExchangePointsCard />
        <ExchangePointsCard />
        <ExchangePointsCard />
        <ExchangePointsCard />
      </CardContent>
    </Card>
  );
};

export default ExchangePoints;
