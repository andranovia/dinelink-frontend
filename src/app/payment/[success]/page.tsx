"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useCheckout from "@/hooks/services/usePayment";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { BsCheck2Circle } from "react-icons/bs";
const Page = ({ params }: { params: Promise<{ success: string }> }) => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const { checkoutDetails, changeTransactionStatus } = useCheckout({
    successId: React.use(params).success,
    changeStatus: {
      orderId: orderId,
      status: "Finished",
    },
  });

  useEffect(() => {
    if (checkoutDetails && orderId) {
      changeTransactionStatus();
    }
  }, [checkoutDetails, orderId, changeTransactionStatus]);

  return (
    <div className="flex justify-center items-center py-6 flex-col gap-6">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary p-1 text-primary-foreground">
            <Image src="/images/brand.png" alt="Logo" width={24} height={24} />
          </div>
          <h1 className="text-2xl font-bold">DineLink</h1>
        </a>
      </div>
      <Separator />
      <div className="flex flex-col items-center gap-10 py-6">
        <div className="p-2 rounded-full bg-slate-100">
          <BsCheck2Circle size={50} />
        </div>
        <h1 className="text-2xl font-bold">Payment Successful</h1>
        <p className="text-gray-500 text-center">
          Your payment has been successfully processed.
        </p>
        <Separator />
        <div className="flex justify-center items-center gap-4 flex-col">
          <Card className="w-[35rem]">
            <CardContent className="flex flex-col gap-2  px-3 py-3">
              <div className="flex gap-3 items-center">
                <Image
                  src="/images/test-img.png"
                  alt="burger"
                  width={80}
                  height={80}
                  className="rounded-md w-[5rem] h-[5rem] object-cover"
                />
                <div className="flex flex-row gap-2 justify-between w-full">
                  <div className="flex gap-2 justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-base">
                        {checkoutDetails?.purchasedProducts[0].name}
                        <span className="tracking-widest text-gray-500 font-medium">
                          &nbsp;(
                          {checkoutDetails?.purchasedProducts[0].quantity})
                        </span>
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Notes: None </span>
                        <span className="flex h-1 w-1  rounded-full bg-gray-500" />
                        <span>Size: Small</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold">
                        ${" "}
                        {checkoutDetails &&
                          checkoutDetails?.purchasedProducts[0].amount / 100}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center items-center gap-3">
            <span className="text-primary font-semibold text-sm">
              +{" "}
              {checkoutDetails && checkoutDetails?.purchasedProducts.length - 1}{" "}
              more
            </span>
          </div>
        </div>
        <Separator />
        <Link href="/order/active" className="flex items-center gap-2">
          <Button variant={"default"} className="!p-6">
            Go to Active Order
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
