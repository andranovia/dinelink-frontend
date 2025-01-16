import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

type ExchangePointsCardProps = React.ComponentProps<typeof Card>;

const ExchangePointsCard = ({
  className,
  ...props
}: ExchangePointsCardProps) => {
  return (
    <Card className={cn("w-auto", className)} {...props}>
      <CardHeader>
        <CardTitle>Cashback 5%</CardTitle>
        <CardDescription>For purchases above $50 </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border h-[6rem] overflow-hidden">
          <Image
            src={"/images/exchange-promo.png"}
            alt="Discount"
            width={300}
            height={300}
            className={"w-full h-full object-cover object-left"}
          />
        </div>
        <div className="flex flex-col w-full items-center gap-2">
          <Progress value={50} className="bg-slate-300" />
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="p-1 border-yellow-500 border rounded-full">
                <BsStarFill className="text-yellow-500 " size={10} />
              </div>
              <span className="text-yellow-600">1125</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 border-yellow-500 border rounded-full">
                <BsStarFill className="text-yellow-500 " size={10} />
              </div>
              <span className="text-yellow-600">2000</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Redeem</Button>
      </CardFooter>
    </Card>
  );
};

export default ExchangePointsCard;
