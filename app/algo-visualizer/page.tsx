import React, { ReactElement } from "react";
import AlgorithmVisualizer from "@/components/mdx/AlgorithmVisualizer.mdx";
import { Metadata } from "next";
interface Props {}
export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description:
    "SortingVisualizer app is a powerful and intuitive tool designed to help users understand and visualize various sorting algorithms. Whether you're a beginner learning about sorting algorithms or an experienced developer looking for a visual aid, this app is the perfect companion.",
  openGraph: { images: "/algo-visualizer.png" },
  twitter: { images: "/algo-visualizer.png" },
};
export default function page({}: Props): ReactElement {
  return (
    <div className="flex justify-center bg-black">
      <AlgorithmVisualizer></AlgorithmVisualizer>;
    </div>
  );
}
