"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS, Sass, Tailwind</li>
        <li>JavaScript</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">

          <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        
      </ul>
    ),
  },

];


const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero22.jpg" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4  text-transparent  bg-clip-text bg-gradient-to-r from-green-700 to-green-300 ">About Me</h2>
          <p className="text-base lg:text-lg">
             Im a junior React developer and Ive been learning Front-end web development for the last two years on my own. Some of the resources that I use for learning are platforms like Udemy, Pluralsight, YouTube, w3schools.​com, freeCodeCamp.​org, codepen.​io, 30secondsofcode.​org etc.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Front-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Back-End{" "}
            </TabButton>
       
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>


  )
}

export default AboutSection


