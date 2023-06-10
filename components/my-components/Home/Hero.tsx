import React, { ReactElement } from "react";
import { Titillium_Web, Montserrat } from "next/font/google";
interface Props {}
const Font = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function Hero({}: Props): ReactElement {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen text-white  bg-transparent">
      <div
        className={`${Font.className} leading-tight px-14 text-2xl md:text-4xl lg:text-5xl font-semibold  max-w-6xl`}
      >
        Hello! I am{" "}
        <span className="font-bold lg:tracking-wide  text-golden">
          Deepak Bhattarai.
        </span>{" "}
        A developer who builds website that are{" "}
        <span className="font-bold text-golden">
          {" "}
          more than just functional{" "}
        </span>
      </div>
    </div>
  );
}
