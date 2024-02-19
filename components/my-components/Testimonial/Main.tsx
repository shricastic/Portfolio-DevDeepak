import React, { ReactElement } from "react";
import Testimonials from "./Testimonials";

interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <section
      id="testimonial"
      className="relative z-50 bg-black text-white p-4 md:px-28 pb-32"
    >
      <div className="flex flex-col h-full items-center md:justify-center">
        <div className="text-white font-bold p-6">
          <h1 className="text-4xl md:text-5xl">Testimonials</h1>
        </div>
        <Testimonials></Testimonials>
      </div>
    </section>
  );
}
