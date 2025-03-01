import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";
import React from "react";

const oswaldSans = Oswald({
  subsets: ["latin"],
});

const Cta = () => {
  return (
    <div className="flex items-center flex-col gap-6 mt-16 justify-center">
      <h1 className={`${oswaldSans.className} text-[5rem] uppercase`}>
        Explore the Convenience.
      </h1>
      <p className="w-3/5 text-center">
        Simplify your dining experience with DineLink. Streamline operations,
        manage staff, and grow your business with ease. Try it now!
      </p>
      <Button className="uppercase rounded-full px-10">Feel it yourself</Button>
    </div>
  );
};

export default Cta;
