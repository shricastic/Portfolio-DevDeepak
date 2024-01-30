import React, { ReactElement } from "react";
import AlgorithmVisualizer from "@/components/mdx/AlgorithmVisualizer.mdx";
interface Props {}

export default function page({}: Props): ReactElement {
  return (
    <div className="flex justify-center bg-black">
      <AlgorithmVisualizer></AlgorithmVisualizer>;
    </div>
  );
}
