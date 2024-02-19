import React, { ReactElement } from "react";
import Testimonials from "./Testimonials";

interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <section
      id="testimonial"
      className="min-h-screen relative z-50 bg-black text-white md:px-28 lg:p-0 pb-32"
    >
      <div className="flex flex-col h-full items-center md:justify-center">
        <div className="text-white font-bold p-6">
          <h1 className="text-4xl md:text-5xl">Testimonials</h1>
        </div>

        <div className="flex items-center flex-col justify-center w-full p-4 overflow-hidden lg:flex-row gap-4">
          <div className="h-full max-w-6xl">
            <Testimonials></Testimonials>
          </div>
        </div>
      </div>
    </section>
  );
}
