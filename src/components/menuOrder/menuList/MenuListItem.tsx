import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/restaurant";
import { CgUnavailable } from "react-icons/cg";
import Image from "next/image";
import React from "react";
import { BiPlus } from "react-icons/bi";

type MenuListItemProps = {
  productData?: ProductType;
  className?: string;
};

const MenuListItem = ({
  productData,
  className,
  ...props
}: MenuListItemProps) => {
  const getButtonLabel = (available: boolean) => {
    switch (available) {
      case true:
        return {
          label: "Unavailable",
          icon: <CgUnavailable className="text-white" />,
        };
      case false:
        return {
          label: "Add to cart",
          icon: <BiPlus className="text-white" />,
        };
      default:
        return {
          label: "Unavailable",
          icon: <CgUnavailable className="text-white" />,
        };
    }
  };

  return (
    <Card className={cn("w-auto ", className)} {...props}>
      <CardHeader className="rounded-lg p-3 pb-0 relative">
        <Image
          src={productData?.image || "https://via.placeholder.com/150"}
          alt="bangoran"
          width={200}
          height={200}
          className="w-full h-[10rem] object-cover rounded-lg"
        />
        {productData?.available ? (
          <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-[18px]">
            <span className="flex h-2 w-2  rounded-full bg-green-500" />
            <span className="text-xs font-semibold">Available</span>
          </div>
        ) : (
          <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-[18px]">
            <span className="flex h-2 w-2  rounded-full bg-red-500" />
            <span className="text-xs font-semibold">Unavailable</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="grid gap-4 w-full p-3">
        <div className="w-full">
          <div className="mb-4 grid items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-1 w-full flex justify-between items-center">
              <p className="text-sm font-medium leading-none">
                {productData?.name}
              </p>
              <span className="text-sm font-semibold">
                ${productData?.price}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-3">
        <Button
          className="w-full bg-primary"
          disabled={!productData?.available}
        >
          {getButtonLabel(!productData?.available).icon}
          {getButtonLabel(!productData?.available).label}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuListItem;
