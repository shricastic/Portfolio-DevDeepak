"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectSectionTitle = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-50%", "end end"],
  });
  const opacityOfTheBorder = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5, 1],
    [0, 1, 1, 0]
  );
  const scaleOfTheBorder = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.6, 1],
    [0.5, 1, 1, 0.9]
  );
  const actualTextOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const actualTextScale = useTransform(scrollYProgress, [0.9, 1], [0.5, 1]);

  const movingTextOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100vw"]);

  return (
    <motion.div
      ref={targetRef}
      className="flex h-screen w-screen flex-1 items-center justify-center"
    >
      <motion.div className="pointer-events-none relative grid aspect-square h-[50%] items-center">
        <motion.div
          style={{
            opacity: opacityOfTheBorder,
            scale: scaleOfTheBorder,
          }}
          className="absolute inset-0 border-[2rem] border-golden border-r-transparent bg-transparent md:border-[3rem]"
        />
        <motion.div
          style={{
            opacity: opacityOfTheBorder,
            scale: scaleOfTheBorder,
          }}
          className="absolute inset-0 z-50 border-[2rem] border-transparent border-r-golden bg-transparent md:border-[3rem]"
        />

        <motion.div
          style={{ x, opacity: movingTextOpacity }}
          className="absolute z-40"
        >
          <span className="whitespace-nowrap font-mono text-[6rem] text-white md:text-[8rem] lg:text-[10rem]">
            My Projects
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute text-center text-6xl font-bold text-white md:text-7xl"
        style={{ opacity: actualTextOpacity, scale: actualTextScale }}
      >
        My <br /> projects
      </motion.div>
    </motion.div>
  );
};
export default ProjectSectionTitle;
