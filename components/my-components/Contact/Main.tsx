import React, { ReactElement } from "react";
import Form from "./Form";
import MyInfo from "./MyInfo";

interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <section className="h-screen relative z-50 bg-black text-white">
      <div className="flex flex-col h-full items-center">
        <div className="text-white font-bold p-6">
          <h1 className=" text-5xl">Contact me</h1>
        </div>

        <div className="flex-1 flex items-center flex-col justify-center w-full p-4 overflow-hidden lg:flex-row">
          <div className="h-full w-full">
            <MyInfo></MyInfo>
          </div>
          <div className="h-full w-full flex p-4 justify-end">
            <div className="bg-white max-h-full w-[80%] overflow-y-auto scrollbar-w-2 scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 rounded-lg p-4">
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
