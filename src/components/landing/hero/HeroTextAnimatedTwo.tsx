import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface props {
  charDelay: number;
}

const HeroTextAnimatedTwo = ({ charDelay }: props) => {
  const textControls = useAnimation();

  const text = "life,Simplified.";
  useEffect(() => {
    setTimeout(() => {
      textControls.start("animate");
    }, 1000);
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
          className={`flex items-center justify-center w-[1.1ch]`}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroTextAnimatedTwo;
HeroTextAnimatedTwo.displayName = "HeroTextAnimatedTwo";
