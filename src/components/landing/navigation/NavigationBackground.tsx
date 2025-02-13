import React from "react";
import { motion } from "framer-motion";
import { defaultTransition } from "@/components/animation";

const NavigationBackground = ({
  navigationToggle,
}: {
  navigationToggle: boolean;
}) => {
  return (
    <motion.div
      transition={defaultTransition}
      animate={{
        height: navigationToggle ? "100vh" : "132px",
      }}
      className={`mix-blend-overlay flex justify-between  z-20 items-center w-full fixed   px-20 top-0 pt-10 pb-5 bg-gradient-to-b from-black to-transparent backdrop-blur-sm`}
    ></motion.div>
  );
};

export default NavigationBackground;
