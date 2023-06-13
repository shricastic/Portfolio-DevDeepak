"use client";

import React, { ReactElement, useRef } from "react";
import Image from "next/image";
interface Props {}
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quattrocento_Sans } from "next/font/google";
const Font = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function SuperGuest({}: Props): ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <motion.article
      ref={targetRef}
      style={{ x }}
      className="flex h-screen w-screen flex-1 flex-col-reverse gap-10 p-4 text-white md:p-8 lg:flex-row lg:items-center lg:justify-center lg:gap-0 lg:p-16"
    >
      <div className=" h-full flex-1  space-y-14">
        <div className="relative h-96 w-full lg:h-3/4">
          <Image
            src={"/superguest.png"}
            fill
            className="object-cover"
            alt="Facebook clone homepage image"
          ></Image>
        </div>
        <div className=" self-start justify-self-start text-lg lg:space-y-16">
          <div className="space-x-8">
            <button className="rounded-md bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-white/70 active:scale-90">
              Learn More
            </button>
            <span className="relative">
              <span className=" absolute -inset-10 -z-10 bg-gradient-radial from-red-500 to-transparent opacity-70 blur-md transition-all duration-150 "></span>
              <button className="group relative isolate rounded-md bg-gradient-to-br from-red-500  to-orange-700 px-8 py-2.5 transition-all duration-150  active:scale-90">
                Visit
                <span className="absolute inset-[1px] -z-10 rounded-md bg-black transition-all duration-150 group-hover:opacity-0"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className={`py-4 text-center lg:flex-1 lg:py-0`}
      >
        <span
          className={`w-max overflow-hidden border border-white text-6xl font-bold text-white ${Font.className}`}
        >
          <span className="bg-red-500">Super</span>
          <span>Guest</span>
        </span>
      </motion.div>
    </motion.article>
  );
}
