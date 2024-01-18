"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tattoo Studio",
    description: "HTML Scss JavaScript ReactJS",
    image: "/images/pro1.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/WolfTattoo",
    previewUrl: "https://wolftattoo.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "HTML Css JavaScript ReactJS",
    image: "/images/pro2.jpg",
    tag: ["All", "React"],
    gitUrl: "https://ddf-tech.netlify.app/",
    previewUrl: "https://ddf-tech.netlify.app/",
  },
  {
    id: 3,
    title: "Car Selling",
    description: "HTML Css JavaScript ReactJS",
    image: "/images/pro3.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/motocar ",
    previewUrl: "https://motocar17.netlify.app/",
  },
  {
    id: 4,
    title: "FitHouse",
    description: "HTML Css JavaScript ReactJS",
    image: "/images/pro4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/FitHouse",
    previewUrl: "https://fithousee.netlify.app/",
  },
  {
    id: 5,
    title: "Zeus",
    description: "HTML Css JavaScript Vite ReactJS",
    image: "/images/pro5.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/zeus",
    previewUrl: "https://zeuuus.netlify.app/",
  },
  {
    id: 6,
    title: "API products",
    description: "NodeJS Express MongoDB",
    image: "/images/pro6.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/pokusajapi",
    previewUrl: "https://apiproductnamjestaj.cyclic.app/api/v1/products",
  },
   {
    id: 7,
    title: "Portfolio",
    description: "NextJS",
    image: "/images/hero23.jpg",
    tag: ["All", "Next"],
    gitUrl: "https://github.com/AljosaNj/pokusajapi",
    previewUrl: "https://apiproductnamjestaj.cyclic.app/api/v1/products",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12  text-transparent  bg-clip-text   bg-gradient-to-r from-green-700 to-green-300  ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;