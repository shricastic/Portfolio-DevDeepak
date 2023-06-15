import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
interface Props {
  images: StaticImageData[];
}
export default function Images({ images }: Props): ReactElement {
  return (
    <div className="h-60 overflow-hidden overflow-x-scroll scroll-px-16 lg:translate-x-0 lg:overflow-x-hidden  lg:h-screen lg:w-[55%]">
      <div className="flex h-full w-max items-center rounded-md lg:h-screen lg:block lg:w-full lg:overflow-y-auto -translate-x-4 lg:translate-x-0">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="relative h-full lg:h-[60%] w-screen lg:w-full"
            >
              <Image
                fill
                src={image}
                className="object-contain lg:object-cover"
                alt="Facebook Clone demo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
