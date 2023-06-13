import React, { ReactElement } from "react";
import FacebookClone from "@/components/my-components/Projects/FacebookClone.mdx";
import Images from "@/components/my-components/Projects/Images";
interface Props {}
const Images = [
  "/FacebookClone/img1.jpg",
  "/FacebookClone/img2.jpg",
  "/FacebookClone/img3.jpg",
  "/FacebookClone/img4.jpg",
  "/FacebookClone/img5.jpg",
  "/FacebookClone/img6.jpg",
  "/FacebookClone/img7.jpg",
  "/FacebookClone/img8.jpg",
  "/FacebookClone/img9.jpg",
  "/FacebookClone/img10.jpg",
  "/FacebookClone/img11.jpg",
  "/FacebookClone/img12.jpg",
  "/FacebookClone/img13.jpg",
  "/FacebookClone/img14.jpg",
  "/FacebookClone/img15.jpg",
  "/FacebookClone/img16.jpg",
  "/FacebookClone/img17.jpg",
  "/FacebookClone/img18.jpg",
  "/FacebookClone/img19.jpg",
  "/FacebookClone/img20.jpg",
];

export default function FBClone({}: Props): ReactElement {
  return (
    <div className="flex bg-black text-white">
      <FacebookClone></FacebookClone>
      <Images images={Images}/>
    </div>
  );
}
