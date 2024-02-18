import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
interface Props {}
import ReactLogo from "../../public/react.png";
import NextLogo from "../../public/next.svg";
import NodeLogo from "../../public/node.png";
import MySQLLogo from "../../public/mysql.png";
import PostgresLogo from "../../public/postgres.png";
import JSLogo from "../../public/js.png";
import FirebaseLogo from "../../public/firebase.png";
import TailwindCSSLogo from "../../public/tailwindcss.svg";
import ChatGPTLogo from "../../public/chatgpt.png";
import PythonLogo from "../../public/python.png";
import ReduxLogo from "../../public/redux.png";
import FramerMotionLogo from "../../public/framermotion.svg";
import TensorFlowLogo from "../../public/TensorflowLogo.png";
import HuggingFaceLogo from "../../public/hf-logo.png";
import PineconeDB from "../../public/PineconeLogo.svg";
const skillArray = [
  { image: ReactLogo, skill: "React" },
  { image: NextLogo, skill: "Next.js" },
  { image: NodeLogo, skill: "Node.js" },
  { image: MySQLLogo, skill: "MySQL" },
  { image: PostgresLogo, skill: "Postgres" },
  { image: PineconeDB, skill: "Pinecone" },
  { image: JSLogo, skill: "JavaScript" },
  { image: FirebaseLogo, skill: "Firebase" },
  { image: TailwindCSSLogo, skill: "Tailwind CSS" },
  { image: ChatGPTLogo, skill: "ChatGPT API" },
  { image: PythonLogo, skill: "Python" },
  { image: ReduxLogo, skill: "Redux" },
  { image: FramerMotionLogo, skill: "Framer Motion" },
  { image: TensorFlowLogo, skill: "Tensorflow" },
  { image: HuggingFaceLogo, skill: "Hugging Face" },
];

function Skill({ image, skill }: { image: StaticImageData; skill: string }) {
  return (
    <div className="h-28  md:h-40 aspect-1 shadow-md hover:scale-105 border border-white/20 shadow-white flex flex-col p-2 rounded-md hover:bg-gray-700 transition-all duration-150">
      <div className="relative h-full w-full">
        <Image
          fill
          src={image}
          alt={`${skill.toUpperCase()}'s Logo`}
          sizes="(min-width: 768px) 10rem, 7rem"
          className="object-contain"
        ></Image>
      </div>
      <h3 className="text-center font-bold">{skill} </h3>
    </div>
  );
}

export default function Skills({}: Props): ReactElement {
  return (
    <section
      id="skills"
      className="min-h-full relative z-50 bg-black text-white"
    >
      <div className="h-full flex flex-col xl:gap-12 items-center">
        <h1 className="text-4xl font-bold justify-self-center py-8">Skills</h1>
        <div className="flex flex-wrap items-center justify-center max-w-5xl gap-4 self-center">
          {skillArray.map((skill, index) => {
            return (
              <Skill
                key={index}
                skill={skill.skill}
                image={skill.image}
              ></Skill>
            );
          })}
        </div>
      </div>
    </section>
  );
}
