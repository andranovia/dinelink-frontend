import Image from "next/image";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const RestaurantPreview = () => {
  return (
    <>
      <div className="rounded-lg col-span-3 border overflow-hidden grid grid-rows-5 h-[37rem]">
        <Image
          src="/images/restaurant.jpg"
          width={800}
          height={800}
          alt=""
          className=" w-full row-span-4 object-cover"
        />
        <div className="bg-white rounded-t-3xl relative   p-6 flex justify-between items-center row-span-1">
          <div className="flex justify-center items-center gap-4">
            <span className="bg-green-400 w-3 h-3 rounded-full"></span>

            <div className="flex gap-2 flex-col">
              <h1 className=" text-4xl text-primary font-bold">Wingman Pub</h1>
              <div className="flex px-2 items-center gap-2 text-gray-500">
                <MdOutlineEmail />
                <span className=" text-sm font-medium ">
                  wingmanspub@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 px-4">
            <h1 className=" text-4xl text-primary font-bold">🍔🍵</h1>
          </div>
        </div>
      </div>
      <div className="grid px-3 gap-3">
        <Image
          src="/images/restaurant.jpg"
          width={800}
          height={800}
          alt=""
          className=" w-full h-full row-span-4 object-cover rounded-lg"
        />
        <Image
          src="/images/restaurant.jpg"
          width={800}
          height={800}
          alt=""
          className=" w-full h-full row-span-4 object-cover rounded-lg"
        />
        <Image
          src="/images/restaurant.jpg"
          width={800}
          height={800}
          alt=""
          className=" w-full h-full row-span-4 object-cover rounded-lg"
        />
      </div>
    </>
  );
};

export default RestaurantPreview;
