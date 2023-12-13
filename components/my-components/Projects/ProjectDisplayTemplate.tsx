"use client";

import React, { JSXElementConstructor, ReactElement, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quattrocento_Sans } from "next/font/google";
import Link from "next/link";

type Props = {
  id: string;
  previewImage: StaticImageData;
  description: string;
  learnMoreLink: string;
  primaryColor: string;
  secondaryColor: string;
  githubLink: string;
  children: React.JSX.Element;
  color: string;
};

export default function ProjectTemplate({
  id,
  previewImage,
  primaryColor,
  secondaryColor,
  githubLink,
  children,
  description,
  color,
  learnMoreLink,
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div>
      <div className="flex flex-col min-height-screen items-center lg:flex-row p-4 relative">
        <div ref={ref} className="h-screen w-full text-white grid items-center">
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="h-16 relative overflow-hidden w-max">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0, delay: 0.7 },
                  }}
                  // viewport={{ once: true }}
                >
                  {children}
                </motion.span>

                <motion.span
                  initial={{
                    position: "absolute",
                    inset: 0,
                    right: "40%",
                    zIndex: 100,
                    backgroundColor: color,
                  }}
                  // viewport={{ once: true }}
                  whileInView={{
                    right: ["0%", "0%"],
                    translateX: "100%",
                    transition: {
                      right: {
                        duration: 0.1,
                      },
                      translateX: {
                        duration: 0.3,
                        delay: 0.6,
                      },
                    },
                  }}
                ></motion.span>
              </h1>

              <div className=" text-lg font-sans max-w-xl h-max text-white relative overflow-hidden">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0, delay: 0.7 },
                  }}
                  // viewport={{ once: true }}
                >
                  {description}
                </motion.span>

                <motion.span
                  initial={{
                    position: "absolute",
                    height: "2.5rem",
                    top: 0,
                    left: 0,
                    right: "40%",
                    zIndex: 100,
                    backgroundColor: color,
                  }}
                  // viewport={{ once: true }}
                  whileInView={{
                    right: ["0%", "0%"],
                    translateX: "100%",
                    transition: {
                      right: {
                        duration: 0.1,
                      },
                      translateX: {
                        duration: 0.3,
                        delay: 0.6,
                      },
                    },
                  }}
                ></motion.span>

                <motion.span
                  initial={{
                    position: "absolute",
                    height: "2.5rem",
                    top: "3rem",
                    left: 0,
                    right: "40%",
                    zIndex: 100,
                    backgroundColor: color,
                  }}
                  // viewport={{ once: true }}
                  whileInView={{
                    right: ["0%", "0%"],
                    translateX: "100%",
                    transition: {
                      right: {
                        duration: 0.1,
                      },
                      translateX: {
                        duration: 0.3,
                        delay: 0.6,
                      },
                    },
                  }}
                ></motion.span>
              </div>
            </div>
            <div className=" self-start justify-self-start text-base md:text-lg">
              <div className="space-x-8">
                <Link
                  href={learnMoreLink}
                  className="rounded-md bg-white px-4 py-2 font-bold cursor-pointer text-black transition-all duration-150 hover:bg-white/70 active:scale-90"
                >
                  Learn More
                </Link>

                <span className="relative">
                  <span
                    className={`absolute -inset-10 -z-10 bg-gradient-radial ${primaryColor} to-transparent opacity-70 blur-md transition-all duration-150 `}
                  ></span>
                  <a
                    href={githubLink}
                    className={`group relative cursor-pointer isolate rounded-md bg-gradient-to-br ${primaryColor} ${secondaryColor} px-8 py-2.5 transition-all duration-150  active:scale-90`}
                  >
                    <span className="relative z-20">Code</span>
                    <span className="absolute inset-[1px] z-10 rounded-md bg-black transition-all duration-150 group-hover:opacity-0"></span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full aspect-video overflow-hidden rounded-lg shadow-sm shadow-white">
            <Image src={previewImage} alt={description}></Image>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
