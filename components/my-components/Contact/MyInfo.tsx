import React, { ReactElement } from "react";
import { Mail, LocateIcon } from "lucide-react";
interface Props {}

export default function MyInfo({}: Props): ReactElement {
  return (
    <div className="space-y-16 py-4">
      <div
        id="testimonials"
        className="border border-white/50 shadow-white/50 shadow-md p-2 rounded-md"
      >
        <svg
          fill="#FFD700"
          className="h-16 w-16"
          viewBox="0 0 32 32"
          version="1.1"
        >
          <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
        </svg>
        <h1 className="md:text-xl">
          What a pleasure to work with Deepak.. Young dev who's clearly talented
          with a strong passion for your complete satisfaction and solving any
          issues that should arise.I'm looking forward to working with Deepak
          further and appreciate all your efforts. Thank you!
        </h1>
        <div className="text-end px-4 font-bold">
          -Upwork Client <br /> Callum Amor
        </div>{" "}
      </div>
      <div className="space-y-8">
        <div className="flex items-center gap-2 md:gap-4">
          {" "}
          <div className="rounded-full border border-white h-16 aspect-square grid place-items-center hover:scale-105 transition-all duration-150">
            <Mail></Mail>
          </div>
          <span className="text-xl md:text-2xl">
            deepakbhattarai289@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="rounded-full border border-white h-16 aspect-square grid place-items-center  hover:scale-105 transition-all duration-150">
            <svg
              fill="#fff"
              className="h-8 w-8"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
            </svg>
          </div>
          <span className="text-xl md:text-2xl">Jhapa,Nepal</span>
        </div>
      </div>
    </div>
  );
}
