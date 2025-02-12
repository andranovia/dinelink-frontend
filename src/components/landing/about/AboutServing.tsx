import { Separator } from "@/components/ui/separator";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfairSans = Playfair_Display({
  subsets: ["latin"],
});

const AboutServing = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="flex gap-2 col-span-3">
        <div className={` flex flex-col gap-6`}>
          <h1 className={`${playfairSans.className} text-[6rem] uppercase`}>
            Work Smarter, Serve Better.
          </h1>
          <Separator
            orientation="horizontal"
            className="border-2 border-primary"
          />
          <div className="flex items-center gap-10">
            <div>
              <div className="w-[120px] rounded-full h-[120px] absolute bg-orange-400"></div>
              <Image
                src="/images/foodPlate2.png"
                alt="plating of fried vegetables with shrimp"
                width={120}
                height={120}
                className="z-20 relative ml-2"
              />
            </div>
            <p className="font-medium w-2/4">
              Streamline management with a unified system. Focus on what matters
              most, delivering exceptional service.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/servingPlate.png"
        alt="plating of fried vegetables with shrimp"
        width={800}
        height={800}
        className="z-20 relative ml-2 w-[40rem] col-span-2 -rotate-12 -mt-10"
      />
      <div className="bg-black w-[25rem] h-[25rem] rounded-full absolute right-14 mt-20 bg-opacity-30"></div>
    </div>
  );
};

export default AboutServing;
