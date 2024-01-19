"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {


    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After leaning the basics of programming by learning{" "}
                <b>HTML, CSS, JavaScript and Python </b>, I decided to pursue my
                passion for programming. I enrolled in a Online Harvard Course{" "}
                <i>(CS50)</i> and learned the basics of computer science. Then I
                started to grow out my knowledge in
                <b>Full-Stack Web Development</b>.{" "}
                <i>My favorite part of programming</i> is the problem-solving
                aspect. I love the feeling of finally figuring out a solution to
                a problem or fixing a difficult bug. My core stack is{" "}
                <b>React, Next.js, Tailwind CSS, and Prisma</b>. I am also
                familiar with backend technologies like Express.js and
                Socket.io. I am always looking forward to learn new technologies
                and collab with other Developers. I am currently looking for a{" "}
                <b>Part-Time position</b> as a Frontend Developer or software
                developer.
            </p>

            <p>
                <i>When I'm not coding</i>, I enjoy gaming with my friends,
                listening to podcasts or watching informative videos. I also
                enjoy <b>learning new things</b>. I am currently learning about{" "}
                <b>Machine Learning</b>.
            </p>
        </motion.section>
    );
}
