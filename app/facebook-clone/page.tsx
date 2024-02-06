import React, { ReactElement } from "react";
import FacebookClone from "@/components/mdx/FacebookClone.mdx";

import Images from "@/components/my-components/Projects/Images";
import img1 from "../../asset/FacebookClone/img1.jpg";
import img2 from "../../asset/FacebookClone/img2.jpg";
import img3 from "../../asset/FacebookClone/img3.jpg";
import img4 from "../../asset/FacebookClone/img4.jpg";
import img5 from "../../asset/FacebookClone/img5.jpg";
import img6 from "../../asset/FacebookClone/img6.jpg";
import img7 from "../../asset/FacebookClone/img7.jpg";
import img8 from "../../asset/FacebookClone/img8.jpg";
import img9 from "../../asset/FacebookClone/img9.jpg";
import img10 from "../../asset/FacebookClone/img10.jpg";
import img11 from "../../asset/FacebookClone/img11.jpg";
import img12 from "../../asset/FacebookClone/img12.jpg";
import img13 from "../../asset/FacebookClone/img13.jpg";
import img14 from "../../asset/FacebookClone/img14.jpg";
import img15 from "../../asset/FacebookClone/img15.jpg";
import img16 from "../../asset/FacebookClone/img16.jpg";

import img17 from "../../asset/FacebookClone/img17.jpg";
import img18 from "../../asset/FacebookClone/img18.jpg";
import img19 from "../../asset/FacebookClone/img19.jpg";
import img20 from "../../asset/FacebookClone/img20.jpg";
import Wrapper from "@/components/page-wrapper";
import { Metadata } from "next";
const metadataDescription =
  "Facebook Clone is a web-based social networking platform that aims to replicate most of the features available on the original Facebook platform. Users can create accounts, connect with friends, post updates, share media, and engage in various forms of communication";
const metadataImageURL = "/facebook-clone.jpg";

export const metadata: Metadata = {
  title: "Facebook Clone",
  description: metadataDescription,
  openGraph: {
    images: metadataImageURL,
    description: metadataDescription,
  },
  twitter: {
    images: metadataImageURL,
    description: metadataDescription,
  },
};
interface Props {}
const ImageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

export default function FBClone({}: Props): ReactElement {
  return (
    <Wrapper>
      <div className="lg:flex bg-black text-white lg:flex-row-reverse lg:h-screen lg:overflow-y-hidden">
        <Images images={ImageList} />
        <FacebookClone></FacebookClone>
      </div>
    </Wrapper>
  );
}
