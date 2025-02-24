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
import { MdOutlinePayments, MdSearchOff } from "react-icons/md";
import { ConfirmModal } from "@/components/modals/ConfirmModal";
import useCheckout from "@/hooks/services/usePayment";
import { usePathname, useRouter } from "next/navigation";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import { BiTable } from "react-icons/bi";
import { PiWarningCircle } from "react-icons/pi";

const OrderSummary = ({ children }: { children: React.ReactNode }) => {
  const { cart, isCartLoading } = useCart({});
  const { restaurantTableUser, restaurantByCode } = useRestaurant({});

  const SubTotal = cart?.cart
    .map((item) => item.product.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const Tax = (SubTotal ? SubTotal * 0.1 : 0).toFixed(2);
  const router = useRouter();

  const pathname = usePathname();
  const { makeCheckout } = useCheckout({
    checkoutData: {
      purchased_products: cart?.cart.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        amount: item.quantity,
        item_price: item.product.price,
      })),
      table_id: restaurantTableUser?.restaurant_table.map((table) => table.id),
      tax: Number(Tax),
      items: cart?.cart.map((item) => item) ?? [],
      restaurant_id: restaurantByCode?.restaurant.id || 0,
      subtotal: SubTotal ? SubTotal : 0,
      total: SubTotal ? SubTotal : 0 + Number(Tax),
      current_url: pathname,
    },
  });

  return (
    <div className="flex justify-center gap-3 p-3 relative">
      {children}
      <Card className="w-[35%] min-h-[calc(100vh-11rem)] h-fit sticky top-[5rem]">
        <CardHeader className="p-4">
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className=" px-3 pt-0">
          <Card className="h-[16.5rem] overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-w-[5px] scrollbar-thumb-rounded-full scrollbar-track-gray-300">
            <CardContent
              className={`grid gap-4 py-3 px-3  ${
                isCartLoading || (cart && cart?.cart.length > 0) ? "" : "h-full"
              }`}
            >
              {isCartLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <OrderMenuItemSkeleton key={index} />
                ))
              ) : cart && cart?.cart.length > 0 ? (
                cart?.cart.map((itemData, index) => (
                  <OrderMenuItem key={index} cartItemData={itemData} />
                ))
              ) : (
                <div className="flex items-center justify-center h-full flex-col gap-6">
                  <div className="bg-slate-100 p-4 rounded-full">
                    <MdSearchOff size={25} />
                  </div>
                  <span className="text-gray-500 text-sm">
                    Your cart is empty..
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </CardContent>
        <CardContent className="mt-8">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${SubTotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span> ${Tax}</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span>${(SubTotal ? SubTotal + Number(Tax) : 0).toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {restaurantTableUser &&
          restaurantTableUser?.restaurant_table.length < 1 ? (
            <ConfirmModal
              iconImage={<BiTable size={25} />}
              modalTrigger={
                <Button className="w-full bg-primary">Confirm Payment</Button>
              }
              buttonLabel="Confirm"
              onSubmit={() => {
                router.push("/order/table");
              }}
              title="Checkout Confirmation"
              description="Please select your table to proceed."
            />
          ) : cart && cart?.cart.length > 0 ? (
            <ConfirmModal
              iconImage={<MdOutlinePayments size={25} />}
              modalTrigger={
                <Button className="w-full bg-primary">Confirm Payment</Button>
              }
              buttonLabel="Confirm"
              onSubmit={makeCheckout}
              title="Checkout Confirmation"
              description="You will be redirected to the payment page."
            />
          ) : (
            <ConfirmModal
              iconImage={<PiWarningCircle size={25} />}
              modalTrigger={
                <Button className="w-full bg-primary">Confirm Payment</Button>
              }
              buttonLabel="Confirm"
              onSubmit={() => {}}
              title="Checkout Confirmation"
              description="Please add items to your cart."
            />
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderSummary;
