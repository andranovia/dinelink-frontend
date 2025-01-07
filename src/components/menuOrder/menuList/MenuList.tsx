import React from "react";
import MenuListItem from "./MenuListItem";

const MenuList = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-3 items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <MenuListItem key={item} />
      ))}
    </div>
  );
};

export default MenuList;
