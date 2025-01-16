import { Button } from "@/components/ui/button";
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
    <div className="p-3">
      <Card className="col-span-1 lg:col-span-3 ">
        <CardHeader className="flex justify-between flex-row items-center w-full">
          <div className="flex flex-col gap-2">
            <CardTitle>Your Rewards</CardTitle>
            <CardDescription>All your rewards in one place.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-4 w-full"></CardContent>
      </Card>
    </div>
  );
};

export default page;
