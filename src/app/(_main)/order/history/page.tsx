"use client";

import { OrderTable } from "@/components/orderHistory/OrderTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTransaction from "@/hooks/services/useTransaction";
import React from "react";

const Page = () => {
  const { transactions } = useTransaction();

  return (
    <div className="p-3">
      <Card className="col-span-1 lg:col-span-3 ">
        <CardHeader className="flex justify-between flex-row items-center w-full">
          <div className="flex flex-col gap-2">
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              The transactions you have made by far.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex justify-center items-center w-full">
          {transactions && transactions.length > 0 && (
            <OrderTable data={transactions} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
