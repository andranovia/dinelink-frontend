import { CartItem } from "@/types/cart";
import Image from "next/image";
import React from "react";

const OrderActiveCardItem = ({ productData }: { productData?: CartItem }) => {
  return (
    <div className="flex gap-3">
      <Image
        src={productData?.product.image || "/images/burger.jpg"}
        alt="burger"
        width={80}
        height={80}
        className="rounded-md w-[5.5rem] h-[5.5rem] object-cover"
      />
      <div className="flex flex-row gap-2 justify-between w-full">
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="flex flex-col gap-1 ">
            <p className="font-semibold text-base">
              {productData?.product.name}
              <span className="tracking-widest text-gray-500 font-medium">
                &nbsp;(1)
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Notes: {productData?.notes} </span>
              <span className="flex h-1 w-1  rounded-full bg-gray-500" />
              <span>Size: {productData?.size}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">
              $ {productData?.product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderActiveCardItem;
