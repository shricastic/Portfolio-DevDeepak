"use client";
import React, { ReactElement, useRef } from "react";
import ProjectsSectionTitle from "./ProjectsSectionTitle";
import fbCloneImg from "../../../asset/FacebookClone/img1.jpg";
import SGImg from "../../../asset/superguest/img1.png";
import PDFReaderImg from "../../../public/pdf-reader-showcase.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectDisplayTemplate from "./ProjectDisplayTemplate";
import { Quattrocento_Sans } from "next/font/google";

interface Props {}

const Font = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Projects({}: Props): ReactElement {
  const targetRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["0%", "-150vw", "-290vw", "-440vw"]
  );
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ x, y }}
      ref={targetRef}
      className="sticky top-0 flex w-max flex-shrink-0 items-start gap-[30vw] overflow-hidden lg:gap-[50vw]"
    >
      <ProjectsSectionTitle></ProjectsSectionTitle>
      <ProjectDisplayTemplate
        id="facebook-clone"
        Logo={<FacebookCloneLogo />}
        aboutLink="/facebook-clone"
        codeLink="https://github.com/DevDeepakBhattarai/facebook-clone/tree/master"
        img={fbCloneImg}
        colorStart="from-blue-500"
        colorEnd="to-blue-900"
      ></ProjectDisplayTemplate>
      <ProjectDisplayTemplate
        id="superguest"
        Logo={<SuperGuestLogo />}
        aboutLink="/SuperGuest"
        codeLink="https://github.com/DevDeepakBhattarai/Travel_MVP"
        img={SGImg}
        colorStart="from-red-500"
        colorEnd="to-orange-700"
      ></ProjectDisplayTemplate>
      <ProjectDisplayTemplate
        id="pdfreader"
        Logo={<PDFReaderLogo />}
        aboutLink="/pdf-reader"
        codeLink="https://github.com/DevDeepakBhattarai/ask-your-pdf"
        img={PDFReaderImg}
        colorStart="from-purple-500"
        colorEnd="to-purple-900"
      ></ProjectDisplayTemplate>
    </motion.div>
  );
}

function FacebookCloneLogo() {
  return (
    <motion.div
      initial={{ y: "var(--translate)" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={`py-4 text-center text-[2rem] md:text-6xl font-bold text-[#1778F2] [--translate:-100%] 0  md:[--translate:0%] lg:flex-1 lg:py-0 lg:[--translate:-12rem] `}
    >
      facebook clone
    </motion.div>
  );
}
function PDFReaderLogo() {
  return (
    <motion.div
      initial={{ y: "var(--translate)" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={`py-4 text-center text-[2rem] md:text-6xl font-bold text-purple-500  [--translate:-100%] 0  md:[--translate:0%] lg:flex-1 lg:py-0 lg:[--translate:-12rem]  ${Font.className}`}
    >
      PDF Reader
    </motion.div>
  );
}

function SuperGuestLogo() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={`py-4 text-center lg:flex-1 lg:py-0`}
    >
      <span
        className={`w-max overflow-hidden border border-white text-[2rem] md:text-6xl font-bold text-white ${Font.className}`}
      >
        <span className="bg-red-500">Super</span>
        <span>Guest</span>
      </span>
    </motion.div>
  );
}
