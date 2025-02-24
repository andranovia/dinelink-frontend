import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTableStore } from "@/store/tableStore";
import { RestaurantFloor } from "@/types/restaurant";
import React from "react";

type FilterFloorProps = {
  floor?: RestaurantFloor[];
  onClick?: (categoryId: number) => void;
  initialSelectedCategory: React.ReactNode;
};

const FilterFloor = ({
  floor,
  onClick,
  initialSelectedCategory,
}: FilterFloorProps) => {
  const { tablesCategoryFilter } = useTableStore();

  return (
    <div className="flex items-center gap-2 overflow-auto scrollbar scrollbar-h-1 scrollbar-track-slate-200 scrollbar-thumb-secondary pb-1.5 scrollbar-thumb-rounded-md scrollbar-track-rounded-md max-w-[50vw]">
      {initialSelectedCategory}
      <Separator orientation="vertical" className="h-4" />
      {floor
        ?.filter((category) => category.number !== 1)
        .map((category, index) => (
          <Button
            onClick={() => onClick && onClick(category.id)}
            key={index}
            className={`w-full items-center px-3 border ${
              tablesCategoryFilter === category.id
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            variant={"outline"}
          >
            <span className="font-medium text-sm">Floor</span>
            <div
              className={`h-auto auto bg-slate-200 rounded-md px-1.5 ${
                tablesCategoryFilter === category.id
                  ? "bg-slate-700"
                  : "bg-slate-200"
              }`}
            >
              {category.number}
            </div>
          </Button>
        ))}
    </div>
  );
};

export default FilterFloor;
