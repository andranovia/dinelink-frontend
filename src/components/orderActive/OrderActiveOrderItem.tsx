import Image from "next/image";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const OrderActiveCardItem = () => {
  return (
    <div className="flex gap-3">
      <Image
        src="/images/test-img.png"
        alt="burger"
        width={80}
        height={80}
        className="rounded-md w-[5.5rem] h-[5.5rem] object-cover"
      />
      <div className="flex flex-row gap-2 justify-between w-full">
        <div className="flex flex-col gap-2 justify-between w-full">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-base">
              Chicken Burger
              <span className="tracking-widest text-gray-500 font-medium">
                &nbsp;(1)
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Notes: None </span>
              <span className="flex h-1 w-1  rounded-full bg-gray-500" />
              <span>Size: Small</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">$99.00</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BiEdit size={20} />
          <BiTrash size={20} />
        </div>
      </div>
    </div>
  );
};

export default OrderActiveCardItem;
