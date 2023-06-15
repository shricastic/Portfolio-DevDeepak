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
import Link from "next/link";
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
      <div className="grid h-full flex-1 place-items-center md:gap-4 lg:block lg:gap-0 lg:space-y-4">
        <div className="relative h-96 w-full lg:h-3/4 overflow-hidden">
          <picture className="h-full w-full overflow-hidden">
            <source
              srcSet="/facebook-clone-small.jpg"
              className="object-cover"
              media="(max-width:450px)"
            />
            <img
              src="/facebook-clone.jpg"
              className="object-cover h-full w-full"
              alt="Facebook clone homepage image"
            />
          </picture>
        </div>
        <div className="space-y-12 text-lg md:justify-self-start">
          <div className="space-x-8">
            <Link
              href="/facebook-clone"
              className="rounded-md bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-white/70 active:scale-90"
            >
              Learn More
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="relative">
                    <span className=" absolute -inset-10 -z-10 bg-gradient-radial from-[#1778F2] to-transparent opacity-70 blur-md transition-all duration-150 "></span>
                    <a
                      href="https://github.com/DevDeepakBhattarai/facebook-clone/tree/master"
                      className="group relative isolate rounded-md bg-gradient-to-br  from-[#1778F2]  to-blue-400 px-8 py-2.5 transition-all duration-150  active:scale-90"
                    >
                      <span className="relative z-20">Code</span>
                      <span className="absolute inset-[1px] z-10 rounded-md bg-black transition-all duration-150 group-hover:opacity-0"></span>
                    </a>
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
        initial={{ y: "var(--translate)" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className={`py-4 text-center text-[clamp(3.2rem,3.75rem,10vw)] font-bold text-[#1778F2] [--translate:-100%] 0  md:[--translate:0%] lg:flex-1 lg:py-0 lg:[--translate:-12rem]  ${Font.className}`}
      >
        facebook clone
      </motion.div>
    </motion.article>
  );
}
