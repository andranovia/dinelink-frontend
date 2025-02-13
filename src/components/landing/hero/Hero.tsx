import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="flex justify-center flex-col gap-[8rem] items-center mt-[8rem]">
      <div
        className={`${playfairSans.className} text-[7.5rem] uppercase flex flex-col items-center gap-4`}
      >
        <div className="flex items-center ">
          <h1>Your</h1>
          <Image
            src="/images/foodPlate.png"
            alt="plating of fried vegetables with shrimp"
            width={200}
            height={200}
          />
          <h1>Dining</h1>
        </div>

        <h1>activity, Simplified.</h1>
      </div>
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1">
          <div className="w-[200px] rounded-full h-[200px] absolute bg-orange-400"></div>
          <Image
            src="/images/foodPlate2.png"
            alt="plating of fried vegetables with shrimp"
            width={200}
            height={200}
            className="z-10 relative ml-2"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-3">
          <div className="flex w-full justify-between items-center">
            <h4 className="font-semibold text-2xl">01</h4>
            <div className="flex flex-col items-center gap-4  pr-10">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-mt-4 -ml-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <p className="font-semibold">10000+ restaurant trusted</p>
            </div>
          </div>
          <Separator className="w-full mt-4 border" />
          <div className="flex justify-between ">
            <p className="w-[25rem] text-lg">
              Whether you&apos;re a customer, cashier, waiter, or business
              owner, [Your Product Name] connects everyone for a smoother,
              smarter dining journey.
            </p>
            <Separator
              orientation="vertical"
              className="h-[14rem] -mt-12 border"
            />
            <div className="pr-10 pt-4">
              <div className="w-[150px] rounded-full h-[150px] absolute bg-primary"></div>
              <Image
                src="/images/pork-steak.png"
                alt="plating of fried vegetables with shrimp"
                width={200}
                height={200}
                className="z-10 relative -ml-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
