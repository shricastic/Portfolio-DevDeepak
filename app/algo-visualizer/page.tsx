import React, { ReactElement } from "react";
import AlgorithmVisualizer from "@/components/mdx/AlgorithmVisualizer.mdx";
import { Metadata } from "next";
interface Props {}
const description =
  "SortingVisualizer, a powerful and intuitive tool designed to help users understand and visualize various sorting algorithms. Whether you're a beginner learning about sorting algorithms or an experienced developer looking for a visual aid, this app is the perfect companion.";
const ogImageURL = "/algo-visualizer.png";

export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description: description,
  openGraph: {
    images: ogImageURL,
    description: description,
  },
  twitter: {
    images: ogImageURL,
    description: description,
  },
};
export default function page({}: Props): ReactElement {
  return (
    <div className="flex justify-center bg-black">
      <AlgorithmVisualizer></AlgorithmVisualizer>;
    </div>
  );
}
