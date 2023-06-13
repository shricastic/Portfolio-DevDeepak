import React, { ReactElement } from "react";
import { Titillium_Web, Montserrat } from "next/font/google";
interface Props {}
const Font = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export default function Hero({}: Props): ReactElement {
  return (
    <div className="absolute z-40 flex items-center justify-center bg-transparent  text-white">
      <div
        className={`${Font.className} max-w-6xl px-14 text-2xl font-semibold leading-tight md:text-4xl  lg:text-5xl`}
      >
        Hello! I am{" "}
        <span className="font-bold text-golden  lg:tracking-wide">
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
