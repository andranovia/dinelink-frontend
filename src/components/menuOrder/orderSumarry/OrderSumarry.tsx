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
import { useCart } from "@/hooks/services/useCart";
import OrderMenuItemSkeleton from "./loading/OrderMenuItemSkeleton";

const OrderSummary = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useCart({});

  return (
    <div className="flex justify-center gap-3 p-3 relative">
      {children}
      <Card className="w-[35%] min-h-[calc(100vh-10rem)] h-fit sticky top-[5rem]">
        <CardHeader className="p-4">
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className=" px-3 pt-0">
          <Card className="h-[17.2rem] overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-w-[5px] scrollbar-thumb-rounded-full scrollbar-track-gray-300">
            <CardContent className="grid gap-4 py-3 px-3">
              {cart && cart?.cart.length > 0
                ? cart?.cart.map((itemData, index) => (
                    <OrderMenuItem key={index} cartItemData={itemData} />
                  ))
                : Array.from({ length: 3 }).map((_, index) => (
                    <OrderMenuItemSkeleton key={index} />
                  ))}
            </CardContent>
          </Card>
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

export default OrderSummary;
