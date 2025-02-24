import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTableStore } from "@/store/tableStore";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import FilterFloor from "./FilterFloor";
import { Button } from "@/components/ui/button";

const ManageTableHeader = () => {
  const { tablesCategoryFilter, setTablesCategoryFilter } = useTableStore();
  const { restaurantFloor } = useRestaurant({});

  return (
    <div className="flex flex-col items-center sticky top-0 z-40 bg-white">
      <div className="flex items-center gap-3 sm:gap-4 w-full p-4 ">
        <FilterFloor
          onClick={(categoryId) => setTablesCategoryFilter(categoryId)}
          initialSelectedCategory={
            <Button
              onClick={() => setTablesCategoryFilter(1)}
              className={`w-full items-center px-3 border  ${
                tablesCategoryFilter === 1
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } `}
            >
              <span className="font-medium text-sm">Floor</span>
              <div
                className={`h-auto auto  rounded-md px-1.5 ${
                  tablesCategoryFilter === 1 ? "bg-slate-700" : "bg-slate-200"
                }`}
              >
                1
              </div>
            </Button>
          }
          floor={restaurantFloor?.restaurant_floor}
        />
      </div>
      <Separator orientation="horizontal" className="w-full h-[0.7px]" />
    </div>
  );
};

export default ManageTableHeader;
