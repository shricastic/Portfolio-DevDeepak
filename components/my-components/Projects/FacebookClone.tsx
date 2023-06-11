import React, { ReactElement } from "react";
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
import { Quattrocento_Sans } from "next/font/google";
const Font = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function FacebookClone({}: Props): ReactElement {
  return (
    <article className="flex items-center justify-center flex-col p-4 md:p-8 lg:flex-row lg:p-16 text-white h-screen">
      <div className=" space-y-4 flex-1 h-full">
        <div className="h-3/4 relative w-full">
          <Image
            src={"/facebook-clone.png"}
            fill
            className="object-contain"
            alt="Facebook clone homepage image"
          ></Image>
        </div>
        <div className="space-x-8 text-lg">
          <button className="py-2 px-4 bg-white rounded-md text-black font-bold hover:bg-white/70 active:scale-90 transition-all duration-150">
            Learn More
          </button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="relative">
                  <span className=" transition-all duration-150 absolute -inset-10 opacity-70 bg-gradient-radial blur-md -z-10 from-[#1778F2] to-transparent "></span>
                  <button className="isolate relative group active:scale-90 transition-all duration-150  py-2.5 px-8 rounded-md bg-gradient-to-br from-[#1778F2]  to-blue-400">
                    Visit
                    <span className="bg-black absolute rounded-md inset-[1px] -z-10 group-hover:opacity-0 transition-all duration-150"></span>
                  </button>
                </span>
              </TooltipTrigger>
              <TooltipContent sideOffset={20} side="top">
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div
        className={`flex-1 text-center text-6xl font-bold text-[#1778F2] ${Font.className}`}
      >
        facebook clone
      </div>
      {/* <Alert>
        <Terminal className="h-4 w-4"></Terminal>
        <AlertTitle>Not Available to demo yet</AlertTitle>
        <AlertDescription>
          Due to various complexation the deployment of this app has been
          delayed
        </AlertDescription>
      </Alert> */}
    </article>
  );
}
