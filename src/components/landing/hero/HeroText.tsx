import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import HeroTextAnimated from "./HeroTextAnimated";
import HeroTextAnimatedTwo from "./HeroTextAnimatedTwo";
import MapDefault from "@/components/map";

const HeroText = () => {
  const ref = React.useRef(null);
  const TextControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      TextControls.start("animate");
    }
  }, [isInView, TextControls]);

  return (
    <div
      className=" font-medium text-[7.5rem]  lg:whitespace-nowrap flex flex-col gap-8"
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 1 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate={TextControls}
      >
        <HeroTextAnimated charDelay={0.2} />


      </motion.div>
      <MapDefault
        className="h-[22rem] w-screen  overflow-hidden"
        position={""}
      />
      <motion.div
        variants={{
          hidden: { opacity: 1 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate={TextControls}
      >
        <HeroTextAnimatedTwo charDelay={0.2} />

      </motion.div>

    </div>
  );
};

export default HeroText;
