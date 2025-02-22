"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import Link from "next/link";
import React from "react";
import { MdSearchOff } from "react-icons/md";

const ManageTableSummary = () => {
  const { restaurantTableUser } = useRestaurant({
    params: { restaurantId: 1 },
  });

  return (
    <Card className="w-full shadow-none col-span-2 flex flex-col h-full">
      {restaurantTableUser &&
      restaurantTableUser?.restaurant_table.length > 0 ? (
        <>
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-4">
              <h3>Table Summary</h3>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex justify-center items-center gap-2">
                <span className="py-1 p-2 rounded-md bg-green-100 text-green-500 text-sm font-medium">
                  Confirmed
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            {restaurantTableUser?.restaurant_table?.map((table, index) => (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                key={index}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Table {index + 1}</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <span>Table Number.</span>
                          <span>{table.number}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Floor</span>
                          <span>{table.floor}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Notes</span>
                          <span>{table.notes}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Person</span>
                          <span>{table.persons}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </CardContent>
          <CardFooter className="bg-indigo-50 bg-opacity-50 flex flex-col items-center gap-4">
            <p className="font-medium text-sm text-gray-700">
              Your table is confirmed! make orders or view active orders.
            </p>
            <div className="flex justify-center items-center gap-3 flex-col w-full">
              <Link href="/menu-order" className="w-full">
                <Button
                  variant={"outline"}
                  className="border-primary text-primary w-full"
                >
                  Make Order
                </Button>
              </Link>
              <Link href="/order/active" className="w-full">
                <Button variant={"default"} className="w-full">
                  View Active Order
                </Button>
              </Link>
            </div>
          </CardFooter>
        </>
      ) : (
        <div className="flex items-center justify-center h-full flex-col gap-6">
          <div className="bg-slate-100 p-4 rounded-full">
            <MdSearchOff size={25} />
          </div>
          <span className="text-gray-500 text-sm">
            Select your table to start ordering.
          </span>
        </div>
      )}
    </Card>
  );
};

export default ManageTableSummary;
