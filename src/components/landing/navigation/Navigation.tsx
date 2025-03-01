"use client";

import React from "react";
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import { defaultTransition } from "@/components/animation";
import NavigationBackground from "./NavigationBackground";
import Link from "next/link";

const oswaldSans = Oswald({
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
        <h1 className={` text-5xl ml-auto mr-auto ${oswaldSans.className}`}>
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
        className={`fixed bg-slate-50 w-screen h-screen bg-opacity-80  flex justify-center items-center flex-col z-30 top-0 right-0 ${
          navigationToggle ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={false}
        animate={{
          opacity: navigationToggle ? 1 : 0,
        }}
        transition={{ ...defaultTransition, duration: 0.8 }}
      >
        <div
          className={`${oswaldSans.className} relative text-8xl font-medium text-primary flex flex-col gap-10 items-center px-5 pt-4`}
        >
          <Link
            href="/register"
            className={`${
              isLoginHovered
                ? "text-slate-400 before:opacity-0"
                : "text-primary before:translate-x-0 before:opacity-100"
            } text-primary  before:border-b-primary 
           before:content-['']  before:block before:absolute 
           before:border-l-[14px] before:border-l-transparent 
           before:border-r-[14px] before:border-r-transparent  
           before:border-b-[18px] before:top-[4rem] 
           before:-left-[2rem]  before:rotate-90 before:transition-[opacity,transform] before:rounded-sm  before:-translate-x-1`}
          >
            Register
          </Link>
          <Link
            href="/login"
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
            className="hover:text-primary text-slate-400 before:border-b-primary 
           before:content-[''] hover:before:opacity-100 before:block before:absolute 
           before:border-l-[14px] before:border-l-transparent 
           before:border-r-[14px] before:border-r-transparent  
           before:border-b-[18px] ] before:bottom-[2rem] 
           before:left-[1.6rem]   before:rotate-90 before:opacity-0 before:transition-[opacity,transform] before:rounded-sm hover:before:translate-x-0 before:-translate-x-1 "
          >
            Login
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
