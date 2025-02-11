import Hero from "@/components/landing/hero/Hero";
import Navigation from "@/components/landing/navigation/Navigation";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center p-20">
      <Navigation />
      <Hero />
    </div>
  );
};

export default page;
