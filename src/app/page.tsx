import Hero from "@/components/landing/hero/Hero";
import Navigation from "@/components/landing/navigation/Navigation";
import NavigationBackground from "@/components/landing/navigation/NavigationBackground";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center p-20">
      <NavigationBackground />
      <Navigation />
      <div className="">
        <Hero />
      </div>
    </div>
  );
};

export default page;
