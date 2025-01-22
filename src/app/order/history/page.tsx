import { OrderTable } from "@/components/orderHistory/OrderTable";
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
        <CardContent className="flex justify-center items-center w-full">
          <OrderTable
            data={[
              {
                id: "1",
                name: "John Doe",
                department: "Engineering",
                email: "0oLQp@example.com",
                location: "New York",
                status: "active",
              },
              {
                id: "1",
                name: "John Doe",
                email: "0oLQp@example.com",
                department: "Engineering",
                location: "New York",
                status: "active",
              },
              {
                id: "1",
                name: "John Doe",
                email: "0oLQp@example.com",
                department: "Engineering",
                location: "New York",
                status: "active",
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
