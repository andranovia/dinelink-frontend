import { Button } from "@/components/ui/button";
import React from "react";
import { MdSmokingRooms } from "react-icons/md";

const RestaurantFacilities = () => {
  return (
    <div className="grid grid-cols-2 gap-y-6 justify-center items-center w-full">
      <div className="flex items-center mt-0  gap-4">
        <div className="p-2 rounded-full bg-primary text-white flex justify-center items-center">
          <MdSmokingRooms size={25} />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-gray-800">Smoking Area</h2>
        </div>
      </div>
      <div className="flex items-center mt-0  gap-4">
        <div className="p-2 rounded-full bg-primary text-white flex justify-center items-center">
          <MdSmokingRooms size={25} />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-gray-800">Smoking Area</h2>
        </div>
      </div>{" "}
      <div className="flex items-center mt-0  gap-4">
        <div className="p-2 rounded-full bg-primary text-white flex justify-center items-center">
          <MdSmokingRooms size={25} />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-gray-800">Smoking Area</h2>
        </div>
      </div>
      <div className="flex items-center mt-0  gap-4">
        <div className="p-2 rounded-full bg-primary text-white flex justify-center items-center">
          <MdSmokingRooms size={25} />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-gray-800">Smoking Area</h2>
        </div>
      </div>
      <div className="flex items-center col-span-2 gap-4 w-full justify-center">
        <Button variant="outline" className="w-full">
          View All
        </Button>
      </div>
    </div>
  );
};

export default RestaurantFacilities;
