import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import React from "react";
const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="bg-slate-50  py-12 p-20 overflow-hidden flex items-center flex-col gap-20 w-full">
      <div className="flex items-center flex-col gap-6  justify-center">
        <h1 className={`${playfairSans.className} text-[5rem] uppercase`}>
          Connect with us
        </h1>
        <div className="flex items-center gap-4">
          <Button
            variant={"outline"}
            className="uppercase rounded-full px-10 pr-20 border-primary py-6"
          >
            Enter your email
          </Button>
          <Button
            variant={"default"}
            className="uppercase rounded-full px-10 border-primary py-6"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className=" flex items-center  mb-0 justify-between relative w-full ">
        <div className="space-y-4 w-1/4 ">
          <h2 className="text-2xl font-semibold">DineLink</h2>
          <p className="text-sm">
            Explicitly show what we are, showing to others, embracing equalifent
            subnaficant effect within times and location. Knowing what beside
            equality in our themes.
          </p>
        </div>

        <div className="space-y-4 relative md:left-10 w-40">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Clothings
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Jackets
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Sweaters
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 relative md:left-10 w-40">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Clothings
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Jackets
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Sweaters
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 relative md:left-10 w-40">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Clothings
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Shoes
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Jackets
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Sweaters
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <div className="self-end text-sm">
          &copy; 2023 Noirythm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
