/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import OrderActiveCardItem from "@/components/orderActive/OrderActiveOrderItem";
import { Button } from "@/components/ui/button";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { BiMinus, BiPlus, BiReset } from "react-icons/bi";
import Image from "next/image";
import MapDefault from "@/components/map";
import useOrder from "@/hooks/services/useOrder";
import moment from "moment";
import { CartItem } from "@/types/cart";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import { RestaurantTableType } from "@/types/restaurant";
import useAuthStore from "@/store/authStore";
import Link from "next/link";
import useCheckout from "@/hooks/services/usePayment";
import { usePathname } from "next/navigation";

const Page = () => {
  const { checkoutDetails } = useOrder({ params: { restaurant_id: 1 } });
  const { user } = useAuthStore();
  const { restaurantTable } = useRestaurant({
    params: { restaurantId: 1 },
  });
  const { restaurantTableUser } = useRestaurant({
    params: { restaurantId: 1 },
  });
  const pathname = usePathname();
  const items: CartItem[] = JSON.parse(checkoutDetails?.items || "[]");

  const { makeCheckout } = useCheckout({
    checkoutData: {
      purchased_products: items.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        amount: item.quantity,
        item_price: item.product.price,
      })),
      table_id: restaurantTableUser?.restaurant_table.map((table) => table.id),
      tax: Number(checkoutDetails?.tax),
      items: items?.map((item) => item) ?? [],
      restaurant_id: 1,
      subtotal: checkoutDetails ? checkoutDetails.subtotal : 0,
      total:
        (checkoutDetails ? checkoutDetails?.total : 0) +
        Number(checkoutDetails?.tax),
      current_url: pathname,
      order_id: checkoutDetails?.order_id,
    },
  });

  return (
    <div className="p-3 grid grid-cols-6 gap-3">
      <div className="col-span-1 lg:col-span-4 flex flex-col">
        <Card className=" shadow-none ">
          <CardHeader className="flex justify-between flex-row items-center w-full">
            <div className="flex flex-col gap-4">
              <CardTitle className="flex flex-row items-center gap-4">
                <span className="bg-yellow-400 w-2 h-2 rounded-full"></span>
                <h2 className="text-2xl">
                  Order ID: {checkoutDetails?.order_id}
                </h2>
              </CardTitle>
              <CardDescription className="text-sm font-semibold">
                {moment(checkoutDetails?.created_at).format("MMMM Do YYYY")}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <OrderActiveCardItems itemsData={checkoutDetails?.items} />
            <CurrentTableOrder tableData={restaurantTable} user={user} />
            <OrderSummary
              checkoutDetails={checkoutDetails}
              onFinishPayment={makeCheckout}
            />
          </CardContent>
        </Card>
      </div>
      <RestaurantDetails />
    </div>
  );
};

export default Page;
const OrderActiveCardItems = ({ itemsData }: { itemsData?: string }) => {
  const items: CartItem[] = JSON.parse(itemsData || "[]");

  return (
    <Card className="shadow-none">
      <CardHeader className="w-full">
        <div className="flex flex-col gap-2">
          <CardTitle className="flex flex-row items-center gap-4 text-lg">
            Order Item
          </CardTitle>
          <CardDescription className="text-sm font-medium">
            Every item you have ordered.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {items.map((item, index) => (
            <OrderActiveCardItem productData={item} key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const getBgStatus = (status: string) => {
  switch (status) {
    case "Pending Payment":
      return "bg-yellow-100 text-yellow-500";
    case "Completed":
      return "bg-green-100 text-green-500";
    case "Cancelled":
      return "bg-red-100 text-red-500";
    default:
      return "bg-yellow-100 text-yellow-500";
  }
};

const OrderSummary = ({
  checkoutDetails,
  onFinishPayment,
}: {
  checkoutDetails?: any;
  onFinishPayment: () => void;
}) => {
  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-4">
          <h3>Order Summary</h3>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex justify-center items-center gap-2">
            <span
              className={`py-1 p-2 rounded-md  text-sm font-medium ${getBgStatus(
                checkoutDetails?.status
              )}`}
            >
              {checkoutDetails?.status}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${checkoutDetails?.subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax</span>
              <span>${checkoutDetails?.tax}</span>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between font-bold">
            <span>Total</span>
            <span>
              ${(checkoutDetails?.total + checkoutDetails?.tax).toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-indigo-50 bg-opacity-50 py-6 flex justify-between items-center">
        <p className="font-medium text-sm text-gray-700">
          Manage your order or finish your transaction
        </p>
        <div className="flex justify-center items-center gap-2">
          <Button variant={"outline"} className="border-primary text-primary">
            Cancel Order
          </Button>
          <Button variant={"default"} onClick={() => onFinishPayment()}>
            Finish Payment
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const CurrentTableOrder = ({
  tableData,
  user,
}: {
  tableData?: RestaurantTableType;
  user?: any;
}) => {
  return (
    <Card>
      <CardHeader className="w-full">
        <div className="flex flex-col gap-2">
          <CardTitle className="flex flex-row items-center gap-4 text-lg">
            Current Table
          </CardTitle>
          <CardDescription className="text-sm font-medium">
            Your booked table and its status.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-10 my-4">
        <div className="h-[24rem] w-full relative overflow-hidden border rounded-xl bg-slate-100">
          <div className="flex  bg-primary z-20 relative items-center gap-2 w-full p-4">
            <span className="rounded-md text-white text-sm font-medium">
              Table Number:
            </span>
            <span className=" p-1 px-2 rounded-md bg-white text-primary text-sm font-medium">
              {tableData?.restaurant_table?.find(
                (table) => table.user_id === user?.id
              )?.number || "-"}
            </span>
          </div>
          <TransformWrapper
            initialScale={0.8}
            initialPositionX={0}
            initialPositionY={0}
            limitToBounds={false}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="tools p-3  flex justify-between w-full items-end bottom-0 absolute z-40">
                  <button
                    onClick={() => resetTransform()}
                    className="mr-2 p-2 bg-white border text-primary rounded"
                  >
                    <BiReset />
                  </button>
                  <div className="flex items-center gap-2 flex-col">
                    <button
                      onClick={() => zoomIn()}
                      className="mr-2 p-2 bg-white border text-primary rounded"
                    >
                      <BiPlus />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="mr-2 p-2 bg-white border text-primary rounded"
                    >
                      <BiMinus />
                    </button>
                  </div>
                </div>
                <TransformComponent wrapperClass="bg-white">
                  <div
                    style={{ width: "740px", height: "100%" }}
                    className="grid grid-cols-4 gap-4 gap-y-20 "
                  >
                    {tableData?.restaurant_table?.map((table, index) => (
                      <div
                        key={index}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-32 h-32 col-span-1 ${
                          table.user_id === user?.id
                            ? "bg-primary"
                            : "bg-gray-200"
                        }  rounded-lg border cursor-pointer`}
                      >
                        <div
                          className={`absolute inset-x-0 -bottom-5 flex justify-center space-x-2`}
                        >
                          <div
                            className={`w-1/2 h-4  ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-1/2 h-4  ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div
                          className={`absolute inset-x-0 -top-5 flex justify-center space-x-2`}
                        >
                          <div
                            className={`w-1/2 h-4   ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-1/2 h-4   ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div
                          className={`absolute h-32 inset-x-0 -left-5 flex justify-center flex-col space-y-2`}
                        >
                          <div
                            className={`w-4 h-1/2   ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-4 h-1/2   ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div
                          className={`absolute h-32 inset-x-0 -right-10 flex justify-center ml-5 items-end w-full flex-col space-y-2`}
                        >
                          <div
                            className={`w-4 h-1/2   ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-4 h-1/2   ${
                              table.user_id === user?.id
                                ? "bg-primary"
                                : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div className="flex items-center justify-center h-full text-white font-bold">
                          {table.number}
                        </div>
                      </div>
                    ))}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </CardContent>
      <CardFooter className="bg-indigo-50 bg-opacity-50 py-6 flex justify-between items-center">
        <p className="font-medium text-sm text-gray-700">
          Change or edit your table
        </p>
        <Link
          href={"order/table"}
          className="flex justify-center items-center gap-2"
        >
          <Button variant={"default"}>Manage Table </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const RestaurantDetails = () => {
  return (
    <div className="col-span-1 lg:col-span-2 relative h-full">
      <Card className="w-full shadow-none sticky top-3">
        <CardHeader className="flex flex-col gap-2 ">
          <CardTitle className="flex flex-row items-center">
            <h3 className="text-[18px]">Restaurant Details</h3>
          </CardTitle>
          <Image
            src="/images/restaurant.jpg"
            width={800}
            height={800}
            alt=""
            className="w-full rounded-lg h-[12rem]"
          />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between font-semibold text-[16px]">
                <span>Main Info</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Name</span>
                <span className="text-black font-medium">Bangor Sokab</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Rating</span>
                <span className="text-black font-medium">$5.00</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-[16px] mt-4">
                <span>Location</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span>Adress</span>
                <span className="text-black font-medium ">
                  Jl. Mampang Prapatan IX No. 1
                </span>
              </div>
              <div className="w-full mt-2 flex flex-col gap-4">
                <MapDefault />
                <div className="flex justify-center items-center gap-2 w-full">
                  <Button
                    variant={"outline"}
                    className="border-primary text-primary"
                  >
                    Copy Address
                  </Button>
                  <Button variant={"default"} className="w-full">
                    Get Direction
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
