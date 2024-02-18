import { Montserrat } from "next/font/google";
import React, { ReactElement } from "react";
import { Spotlight } from "./Spotlight";

interface Props {}

const Font = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});
export default function Hero({}: Props): ReactElement {
  return (
    <div className="relative overflow-clip min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] text-white"></div>
      <Spotlight
        className="top-16 left-10 md:left-50 md:-top-20 lg:left-96 xl:left-[27rem]"
        fill="white"
      />
      <div
        className={`${Font.className} relative bottom-4 text-white max-w-6xl px-6 text-[1.75rem] font-semibold leading-tight md:text-[2.5rem] lg:text-[3.5rem]`}
      >
        Hello! I am{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 from-10%  via-golden via-15% to-purple-500 to-100%  lg:tracking-wide">
          Deepak Bhattarai.
        </span>{" "}
        A developer who builds website that are{" "}
        <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 from-10%  via-golden via-15% to-purple-500 to-100%">
          {" "}
          more than just functional{" "}
        </span>
      </div>
    </div>
  );
}
