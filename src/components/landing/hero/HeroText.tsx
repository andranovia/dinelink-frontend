import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import HeroTextAnimated from "./HeroTextAnimated";
import HeroTextAnimatedTwo from "./HeroTextAnimatedTwo";

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
      className=" font-medium text-[7.5rem]  lg:whitespace-nowrap "
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
        <HeroTextAnimatedTwo charDelay={0.2} />
      </motion.div>
    </div>
  );
};

export default HeroText;
