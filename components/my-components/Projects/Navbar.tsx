import React, { ReactElement } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className="sticky top-0 flex items-center justify-between text-white h-16 mb-4 backdrop-filter backdrop-blur-lg">
      <Link
        href="/"
        className="decoration-none flex items-center justify-center rounded-md border border-white px-2 text-white no-underline hover:scale-95 transition-all duration-150"
      >
        <ChevronLeft />
        Back
      </Link>

      <img
        src={"/logo.png"}
        alt={"Logo"}
        className="h-16 w-16 object-cover object-bottom rounded-full"
      />
    </div>
  );
}
