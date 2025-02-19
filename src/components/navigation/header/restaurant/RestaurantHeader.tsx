import React from "react";
import { SearchNavigation } from "../SearchNavigation";
import MenuRefresh from "../MenuRefresh";
import { Separator } from "@/components/ui/separator";
import FilterCategory from "../FilterCategory";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import { useProductStore } from "@/store/productStore";

const RestaurantHeader = () => {
  const { productCategories, isProductCategoriesLoading } = useRestaurant({
    params: { restaurantId: 1 },
  });
  const { setProductsCategoryFilter } = useProductStore();

  const categoryInfo = productCategories
    ? productCategories?.reduce(
        (acc: { [key: string]: { id: number; count: number } }, item) => {
          const categoryName = item.name;
          if (acc[categoryName]) {
            acc[categoryName].count++;
          } else {
            acc[categoryName] = { id: item.id, count: 1 };
          }
          return acc;
        },
        {}
      )
    : null;

  const categories = Object.keys(categoryInfo ?? {}).map((name) => ({
    id: categoryInfo?.[name]?.id ?? 0,
    name,
    count: categoryInfo?.[name]?.count ?? 0,
  }));

  return (
    <div className="flex flex-col items-center sticky top-0 z-40 bg-white overflow-hidden ">
      <div className="flex items-center gap-3 sm:gap-4 w-full p-4 ">
        <FilterCategory
          Categories={categories}
          onClick={(categoryId) => {
            setProductsCategoryFilter(categoryId);
          }}
        />
        <div className="ml-auto flex items-center space-x-4">
          <MenuRefresh />
          <SearchNavigation />
        </div>
      </div>
      <Separator orientation="horizontal" className="w-full h-[0.7px]" />
    </div>
  );
};

export default RestaurantHeader;
