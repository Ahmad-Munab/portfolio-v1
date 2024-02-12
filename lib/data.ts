import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import munabai_img from "@/public/munab-ai.png";
import nanolink_img from "@/public/nano-link.png";

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
] as const;

export const experiencesData = [
    {
        title: "Graduating Primary School",
        location: "TUAMIS",
        description:
            "I graduated primary, and promoted to 6th grade. And in 2022, i got 1st in my class moving forward to grade 7",
        icon: React.createElement(LuGraduationCap),
        date: "2022",
    },
    {
        title: "Learning Web Development",
        location: "Bangladesh",
        description:
            "I started learning frontend development with React.js, then I also upskilled to the full stack. with MERN Stack and Next.js",
        icon: React.createElement(FaReact),
        date: "2022 - present",
    },
    {
        title: "Full-Stack Developer",
        location: "August Web",
        description:
            "I'm now a Full-Stack developer working in August Web. My stack includes React, Next.js, JavaScript, Tailwind, Prisma and MySQL. Also I'm working as a freelancer and open to full-time opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "NanoLink",
        description:
            "I build a working URL Shortener, it's a simple solution to shorten your long links.",
        tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "Shadcn-ui"],
        imageUrl: nanolink_img,
        link: "http://nano-link.vercel.app",
    },
    {
        title: "MunabAI",
        description:
            "This is a Full-Stack application, where users can chat with AI (GPT-3.5)",
        tags: ["React", "JavaScript", "Next.js", "Tailwind", "Shadcn-ui"],
        imageUrl: munabai_img,
        link: "http://munab-ai.vercel.app",
    },
    //   {
    //     title: "Word Analytics",
    //     description:
    //       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //     imageUrl: wordanalyticsImg,
    //   },
] as const;

export const skillsData = [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Git",
    "Prisma",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Express",
    "Python",
    "Golang",
    "Django",
    "Framer Motion",
] as const;
