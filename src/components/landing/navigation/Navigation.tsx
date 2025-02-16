"use client";

import React from "react";
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { defaultTransition } from "@/components/animation";
import NavigationBackground from "./NavigationBackground";

const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const Navigation = () => {
  const [navigationToggle, setNavigationToggle] = React.useState(false);
  const [isLoginHovered, setIsLoginHovered] = React.useState(false);

  return (
    <>
      <NavigationBackground navigationToggle={navigationToggle} />
      <div
        className={`mix-blend-difference text-[#f7e3ca]    flex justify-between items-center w-full fixed  px-20 top-0 pt-10 pb-5 z-40`}
      >
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
        <div
          className="flex items-center gap-2 justify-end  mr-0 w-[15rem]"
          onClick={() => setNavigationToggle(!navigationToggle)}
        >
          <p>Menu</p>
          <BiMenu />
        </div>
      </div>
      <motion.div
        onClick={() => setNavigationToggle(!navigationToggle)}
        className="fixed bg-slate-50 w-[10rem] h-[10rem]  flex justify-center items-start flex-col z-30 top-0 right-0 rounded-full"
        initial={false}
        animate={{
          scale: 7,
          x: navigationToggle ? 0 : 700,
          y: 200,
        }}
        transition={{ ...defaultTransition, duration: 0.8 }}
      >
        <div
          className={`${playfairSans.className} relative text-md font-medium text-primary flex flex-col items-end px-5 pt-4`}
        >
          <motion.h2
            initial={false}
            animate={{
              y: navigationToggle ? 0 : -40,
              rotate: navigationToggle ? -4 : 10,
            }}
            transition={{ ...defaultTransition, duration: 0.8 }}
            className={`${
              isLoginHovered
                ? "text-slate-400 before:opacity-0"
                : "text-primary before:translate-x-0 before:opacity-100"
            } text-primary  before:border-b-primary 
           before:content-['']  before:block before:absolute 
           before:border-l-[4px] before:border-l-transparent 
           before:border-r-[4px] before:border-r-transparent  
           before:border-b-[8px] before:top-[-10px] 
           before:left-2 before:-bottom-3 before:rotate-90 before:transition-[opacity,transform] before:rounded-sm  before:-translate-x-1`}
          >
            Register
          </motion.h2>
          <h2
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
            className="hover:text-primary text-slate-400 before:border-b-primary 
           before:content-[''] hover:before:opacity-100 before:block before:absolute 
           before:border-l-[4px] before:border-l-transparent 
           before:border-r-[4px] before:border-r-transparent  
           before:border-b-[8px] before:top-[2rem] 
           before:left-[2.7rem] before:-bottom-3 before:rotate-90 before:opacity-0 before:transition-[opacity,transform] before:rounded-sm hover:before:translate-x-0 before:-translate-x-1 "
          >
            Login
          </h2>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
