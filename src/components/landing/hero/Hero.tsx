import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="flex justify-center items-center mt-[8rem]">
      <div
        className={`${playfairSans.className} text-[7.5rem] uppercase flex flex-col items-center gap-4`}
      >
        <div className="flex items-center">
          <h1>Your</h1>
          <Image
            src="/images/foodPlate.png"
            alt="plating of fried vegetables with shrimp"
            width={200}
            height={200}
          />
          <h1>Dining</h1>
        </div>

        <h1>activity, Simplified.</h1>
      </div>
    </div>
  );
};

export default Hero;
