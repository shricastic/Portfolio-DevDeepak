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
      <motion.div
        animate={{
          x: ["0vw", "90vw", "0vw"],
          transition: {
            default: {
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          },
        }}
      >
        <motion.img
          animate={{
            rotateY: 180,
            transition: {
              rotateY: {
                duration: 0.0001,
                delay: 5,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 5,
              },
            },
          }}
          src="/stickman.gif"
          initial={{ x: 0 }}
          className="filter invert h-18 blur-0 w-12 object-contain -mb-8"
        ></motion.img>
        <span className="text-sm text-3d filter blur-0 tracking-wider">
          Loading
        </span>
      </motion.div>
    </motion.div>
  );
}
