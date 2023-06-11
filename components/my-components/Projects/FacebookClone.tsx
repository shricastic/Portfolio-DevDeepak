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

export default function FacebookClone({}: Props): ReactElement {
  return (
    <article className="flex items-center justify-center flex-col p-4 md:p-8 lg:flex-row lg:p-16 text-white h-screen">
      <div className="space-y-4 lg:space-y-8 flex-1 h-full">
        <div className="h-full relative w-full">
          <Image
            src={"/facebook-clone.png"}
            fill
            className="object-contain"
            alt="Facebook clone homepage image"
          ></Image>
        </div>
        <div className="space-x-4">
          <button>Learn More</button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>Visit</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex-1 text-center">Hello there</div>
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
