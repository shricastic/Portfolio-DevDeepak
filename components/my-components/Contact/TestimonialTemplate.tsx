import React, { ReactElement } from "react";
import Image from "next/image";
import { Quote } from "@/components/ui/Logos";
import { cn } from "@/lib/utils";
interface Props {
  giver: string;
  feedback: string;
  image?: string;
  status: string;
  displacement: number;
}

export default function TestimonialTemplate({
  giver,
  feedback,
  status,
  displacement,
  image,
}: Props): ReactElement {
  return (
    <div
      className={cn(
        "rounded-lg relative border border-white shadow-md shadow-white p-2 space-y-2",
        displacement > 0 ? "lg:left-8" : "left-0"
      )}
    >
      <div>
        <div className="h-12 w-12">
          <Quote></Quote>
        </div>

        <div className="font-sans">{feedback}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full aspect-square relative h-16 bg-gray-400 border-black border">
          {image && (
            <Image
              src={image}
              height={64}
              width={64}
              alt={`Image of ${giver}`}
              className="border-white border rounded-full"
            ></Image>
          )}
        </div>
        <div>
          <span className="font-semibold font-serif block">{giver}</span>
          <span className="font-serif font-thin block">{status}</span>
        </div>
      </div>
    </div>
  );
}
