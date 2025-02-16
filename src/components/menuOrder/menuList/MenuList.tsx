import React from "react";
import MenuListItem from "./MenuListItem";
import { useRestaurant } from "@/hooks/services/useRestaurant";

const MenuList = () => {
  const { products } = useRestaurant({ params: { restaurantId: 1 } });

  return (
    <div className="grid grid-cols-4 w-full gap-3 items-center">
      {products?.map((item, index) => (
        <MenuListItem key={index} productData={item} />
      ))}
    </div>
  );
};

export default MenuList;
