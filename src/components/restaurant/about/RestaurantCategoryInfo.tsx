import { Card } from "@/components/ui/card";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import React from "react";
import { BiFoodMenu } from "react-icons/bi";

const RestaurantCategoryInfo = () => {
  const { products, productCategories, restaurantTable, restaurantFloor } =
    useRestaurant({});

  const arrayData = [
    {
      title: "Total Menu",
      icon: <BiFoodMenu size={30} />,
      value: products?.length,
    },
    {
      title: "Total Category",
      icon: <BiFoodMenu size={30} />,
      value: productCategories?.length,
    },
    {
      title: "Total Table",
      icon: <BiFoodMenu size={30} />,
      value: restaurantTable?.restaurant_table.length,
    },
    {
      title: "Total Floor",
      icon: <BiFoodMenu size={30} />,
      value: restaurantFloor?.restaurant_floor.length,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-3 w-full col-span-4">
      {arrayData.map((item, index) => (
        <Card
          className="flex shadow-none   flex-col  gap-4 col-span-1 w-full p-5"
          key={index}
        >
          <div className="flex  gap-4 items-center">
            <div className="p-1 rounded-md bg-primary text-white flex justify-center items-center">
              {item.icon}
            </div>
            <span className="font-semibold text-3xl">{item.value}</span>
          </div>
          <p className="font-medium text-xl text-gray-500">{item.title}</p>
        </Card>
      ))}
    </div>
  );
};

export default RestaurantCategoryInfo;
