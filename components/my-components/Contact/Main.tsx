import React, { ReactElement } from "react";
import Form from "./Form";
import Testimonials from "./Testimonials";

interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <section
      id="contactme"
      className="min-h-screen relative z-50 bg-black text-white md:px-28 lg:p-0 pb-32"
    >
      <div className="flex flex-col h-full items-center md:justify-center">
        <div className="text-white font-bold p-6">
          <h1 className="text-4xl md:text-5xl">Contact me</h1>
        </div>

        <div className="flex items-center flex-col justify-center w-full p-4 overflow-hidden lg:flex-row gap-4">
          <div className="h-full w-full ">
            <Testimonials></Testimonials>
          </div>

          <div className="h-full w-full flex lg:p-4 justify-end">
            <div className="bg-white max-h-max w-full lg:w-[75%] overflow-y-auto scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 rounded-lg p-4">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
