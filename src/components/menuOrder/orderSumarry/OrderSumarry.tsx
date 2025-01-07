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

const OrderSumarry = () => {
  return (
    <Card className="w-[35%] h-[calc(100vh-11rem)]">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
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
        <Button className="w-full">Confirm Payment</Button>
      </CardFooter>
    </Card>
  );
};

export default OrderSumarry;
