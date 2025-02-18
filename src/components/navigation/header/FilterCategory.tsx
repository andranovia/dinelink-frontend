import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

type FilterCategoryProps = {
  Categories: {
    name: string;
    count: number;
  }[];
};

const FilterCategory = ({ Categories }: FilterCategoryProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        className={`w-full items-center px-3 border  bg-primary text-white`}
      >
        <span className="font-medium text-sm">All</span>
        <div className="h-auto auto bg-slate-700 rounded-md px-1.5">
          {Categories.reduce((acc, category) => acc + category.count, 0)}
        </div>
      </Button>
      <Separator orientation="vertical" className="h-4" />
      {Categories.map((category, index) => (
        <Button
          key={index}
          className={`w-full items-center px-3 border `}
          variant={"outline"}
        >
          <span className="font-medium text-sm">{category.name}</span>
          <div className="h-auto auto bg-slate-200 rounded-md px-1.5">
            {category.count}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default FilterCategory;
