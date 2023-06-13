import React, { ReactElement } from "react";
import Image from "next/image";
interface Props {
  images:string[]
}


export default function Images({images}: Props): ReactElement {
  return (
    <div className="w-[55%] overflow-y-auto rounded-md">
      {images.map((image, index) => {
        return (
          <div key={index} className="relative h-[60%] w-full">
            <Image
              fill
              src={image}
              className="object-cover"
              alt="Facebook Clone demo"
            />
          </div>
        );
      })}
    </div>
  );
}
