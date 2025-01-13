import React from "react";
import { PiMoneyWavy } from "react-icons/pi";
import { BiCoinStack } from "react-icons/bi";

const RewardsExchangeCard = () => {
  return (
    <div className="flex items-center overflow-hidden rounded-md w-[18rem]  h-[5rem] ">
      <div className="w-[17%] h-[5rem] bg-blue-400 flex justify-center items-center p-3 relative">
        <div className="w-1 h-1 bg-white p-2 rounded-full absolute right-9 top-[50px]"></div>
        <div className="w-1 h-1 bg-white p-2 rounded-full absolute right-9 top-[18px]"></div>
      </div>
      <div className="px-3 h-full bg-blue-50 flex flex-col gap-2 justify-center">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 p-1  rounded-md border-[0.5px] flex justify-center items-center bg-white">
              <PiMoneyWavy />
            </div>
            <span className="font-semibold">$15</span>
          </div>
          <div className="flex items-center gap-2">
            <BiCoinStack className=" text-yellow-600" />{" "}
            <span className="text-xs font-semibold ">20000</span>
          </div>
        </div>
        <p className="text-xs font-medium text-gray-500 line-clamp-1">
          Get $15 Cashback on purchases above $120.
        </p>
      </div>
    </div>
  );
};

export default RewardsExchangeCard;
