import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const ;

export const experiencesData = [
  {
    title: "university of itajai valley",
    location: "Itajai, Brazil",
    description:
      "I studied internet systems at university with a focus on web development",
    icon: React.createElement(LuGraduationCap),
    date: "2019 -2023",
  },
  {
    title: "Front-End Developer",
    location: "Itajai, Brazil",
    description:
      "I worked as a web development trainee in the environmental laboratory at university.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },

  {
    title: "Front-End Developer",
    location: "Balneario Camboriu, Brazil",
    description:
      "In deerfast company we deal with websites, landing pages and real estate systems. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2019 - present",
  },
 
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    linkProject: "https://www.linkedin.com/feed/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    linkProject: "https://tailwindcss.com/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    linkProject: "https://www.youtube.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "UX",
  "UI",
  "Design",
  "Figma"
] as const;