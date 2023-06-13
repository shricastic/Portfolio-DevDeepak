import React, { ReactElement } from "react";
import Image from "next/image";
interface Props {}

export default function Background({}: Props): ReactElement {
  return (
    <div className="pointer-events-none absolute flex h-full w-screen items-center justify-center bg-black/30">
      <div className="h-full w-full bg-[url('/leatherbg.webp')] bg-contain bg-repeat mix-blend-multiply" />
    </div>
  );
}
