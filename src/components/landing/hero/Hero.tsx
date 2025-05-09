import React from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import HeroText from "./HeroText";

const oswaldSans = Oswald({
  subsets: ["latin"],
});

const avatars = [
  { id: 1, className: "", delay: 0 },
  { id: 2, className: "-mt-4 -ml-2", delay: 0.2 },
  { id: 3, className: "-ml-2", delay: 0.4 },
];

const Hero = () => {
  return (
    <div className="flex justify-center flex-col gap-[8rem] items-center mt-[6rem]  overflow-hidden">
      <div
        className={`${oswaldSans.className}  uppercase flex flex-col items-center gap-4`}
      >
        <HeroText />
      </div>
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1">
          <div className="w-[200px] rounded-full h-[200px] absolute bg-orange-400"></div>
          <motion.div
            initial={{
              rotate: -80,
              x: -150,
            }}
            animate={{
              rotate: 0,
              x: 0,
            }}
            transition={{
              duration: 4,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <Image
              src="/images/foodPlate2.png"
              alt="plating of fried vegetables with shrimp"
              width={200}
              height={200}
              className="z-10 relative ml-2"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 col-span-3">
          <div className="flex w-full justify-between items-center">
            <h4 className="font-semibold text-2xl">01</h4>
            <div className="flex flex-col items-center gap-4  pr-10">
              <div className="flex items-center">
                {avatars.map((avatar) => (
                  <motion.div
                    key={avatar.id}
                    initial={{ y: 0 }}
                    animate={{ y: [-5, 0] }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: avatar.delay,
                    }}
                  >
                    <Avatar className={avatar.className}>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </motion.div>
                ))}
              </div>
              <p className="font-semibold">10000+ restaurant trusted</p>
            </div>
          </div>
          <Separator className="w-full mt-4 border" />
          <div className="flex justify-between ">
            <p className="w-[25rem] text-lg">
              Whether you&apos;re a customer, cashier, waiter, or business
              owner, DineLink connects everyone for a smoother, smarter dining
              journey.
            </p>
            <Separator
              orientation="vertical"
              className="h-[14rem] -mt-12 border"
            />
            <div className="pr-10 pt-4">
              <div className="w-[150px] rounded-full h-[150px] absolute bg-primary"></div>
              <motion.div
                initial={{
                  rotate: -80,
                  y: 150,
                }}
                animate={{
                  rotate: 0,
                  y: 0,
                }}
                transition={{
                  duration: 4,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <Image
                  src="/images/pork-steak.png"
                  alt="plating of fried vegetables with shrimp"
                  width={200}
                  height={200}
                  className="z-10 relative -ml-5"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
