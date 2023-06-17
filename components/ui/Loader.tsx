"use client";
import React, { ReactElement } from "react";
import style from "../styles/loader.module.css";
import { motion } from "framer-motion";
interface Props {}

export default function Loader({}: Props): ReactElement {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="z-50 text-white fixed bottom-5 w-full h-32 p-4 flex items-center text-3d text-5xl"
    >
      <div className="font-bold text-3d text-5xl [&>div]:inline mr-1">
        <span className="">L</span>
        <span className="">O</span>
        <span className="">A</span>
        <span className="">D</span>
        <span className="">I</span>
        <span className="">N</span>
        <span className="">G</span>
      </div>

      <span className="animate-[bounce_500ms_150ms_infinite_alternate]">.</span>
      <span className="animate-[bounce_500ms_200ms_infinite_alternate]">.</span>
      <span className="animate-[bounce_500ms_250ms_infinite_alternate]">.</span>
      <span className="animate-[bounce_500ms_300ms_infinite_alternate]">.</span>
    </motion.div>
  );
}
