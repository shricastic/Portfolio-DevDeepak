import React, { ReactElement } from "react";
import Image from "next/image";
interface Props {}

export default function Background({}: Props): ReactElement {
  return (
    <div className="h-full w-screen absolute flex items-center justify-center pointer-events-none bg-black/30">
      <div className="h-full w-full bg-[url('/leatherbg.webp')] bg-repeat bg-contain mix-blend-multiply" />
    </div>
  );
}
