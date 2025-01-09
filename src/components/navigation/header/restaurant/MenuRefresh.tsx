import { Button } from "@/components/ui/button";
import React from "react";
import { IoRefreshCircle } from "react-icons/io5";

const MenuRefresh = () => {
  return (
    <Button
      className={`w-full items-center px-3 border  py-2 bg-white text-primary`}
      variant="ghost"
    >
      <IoRefreshCircle />
      <span className="font-medium text-sm">Refresh</span>
    </Button>
  );
};

export default MenuRefresh;
