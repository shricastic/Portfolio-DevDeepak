"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <div className="h-full bg-gradient-to-bl from-black to-slate-900">
      <div className="flex h-full  items-center justify-center flex-col xl:px-8">
        <div className="relative top-4 text-3xl font-bold tracking-widest text-white">
          About
        </div>

        <div className="flex h-full flex-col gap-4 lg:flex-row lg:items-center justify-center md:px-40 ">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{
              x: "0",
              transition: {
                duration: 0.5,
              },
            }}
            className="-mt-8 md:mt-0 flex items-center justify-center  flex-shrink-0 overflow-hidden"
          >
            <img
              src={"/deepak.jpeg"}
              className="
              rounded-full md:rounded-2xl
              aspect-auto h-40 w-40 md:h-80 md:w-80 lg:h-96 lg:w-auto object-cover object-top"
              alt=""
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 100,
              transition: {
                duration: 1,
              },
            }}
            className="p-2 mx-4  text-base md:text-lg text-white font-mono"
          >
            {"I'm"} a <strong> Full Stack Web Developer</strong> specializing in{" "}
            <span className="underline decoration-[#61Dbfb] decoration-wavy">
              React
            </span>
            ,{" "}
            <span className="underline decoration-black/30 decoration-wavy">
              Next.js
            </span>
            ,{" "}
            <span className="underline decoration-[#3C873A] decoration-wavy">
              Node JS
            </span>
            , and other popular libraries. I have a strong background in
            creating robust and efficient web applications with a passion for
            clean and organized code.
            <br /> I am proud to have built a fully functional Facebook clone,
            which showcases my proficiency in utilizing modern web technologies
            and frameworks to create complex, feature-rich applications.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
