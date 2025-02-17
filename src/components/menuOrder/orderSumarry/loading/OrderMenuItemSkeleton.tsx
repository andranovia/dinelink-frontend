import React from "react";

const OrderMenuItemSkeleton = () => {
  return (
    <div className="flex gap-3 animate-pulse">
      <div className="rounded-md w-[5rem] h-[4rem] bg-gray-200" />
      <div className="flex flex-col gap-2 justify-between w-full">
        <div className="flex flex-col gap-1">
          <div className="h-3 bg-gray-200 rounded w-3/4" />
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="h-2 bg-gray-200 rounded w-1/2" />
            <span className="flex h-1 w-1 rounded-full bg-gray-400" />
            <div className="h-2 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-3 bg-gray-200 rounded w-1/4" />
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-200 rounded w-3" />
            <div className="h-3 bg-gray-200 rounded w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenuItemSkeleton;
