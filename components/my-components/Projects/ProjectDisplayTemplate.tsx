"use client";

import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useRef,
} from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quattrocento_Sans } from "next/font/google";
const Font = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
import Link from "next/link";

type Props = {
  id: string;
  img: StaticImageData;
  aboutLink: string;
  Logo: ReactElement<any, string | JSXElementConstructor<any>>;
  colorStart: string;
  colorEnd: string;
} & (
  | { visitLink: string; codeLink?: never }
  | { visitLink?: never; codeLink: string }
);

export default function ProjectTemplate({
  id,
  img,
  aboutLink,
  visitLink,
  codeLink,
  Logo,
  colorStart,
  colorEnd,
}: Props): ReactElement {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <motion.article
      ref={targetRef}
      style={{ x }}
      id={id}
      className="flex h-screen w-screen flex-1 flex-col-reverse gap-12 p-4 text-white md:p-8 lg:flex-row lg:items-center lg:justify-center lg:gap-0 lg:p-16"
    >
      <div className=" h-full flex-1 space-y-16">
        <div className="relative h-80 md:h-96 w-full lg:h-3/4">
          <Image
            src={img}
            fill
            placeholder="blur"
            className="object-cover"
            alt="Facebook clone homepage image"
          ></Image>
        </div>
        <div className=" self-start justify-self-start text-base md:text-lg lg:space-y-16">
          <div className="space-x-8">
            <Link
              href={aboutLink}
              className="rounded-md bg-white px-4 py-2 font-bold text-black transition-all duration-150 hover:bg-white/70 active:scale-90"
            >
              Learn More
            </Link>

            <span className="relative">
              <span
                className={`absolute -inset-10 -z-10 bg-gradient-radial ${colorStart} to-transparent opacity-70 blur-md transition-all duration-150 `}
              ></span>
              <a
                href={codeLink ?? visitLink}
                className={`group relative isolate rounded-md bg-gradient-to-br ${colorStart} ${colorEnd} px-8 py-2.5 transition-all duration-150  active:scale-90`}
              >
                <span className="relative z-20">
                  {visitLink ? "Visit" : "Code"}
                </span>
                <span className="absolute inset-[1px] z-10 rounded-md bg-black transition-all duration-150 group-hover:opacity-0"></span>
              </a>
            </span>
          </div>
        </div>
      </div>
      {Logo}
    </motion.article>
  );
}
