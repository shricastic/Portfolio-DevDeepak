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
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg shadow-lg w-64">
        <div className="h-24 bg-blue-600 rounded-t-lg" />

        <Avatar>
          <AvatarImage src={image}></AvatarImage>
          <AvatarFallback>{getInitials(giver)}</AvatarFallback>
        </Avatar>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-500">Software Engineer</p>
        </div>
        <div className="flex justify-around my-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg">500</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">300</h3>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Component() {}
