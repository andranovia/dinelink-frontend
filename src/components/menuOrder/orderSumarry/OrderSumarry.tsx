import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import OrderMenuItem from "./OrderMenuItem";

const OrderSumarry = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center gap-3 p-3 relative">
      {children}
      <Card className="w-[35%] h-fit sticky top-[5rem]">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <OrderMenuItem key={index} />
            ))}
            <Separator />
          </div>
        </CardContent>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$99.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>$8.92</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span>$112.92</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary">Confirm Payment</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderSumarry;
