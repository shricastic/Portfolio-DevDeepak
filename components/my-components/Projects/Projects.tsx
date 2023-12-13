"use client";
import React, { ReactElement, useRef } from "react";

import ProjectSectionTitle from "./ProjectsSectionTitle";
import fbCloneImg from "../../../asset/FacebookClone/img1.jpg";
import SGImg from "../../../asset/superguest/img1.png";
import PDFReaderImg from "../../../public/pdf-reader-showcase.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectDisplayTemplate from "./ProjectDisplayTemplate";
import { FacebookClone, PDFReader, SuperGuest } from "@/components/ui/Logos";

const Project = [
  {
    id: "facebook-clone",
    description:
      "This is a clone of the original facebook site which has most of the features that the original site has including live feeds, stories, posting , audio, video calls and more",
    githubLink: "",
    previewImage: fbCloneImg,
    learnMoreLink: "",
    color: "blue",
    logo: FacebookClone,
    primaryColor: "from-blue-600",
    secondaryColor: "to-blue-400",
  },
];

interface Props {}

export default function Projects({}: Props): ReactElement {
  return (
    <div className="bg-black relative z-50 overflow-visible">
      <ProjectSectionTitle></ProjectSectionTitle>

      <div>
        {Project.map((project) => {
          return (
            <ProjectDisplayTemplate
              id={project.id}
              description={project.description}
              githubLink={project.githubLink}
              previewImage={project.previewImage}
              primaryColor={project.primaryColor}
              secondaryColor={project.secondaryColor}
              learnMoreLink={project.learnMoreLink}
              color={project.color}
              key={project.id}
            >
              <project.logo />
            </ProjectDisplayTemplate>
          );
        })}
      </div>
    </div>
  );
}
