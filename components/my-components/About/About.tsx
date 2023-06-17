"use client";
import React, { ReactElement, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar/Main";
interface Props {}

export default function About({}: Props): ReactElement {
  const controls = useAnimation();
  const [open, setOpen] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);
  const NavbarRef = useRef<HTMLDivElement>(null);
  // useIntersectionObserver(targetRef, display, hide);
  const { scrollY, scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.01) display();
    else hide();
  });
  async function display() {
    if (NavbarRef.current) NavbarRef.current.style.display = "block";
    controls.start({
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    });
  }
  async function hide() {
    setOpen(false);
    if (NavbarRef.current) {
      await controls.start({
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
      NavbarRef.current.style.display = "none";
    }
  }

  return (
    <motion.div
      id="about"
      className="absolute top-1/2 z-[999] lg:h-screen snap-start bg-gradient-to-bl from-black to-slate-900 "
    >
      <Navbar
        open={open}
        setOpen={setOpen}
        controls={controls}
        ref={NavbarRef}
      ></Navbar>
      <div className="relative flex min-h-screen h-max flex-col items-center xl:px-8">
        <div
          ref={targetRef}
          className="relative top-4 text-3xl p-4 font-bold tracking-widest text-white"
        >
          About
        </div>
        <div className="flex-1 flex h-full flex-col justify-center gap-4 md:px-40 lg:flex-row lg:items-center ">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{
              x: "0",
              transition: {
                duration: 0.5,
              },
            }}
            className="-mt-8 flex flex-shrink-0 items-center justify-center  overflow-hidden md:mt-0"
          >
            <div
              className="relative  h-40 w-40
             rounded-full md:h-80 md:w-80 md:rounded-2xl lg:h-96"
            >
              <Image
                fill
                src={"/deepak.jpeg"}
                className="
              aspect-auto rounded-full
              object-cover object-top md:rounded-2xl"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 100,
              transition: {
                duration: 1,
              },
            }}
            className="mx-4 p-2  font-mono text-base text-white md:text-lg"
          >
            {"I'm"} a <strong> Full Stack Web Developer</strong> specializing in{" "}
            <span className="underline decoration-[#61Dbfb] decoration-wavy">
              React
            </span>
            ,{" "}
            <span className="underline decoration-white decoration-wavy">
              Next.js
            </span>
            ,{" "}
            <span className="underline decoration-[#3C873A] decoration-wavy">
              Node JS
            </span>
            ,{" "}
            <span className="underline decoration-[#F5820D] decoration-wavy">
              Firebase
            </span>
            ,and other popular libraries. I have a strong background in creating
            robust and efficient web applications with a passion for clean and
            organized code. I am proud to have built a fully functional Facebook
            clone, which showcases my proficiency in utilizing modern web
            technologies and frameworks to create complex, feature-rich
            applications. <br />
            <p>
              Whether you need a landing page, a blog, an e-commerce site or a
              custom solution, I can help you achieve your goals. Take a look at
              some of my projects and feel free to contact me if you have any
              questions or inquiries.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
