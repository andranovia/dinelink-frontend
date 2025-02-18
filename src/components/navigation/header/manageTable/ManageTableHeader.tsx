import React from "react";
import { Separator } from "@/components/ui/separator";
import FilterCategory from "../FilterCategory";

const ManageTableHeader = () => {
  return (
    <div className="flex flex-col items-center sticky top-0 z-40 bg-white">
      <div className="flex items-center gap-3 sm:gap-4 w-full p-4 ">
        <FilterCategory
          Categories={[
            { name: "Breakfast", count: 3 },
            { name: "Lunch", count: 5 },
            { name: "Dinner", count: 7 },
          ]}
        />
      </div>
      <Separator orientation="horizontal" className="w-full h-[0.7px]" />
    </div>
  );
};

export default ManageTableHeader;
