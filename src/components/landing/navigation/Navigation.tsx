import React from "react";
import { BiMenu } from "react-icons/bi";
import { Playfair_Display } from "next/font/google";

const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const Navigation = () => {
  return (
    <div className="mix-blend-difference text-[#f7e3ca]   flex justify-between items-center w-full fixed  px-20 top-0 pt-10 pb-5 z-40">
      <p className="w-[15rem]">
        Revolutionize your restaurant experience with effortless management.
      </p>
      <span className="absolute ml-[20rem]">Manage & Grow</span>
      <h1 className={` text-5xl ml-auto mr-auto ${playfairSans.className}`}>
        DineLink
      </h1>
      <div
        className="absolute flex items-center 
      gap-10 right-[20rem]"
      >
        <p>Offers</p>
        <p>Services</p>
      </div>
      <div className="flex items-center gap-2 justify-end  mr-0 w-[15rem]">
        <p>Menu</p>
        <BiMenu />
      </div>
    </div>
  );
};

export default Navigation;
