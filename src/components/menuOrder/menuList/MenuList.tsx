import React from "react";
import MenuListItem from "./MenuListItem";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import MenuListItemSkeleton from "./loading/MenuListItemSkeleton";
import { useProductStore } from "@/store/productStore";
import { PiEmpty } from "react-icons/pi";

const MenuList = () => {
  const { productsCategoryFilter } = useProductStore();
  const {
    products,
    isProductsLoading,
    filteredProducts,
    isFilteredProductsLoading,
  } = useRestaurant({
    params: { restaurantId: 1 },
  });
  return (
    <div className={`grid grid-cols-4 w-full gap-3 `}>
      {isProductsLoading || isFilteredProductsLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <MenuListItemSkeleton key={index} />
        ))
      ) : (products && products?.length > 0) ||
        (filteredProducts && filteredProducts?.length > 0) ? (
        productsCategoryFilter === 0 ? (
          products?.map((item, index) => (
            <MenuListItem key={index} productData={item} />
          ))
        ) : (
          filteredProducts?.map((item, index) => (
            <MenuListItem key={index} productData={item} />
          ))
        )
      ) : (
        <div className="flex items-center justify-center col-span-4 h-full flex-col gap-6">
          <div className="bg-slate-100 p-4 rounded-full">
            <PiEmpty size={25} />
          </div>
          <span className="text-gray-500 text-sm">Your cart is empty..</span>
        </div>
      )}
    </div>
  );
};

export default MenuList;
