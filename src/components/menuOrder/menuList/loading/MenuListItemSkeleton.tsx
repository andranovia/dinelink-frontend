import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const MenuListItemSkeleton = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return (
    <Card className={cn("w-auto animate-pulse", className)} {...props}>
      <CardHeader className="rounded-lg p-3 pb-0 relative">
        <div className="w-full h-[10rem] bg-gray-100 rounded-lg"></div>
        <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-[18px]">
          <span className="flex h-2 w-2 rounded-full bg-gray-100"></span>
          <span className="text-xs font-semibold bg-gray-100 h-4 w-16 rounded"></span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 w-full p-3">
        <div className="w-full">
          <div className="mb-4 grid items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-1 w-full flex justify-between items-center">
              <p className="text-sm font-medium leading-none bg-gray-100 h-4 w-24 rounded"></p>
              <span className="text-sm font-semibold bg-gray-100 h-4 w-12 rounded"></span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-3">
        <div className="w-full bg-gray-100 h-8 rounded"></div>
      </CardFooter>
    </Card>
  );
};

export default MenuListItemSkeleton;
