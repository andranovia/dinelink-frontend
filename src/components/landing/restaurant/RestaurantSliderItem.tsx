"use client";

import React from "react";
import Image from "next/image";
import { FaSmoking, FaStar } from "react-icons/fa";
import useWindowSize from "@/hooks/ui/useWindowSize";
import { Button } from "@/components/ui/button";
import { BiRestaurant, BiWifi } from "react-icons/bi";

interface RestaurantItem {
  id: number;
  name: string;
  image: string;
  average_rating: number;
  description: string;
}

interface RestaurantItemCardProps {
  item: RestaurantItem;
}

const RestaurantItem: React.FC<RestaurantItemCardProps> = ({ item }) => {
  const windowSize = useWindowSize();
  const wWidth = windowSize.width ?? 0;
  const roundedRating = Math.round(item.average_rating);

  return (
    <div className="h-full">
      <div
        className={
          "rounded-md flex  flex-col  items-center !w-[16rem]  border border-[#e2e2e2] xl:border-none  xl:!w-[20rem] h-full overflow-hidden"
        }
      >
        <div
          className={
            "!w-[20rem] !h-[16rem] min-h-[12rem] xl:!w-[20rem] xl:!h-[12rem] overflow-hidden"
          }
        >
          <div className="flex justify-center items-center p-1 px-2 rounded-md absolute bg-white gap-1 right-3 top-3">
            <span className="flex h-2 w-2  rounded-full bg-green-500" />
            <span className="text-xs font-semibold">Available</span>
          </div>
          <Image
            src={item.image}
            alt={item.name}
            width={260}
            height={260}
            className={"w-full h-full object-cover flex"}
          />
        </div>

        <div
          className={
            " z-20 flex flex-col xl:justify-center  flex-grow pt-3 gap-4 min-h-[18.5rem] w-full px-4 xl:p-4  bg-white h-full relative border overflow-hidden rounded-b-md"
          }
        >
          <div className="w-full flex flex-col ">
            <h4 className="text-lg font-semibold line-clamp-1 ">{item.name}</h4>
            <p className="text-base font-light mb-2 min-h-[3rem]">
              {item.description}
            </p>
            <div className="flex items-center gap-1">
              <div className="flex xl:justify-center gap-1 xl:gap-2">
                {isValidArrayLength(roundedRating) && (
                  <>
                    {[...Array(roundedRating)].map((_, index) => (
                      <FaStar key={index} size={15} color="#fbbf24" />
                    ))}
                    {[...Array(5 - roundedRating)].map((_, index) => (
                      <FaStar
                        key={index + roundedRating}
                        size={wWidth < 1024 ? 10 : 15}
                        color="grey"
                      />
                    ))}
                  </>
                )}
              </div>
              <span className="text-xs font-medium text-gray-700">
                ({item.average_rating ? item.average_rating : 0})
              </span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3 mt-auto">
            <Button
              className={`w-full items-center px-3 flex justify-between  col-span-3 bg-yellow-100 hover:bg-yellow-100 text-yellow-700 hover:text-yellow-700 `}
              variant="ghost"
              size="icon"
            >
              <BiRestaurant className="text-2xl" />
              <span className="font-medium text-sm">24 Total Menu</span>
            </Button>
            <Button
              className={`w-full items-center px-3 flex justify-between  col-span-2 bg-pink-100 hover:bg-pink-100 text-pink-700 hover:text-yellow-700 `}
              variant="ghost"
              size="icon"
            >
              <BiRestaurant className="text-2xl" />
              <span className="font-medium text-sm">3 Floor</span>
            </Button>
            <Button
              className={`w-full items-center px-3 flex justify-center   bg-blue-100 hover:bg-blue-100 text-blue-700 hover:text-blue-700 `}
              variant="ghost"
              size="icon"
            >
              <BiWifi />
            </Button>
            <Button
              className={`w-full items-center px-3 flex justify-center   bg-rose-100 hover:bg-rose-100 text-rose-700 hover:text-rose-700 `}
              variant="ghost"
              size="icon"
            >
              <FaSmoking />
            </Button>
            <Button
              className={`w-full items-center px-3 flex justify-between col-span-3   bg-teal-100 hover:bg-teal-100 text-bg-teal-700 hover:text-teal-700 `}
              variant="ghost"
              size="icon"
            >
              <BiRestaurant className="text-2xl" />
              <span className="font-medium text-sm">10 - 15 min serving</span>
            </Button>
            <Button
              className="w-full bg-primary text-white mt-2 col-span-5"
              onClick={() => console.log("clicked")}
            >
              Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
function isValidArrayLength(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}

export default RestaurantItem;
