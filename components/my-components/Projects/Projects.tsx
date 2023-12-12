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
  return <div></div>;
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
