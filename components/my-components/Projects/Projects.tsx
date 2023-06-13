"use client";
import React, { ReactElement, useRef } from "react";
import ProjectsSectionTitle from "./ProjectsSectionTitle";
import FacebookClone from "./FacebookClone";
import SuperGuest from "./SuperGuest";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {}

export default function Projects({}: Props): ReactElement {
  const targetRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-150vw", "-290vw"]
  );
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ x, y }}
      ref={targetRef}
      className="sticky top-0 flex w-max flex-shrink-0 items-start gap-[50vw] overflow-hidden"
    >
      <ProjectsSectionTitle></ProjectsSectionTitle>
      <FacebookClone></FacebookClone>
      <SuperGuest></SuperGuest>
    </motion.div>
  );
}
