import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const AboutRestaurant = () => {
  return (
    <div className="flex items-center flex-col gap-16 mt-12 justify-center">
      <h1 className={`${playfairSans.className} text-[6rem] uppercase`}>
        Manage your Restaurant.
      </h1>

      <div className="flex items-center gap-10">
        <div className="flex flex-col h-full gap-20">
          <div className="flex flex-col gap-4">
            <h3>Reduce wait times and improve customer experience.</h3>
            <div className="flex justify-between items-center mt-4">
              <h3>Try now</h3>
              <ArrowUpRight />
            </div>
            <Separator
              orientation="horizontal"
              className="border border-primary"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3>Manage your staff, menu, and operations effortlessly.</h3>
            <div className="flex justify-between items-center mt-4">
              <h3>Try now</h3>
              <ArrowUpRight />
            </div>
            <Separator
              orientation="horizontal"
              className="border border-primary"
            />
          </div>
        </div>
        <Image
          src="/images/chairsRestaurant.png"
          alt="restaurant interior"
          width={700}
          height={700}
        />
        <div className="flex flex-col h-full gap-20">
          <div className="flex flex-col gap-4">
            <h3>Reduce wait times and improve customer experience.</h3>
            <div className="flex justify-between items-center mt-4">
              <h3>Try now</h3>
              <ArrowUpRight />
            </div>
            <Separator
              orientation="horizontal"
              className="border border-primary"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3>Manage your staff, menu, and operations effortlessly.</h3>
            <div className="flex justify-between items-center mt-4">
              <h3>Try now</h3>
              <ArrowUpRight />
            </div>
            <Separator
              orientation="horizontal"
              className="border border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRestaurant;
