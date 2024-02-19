import React, { ReactElement } from "react";
import Image from "next/image";
import { Quote } from "@/components/ui/Logos";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface Props {
  giver: string;
  feedback: string;
  image?: string;
  status: string;
  displacement: number;
}
function getInitials(fullName: string): string {
  const names = fullName.split(" ");

  if (names.length >= 2) {
    const firstNameInitial = names[0].charAt(0);
    const lastNameInitial = names[names.length - 1].charAt(0);

    return `${firstNameInitial}${lastNameInitial}`;
  } else {
    // Handle the case where the full name does not have a first and last name.
    return "";
  }
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
        <div className="rounded-full aspect-1 relative h-16 bg-gray-400 border-black border">
          <Avatar className="h-16 w-16 border border-white">
            <AvatarImage src={image}></AvatarImage>
            <AvatarFallback className=" text-black font-bold">
              {getInitials(giver)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <span className="font-semibold font-serif block">{giver}</span>
          <span className="font-serif font-thin block">{status}</span>
        </div>
      </div>
    </div>
  );
}
