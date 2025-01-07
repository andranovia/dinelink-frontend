import React from "react";
import RestaurantCategory from "./RestaurantCategory";
import { SearchNavigation } from "./SearchMenu";
import MenuRefresh from "./MenuRefresh";

const RestaurantHeader = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 w-full p-4">
      <RestaurantCategory
        Categories={[
          { name: "Breakfast", count: 3 },
          { name: "Lunch", count: 5 },
          { name: "Dinner", count: 7 },
        ]}
      />
      <div className="ml-auto flex items-center space-x-4">
        <MenuRefresh />
        <SearchNavigation />
      </div>
    </div>
  );
};

export default RestaurantHeader;
