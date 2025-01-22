import React from "react";
import { SearchNavigation } from "../SearchNavigation";
import MenuRefresh from "../MenuRefresh";
import { Separator } from "@/components/ui/separator";
import { DatePickerRange } from "./DatePickerRange";

const OrderHistoryHeader = () => {
  return (
    <div className="flex flex-col items-center sticky top-0 z-40 bg-white">
      <div className="flex items-center gap-3 sm:gap-4 w-full p-4 ">
        <DatePickerRange />
        <div className="ml-auto flex items-center space-x-4">
          <MenuRefresh />
          <SearchNavigation />
        </div>
      </div>
      <Separator orientation="horizontal" className="w-full h-[0.7px]" />
    </div>
  );
};

export default OrderHistoryHeader;
