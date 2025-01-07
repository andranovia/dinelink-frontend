import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { BiPlus } from "react-icons/bi";

type MenuListItemProps = React.ComponentProps<typeof Card>;

const MenuListItem = ({ className, ...props }: MenuListItemProps) => {
  return (
    <Card className={cn("w-auto ", className)} {...props}>
      <CardHeader className="rounded-lg p-3 pb-0 relative">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="bangoran"
          width={200}
          height={200}
          className="w-full h-[10rem] object-cover rounded-lg"
        />
        <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-[18px]">
          <span className="flex h-2 w-2  rounded-full bg-green-500" />
          <span className="text-xs font-semibold">Available</span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 w-full p-3">
        <div className="w-full">
          <div className="mb-4 grid items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-1 w-full flex justify-between items-center">
              <p className="text-sm font-medium leading-none">
                Bangoran&apos;s Sapi
              </p>
              <span className="text-sm font-semibold">$5.00</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-3">
        <Button className="w-full">
          <BiPlus /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuListItem;
