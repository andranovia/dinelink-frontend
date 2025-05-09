"use client";

import AboutRestaurant from "@/components/landing/about/AboutRestaurant";
import AboutServing from "@/components/landing/about/AboutServing";
import Cta from "@/components/landing/cta/Cta";
import Footer from "@/components/landing/footer/Footer";
import Hero from "@/components/landing/hero/Hero";
import Navigation from "@/components/landing/navigation/Navigation";
import RestaurantSlider from "@/components/landing/restaurant/RestaurantSlider";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <div className="w-full h-full flex flex-col gap-20 justify-center items-center p-20  overflow-hidden">
        <Navigation />
        <div className="flex flex-col gap-14">
          <Hero />
          <RestaurantSlider />
          <AboutServing />
          <AboutRestaurant />
          <Cta />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
