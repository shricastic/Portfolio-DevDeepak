"use client";
import { motion, AnimationControls, stagger, useAnimate } from "framer-motion";
import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";
import { ReactElement } from "react";
interface Props {
  controls: AnimationControls;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListOfLinks = ["Home", "About", "Projects", "Skills", "Contact Me"];
const Navbar = React.forwardRef(
  ({ controls, open, setOpen }: Props, ref): ReactElement => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [navLinks, animate] = useAnimate();
    const [activeHover, setActiveHover] = useState<number>();
    useToggle(buttonRef, open, controls, animate, navLinks);
    return (
      <>
        <motion.div
          tabIndex={1}
          initial={{ opacity: 0 }}
          animate={controls}
          ref={ref as React.MutableRefObject<HTMLDivElement>}
          className="navbar hidden fixed top-5 right-5 z-[999] rounded-[50%] rounded-tr-none [--width:100%] md:[--width:30rem]"
        >
          <motion.ul
            ref={navLinks}
            onMouseLeave={() => {
              setActiveHover(-1);
            }}
            className="flex  p-8 h-full w-full text-4xl gap-4 flex-col [&>li]:flex-1 overflow-hidden"
          >
            {ListOfLinks.map((link, index) => {
              return (
                <motion.li
                  onMouseEnter={() => {
                    setActiveHover(index);
                  }}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="group isolate relative"
                  key={link}
                  initial={{
                    x: "-100%",
                    filter: "blur(5px)",
                  }}
                >
                  {activeHover === index && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 -z-10 bg-gray-400 rounded-lg "
                    ></motion.div>
                  )}
                  <Link
                    className="absolute inset-0 px-2 grid items-center"
                    href={`#${link.replace(" ", "").toLowerCase()}`}
                  >
                    {link}
                  </Link>
                </motion.li>
              );
            })}
            <motion.li
              onMouseEnter={() => {
                setActiveHover(6);
              }}
              onClick={() => {
                setOpen(false);
              }}
              className="group isolate relative"
              initial={{
                x: "-100%",
                filter: "blur(5px)",
              }}
            >
              {activeHover === 6 && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 -z-10 bg-gray-400 rounded-lg "
                ></motion.div>
              )}
              <Link
                className="absolute inset-0 px-2 grid items-center"
                href={`#contactme`}
              >
                Testimonials
              </Link>
            </motion.li>
          </motion.ul>

          <div
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="rounded-full grid place-items-center fixed right-4 top-4 bg-golden h-16 w-16 text-black shadow-md shadow-white/40"
          >
            <button
              ref={buttonRef}
              className="group grid place-items-center overflow-hidden h-16 w-16 rounded-full  [--button-color:white]"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <svg
                stroke="var(--button-color)"
                fill="none"
                className={`transition-all h-full w-full  duration-1000 group-aria-[expanded=true]:translate-x-[5px] 
              group-aria-[expanded=true]:translate-y-[-5px]  group-aria-[expanded=true]:rotate-[0.125turn]`}
                viewBox="-10 -10 120 120"
              >
                <path
                  className="[stroke-dasharray:60_31_60_300] transition-all duration-1000 group-aria-[expanded=true]:[stroke-dasharray:60_105_60_300] 
                group-aria-[expanded=true]:[stroke-dashoffset:-90]"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                ></path>
              </svg>
            </button>
          </div>
        </motion.div>
      </>
    );
  }
);
export default Navbar;

function useToggle(
  ref: React.MutableRefObject<HTMLButtonElement | null>,
  open: boolean,
  controls: AnimationControls,
  animate: any,
  navLinks: React.MutableRefObject<HTMLUListElement | null>
) {
  useEffect(() => {
    async function run() {
      const button = ref?.current;
      if (button) {
        if (open) {
          button.setAttribute("data-state", "opened");
          button.setAttribute("aria-expanded", "true");

          await controls.start({
            backgroundColor: "white",
            height: "100vh",
            width: "var(--width)",
            top: "0",
            right: "0",
            borderRadius: 0,

            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          });
          await animate(navLinks.current, { display: "flex" });
          animate(
            "li",
            { x: 0, filter: "blur(0px)" },
            { duration: 0.5, delay: stagger(0.05) }
          );
        } else {
          await animate(
            "li",
            { x: "-100%" },
            { duration: 0.5, delay: stagger(0.01) }
          );
          animate(navLinks.current, { display: "none" });

          controls.start({
            height: "0",
            width: "0",
            top: "1.5rem",
            right: "1.5rem",
            borderRadius: "50%",

            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          });
          button.setAttribute("data-state", "closed");
          button.setAttribute("aria-expanded", "false");
        }
      }
    }
    run();
  }, [ref?.current, open]);
}
