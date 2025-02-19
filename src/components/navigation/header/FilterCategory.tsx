import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import { useProductStore } from "@/store/productStore";
import React from "react";

type FilterCategoryProps = {
  Categories: {
    id: number;
    name: string;
    count: number;
  }[];
  onClick?: (categoryId: number) => void;
};

const FilterCategory = ({ Categories, onClick }: FilterCategoryProps) => {
  const { productsCategoryFilter } = useProductStore();
  const { products } = useRestaurant({ params: { restaurantId: 1 } });

  return (
    <div className="flex items-center gap-2 overflow-auto scrollbar scrollbar-h-1 scrollbar-track-slate-200 scrollbar-thumb-secondary pb-1.5 scrollbar-thumb-rounded-md scrollbar-track-rounded-md max-w-[50vw]">
      <Button
        onClick={() => onClick && onClick(0)}
        className={`w-full items-center px-3 border  ${
          productsCategoryFilter === 0
            ? "bg-primary text-white"
            : "bg-white text-primary"
        } `}
      >
        <span className="font-medium text-sm">All</span>
        <div
          className={`h-auto auto  rounded-md px-1.5 ${
            productsCategoryFilter === 0 ? "bg-slate-700" : "bg-slate-200"
          }`}
        >
          {(products && products.length) || 0}
        </div>
      </Button>
      <Separator orientation="vertical" className="h-4" />
      {Categories.map((category, index) => (
        <Button
          onClick={() => onClick && onClick(category.id)}
          key={index}
          className={`w-full items-center px-3 border ${
            productsCategoryFilter === category.id
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
          variant={"outline"}
        >
          <span className="font-medium text-sm">{category.name}</span>
          <div
            className={`h-auto auto bg-slate-200 rounded-md px-1.5 ${
              productsCategoryFilter === category.id
                ? "bg-slate-700"
                : "bg-slate-200"
            }`}
          >
            {category.count}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default FilterCategory;
