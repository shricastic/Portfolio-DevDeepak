"use client";
import Spline from "@splinetool/react-spline";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Loader from "@/components/ui/Loader";
import ScrollDownIndicator from "@/components/ui/ScrollDownIndicator";

interface Props {}

export default function GoldenShapes({}: Props): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [shouldTheScrollIndicatorBeShown, setShouldTheScrollIndicatorBeShown] =
    useState(false);
  const controls = useAnimation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // ! Make the scroll Indicator visible 5 sec after the shapes have loaded
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (!isLoading && !hasScrolled) {
      timerRef.current = setTimeout(() => {
        setShouldTheScrollIndicatorBeShown(true);
      }, 5000);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isLoading, hasScrolled]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest !== 0) setHasScrolled(true);
  });

  return (
    <motion.div ref={targetRef} className="absolute z-40 h-full w-full">
      {shouldTheScrollIndicatorBeShown && (
        <ScrollDownIndicator
          scrollYProgress={scrollYProgress}
        ></ScrollDownIndicator>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="h-full"
      >
        <Spline
          renderOnDemand={true}
          scene="https://prod.spline.design/lPwY8NrODfpDr1iY/scene.splinecode"
          onLoad={() => {
            setIsLoading(false);
            controls.start({
              opacity: 1,
              transition: {
                duration: 1,
              },
            });
          }}
        />
      </motion.div>
      <AnimatePresence mode="wait">
        {isLoading && <Loader></Loader>}
      </AnimatePresence>
    </motion.div>
  );
}
