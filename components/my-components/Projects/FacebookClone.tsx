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

export default function FacebookClone({}: Props): ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <motion.article
      ref={targetRef}
      style={{ x }}
      className="flex h-screen w-screen flex-1 flex-col-reverse p-4 text-white md:p-8 lg:flex-row lg:items-center lg:justify-center lg:p-16"
    >
      <div className="grid h-full flex-1 place-items-center lg:block lg:space-y-4">
        <div className="relative h-96 w-full lg:h-3/4">
          <Image
            src={"/facebook-clone.png"}
            fill
            className=" object-cover"
            alt="Facebook clone homepage image"
          ></Image>
        </div>
        <div className="space-y-12 text-lg">
          <div className="space-x-8">
            <button className="rounded-md bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-white/70 active:scale-90">
              Learn More
            </button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="relative">
                    <span className=" absolute -inset-10 -z-10 bg-gradient-radial from-[#1778F2] to-transparent opacity-70 blur-md transition-all duration-150 "></span>
                    <button className="group relative isolate rounded-md bg-gradient-to-br from-[#1778F2]  to-blue-400 px-8 py-2.5 transition-all duration-150  active:scale-90">
                      Visit
                      <span className="absolute inset-[1px] -z-10 rounded-md bg-black transition-all duration-150 group-hover:opacity-0"></span>
                    </button>
                  </span>
                </TooltipTrigger>
                <TooltipContent sideOffset={20} side="top" className="mr-4">
                  <p>Full Version Coming Soon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Alert className="">
            <Terminal className="h-4 w-4"></Terminal>
            <AlertTitle>Full version is not Available to demo yet</AlertTitle>
            <AlertDescription>
              Due to various complexation the deployment of this app has been
              delayed
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className={`py-4 text-center text-[clamp(3.2rem,3.75rem,10vw)]  font-bold text-[#1778F2] lg:flex-1 lg:py-0  ${Font.className}`}
      >
        facebook clone
      </motion.div>
    </motion.article>
  );
}
