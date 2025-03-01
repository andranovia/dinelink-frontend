import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface props {
  charDelay: number;
}

const HeroTextAnimated = ({ charDelay }: props) => {
  const textControls = useAnimation();

  const text = "Your$Dining";
  useEffect(() => {
    textControls.start("animate");
  }, [textControls]);

  return (
    <motion.div
      className="flex items-center justify-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            mass: 0.5,
            damping: 20,
            stiffness: 80,
            restDelta: 0.001,
            restSpeed: 0.001,

            staggerChildren: charDelay,
          },
        },
      }}
    >
      {text.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={{
            hidden: { opacity: 0, y: 50 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 8,
                stiffness: 100,
              },
            },
          }}
          className={`flex items-center justify-center ${
            char === "$" ? "" : " w-[1.2ch]"
          }`}
        >
          {char === "$" ? (
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src="/images/foodPlate.png"
                alt="plating of fried vegetables with shrimp"
                width={200}
                height={200}
              />
            </motion.div>
          ) : (
            char
          )}
          &nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroTextAnimated;
HeroTextAnimated.displayName = "HeroTextAnimated";
