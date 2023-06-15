"use client";
import dynamic from "next/dynamic";
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: true });
import React, { ReactElement, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Loader from "@/components/ui/Loader";

interface Props {}

export default function GoldenShapes({}: Props): ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  return (
    <motion.div className="absolute z-40 h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="h-full"
      >
        <Spline
          renderOnDemand={false}
          ref={targetRef}
          onScroll={(e) => {
            e.preventDefault();
          }}
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
