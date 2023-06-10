"use client";
import Spline from "@splinetool/react-spline";
import React, { ReactElement, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import Loader from "@/components/ui/Loader";

interface Props {}

export default function GoldenShapes({}: Props): ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  return (
    <motion.div className="sticky top-0 h-screen max-w-[100dvw]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="h-full"
      >
        <Spline
          ref={targetRef}
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2"
          >
            <Loader></Loader>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
