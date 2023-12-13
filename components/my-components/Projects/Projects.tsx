import React, { ReactElement } from "react";

import ProjectSectionTitle from "./ProjectsSectionTitle";
import FacebookCloneImage from "../../../asset/FacebookClone/img1.jpg";
import SuperGuestImage from "../../../asset/superguest/img1.png";
import PDFReaderImage from "../../../public/pdf-reader-showcase.png";
import ProjectDisplayTemplate from "./ProjectDisplayTemplate";
import { FacebookClone, PDFReader, SuperGuest } from "@/components/ui/Logos";

const Project = [
  {
    id: "facebook-clone",
    description:
      "Clone of the original facebook; which has most of the features that the original site has including live feeds, stories, posting , audio, video calls and more",
    githubLink: "https://github.com/DevDeepakBhattarai/facebook-clone",
    category: ["WebApp", "Backend"],
    previewImage: FacebookCloneImage,
    learnMoreLink: "/facebook-clone",
    color: "blue",
    logo: FacebookClone,
    primaryColor: "from-blue-600",
    secondaryColor: "to-blue-400",
  },
  {
    id: "super-guest",
    description:
      "Webapp that allows user to search about the location they want to visit and see the best hotels available there.",
    githubLink: "https://github.com/DevDeepakBhattarai/Travel_MVP",
    category: ["WebApp", "ChatGPT", "Design"],
    previewImage: SuperGuestImage,
    learnMoreLink: "/superguest",
    color: "red",
    logo: SuperGuest,
    primaryColor: "from-red-500",
    secondaryColor: "to-orange-700",
  },
  {
    id: "pdf-reader",
    description:
      "Application made for people to quickly get information from their PDF files using ChatGPT like LLM",
    githubLink: "https://github.com/DevDeepakBhattarai/ask-your-pdf",
    category: ["AI", "Helper"],
    previewImage: PDFReaderImage,
    learnMoreLink: "/pdf-reader",
    color: "purple",
    logo: PDFReader,
    primaryColor: "from-purple-500",
    secondaryColor: "to-purple-900",
  },
];

interface Props {}

export default function Projects({}: Props): ReactElement {
  return (
    <div className="bg-black relative z-50 overflow-visible" id="projects">
      <ProjectSectionTitle></ProjectSectionTitle>

      <div className="space-y-24 pb-8 lg:pb-0 lg:space-y-0 ">
        {Project.map((project) => {
          return (
            <ProjectDisplayTemplate
              id={project.id}
              description={project.description}
              githubLink={project.githubLink}
              previewImage={project.previewImage}
              category={project.category}
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
