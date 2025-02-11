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

const page = () => {
  const id = "334902445";

  return (
    <div className="p-3 grid grid-cols-6 gap-3">
      <div className="col-span-1 lg:col-span-4 flex flex-col">
        <Card className=" shadow-none ">
          <CardHeader className="flex justify-between flex-row items-center w-full">
            <div className="flex flex-col gap-4">
              <CardTitle className="flex flex-row items-center gap-4">
                <span className="bg-yellow-400 w-2 h-2 rounded-full"></span>
                <h2 className="text-2xl">Order ID: {id}</h2>
              </CardTitle>
              <CardDescription className="text-sm font-semibold">
                8 January, 2022 - 12:00 PM
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <OrderActiveCardItems />
            <CurrentTableOrder />
            <OrderSummary />
          </CardContent>
        </Card>
      </div>
      <RestaurantDetails />
    </div>
  );
};

export default page;
const OrderActiveCardItems = () => {
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
          {Array.from({ length: 3 }).map((_, index) => (
            <OrderActiveCardItem key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const OrderSummary = () => {
  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-4">
          <h3>Order Summary</h3>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex justify-center items-center gap-2">
            <span className="py-1 p-2 rounded-md bg-yellow-100 text-yellow-500 text-sm font-medium">
              Pending Payment
            </span>
          </div>
        </CardTitle>
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
      <CardFooter className="bg-indigo-50 bg-opacity-50 py-6 flex justify-between items-center">
        <p className="font-medium text-sm text-gray-700">
          Manage your order or finish your transaction
        </p>
        <div className="flex justify-center items-center gap-2">
          <Button variant={"outline"} className="border-primary text-primary">
            Cancel Order
          </Button>
          <Button variant={"default"}>Finish Payment</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const CurrentTableOrder = () => {
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
              7
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
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className={`relative w-32 h-32 ${
                          index === 7 ? "bg-primary" : "bg-gray-200"
                        }  rounded-lg border cursor-pointer`}
                      >
                        <div
                          className={`absolute inset-x-0 -bottom-5 flex justify-center space-x-2`}
                        >
                          <div
                            className={`w-1/2 h-4  ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-1/2 h-4  ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div
                          className={`absolute inset-x-0 -top-5 flex justify-center space-x-2`}
                        >
                          <div
                            className={`w-1/2 h-4   ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-1/2 h-4   ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div
                          className={`absolute h-32 inset-x-0 -left-5 flex justify-center flex-col space-y-2`}
                        >
                          <div
                            className={`w-4 h-1/2   ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-4 h-1/2   ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div
                          className={`absolute h-32 inset-x-0 -right-10 flex justify-center ml-5 items-end w-full flex-col space-y-2`}
                        >
                          <div
                            className={`w-4 h-1/2   ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                          <div
                            className={`w-4 h-1/2   ${
                              index === 7 ? "bg-primary" : "bg-gray-200"
                            } border rounded-md`}
                          ></div>
                        </div>
                        <div className="flex items-center justify-center h-full text-white font-bold">
                          {index}
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
        <div className="flex justify-center items-center gap-2">
          <Button variant={"default"}>Manage Table </Button>
        </div>
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
