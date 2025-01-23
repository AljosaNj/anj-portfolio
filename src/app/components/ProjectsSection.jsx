"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tattoo Studio",
    description: "HTML SCSS JavaScript ReactJS",
    image: "/images/pro1.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/WolfTattoo",
    previewUrl: "https://wolftattoo.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "MERN (admin: mirko@gmail.com , mirko1234) (free hosting, slow loading)",
    image: "/images/pro2.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/TechShop",
    previewUrl: "https://techshop-m214.onrender.com/",
  },
  {
    id: 3,
    title: "FilmG",
    description: "MERN (free hosting, slow loading)",
    image: "/images/pro3.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/filmg ",
    previewUrl: "https://filmg.onrender.com/",
  },
  {
    id: 4,
    title: "FitHouse",
    description: "HTML CSS JavaScript ReactJS",
    image: "/images/pro4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/FitHouse",
    previewUrl: "https://fithousee.netlify.app/",
  },
  {
    id: 5,
    title: "Zeus",
    description: "HTML CSS JavaScript Vite ReactJS",
    image: "/images/pro5.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/zeus",
    previewUrl: "https://zeuuus.netlify.app/",
  },

   {
    id: 6,
    title: "Portfolio",
    description: "NextJS, tailwindcss",
    image: "/images/hero23.jpg",
    tag: ["All", "Next"],
    gitUrl: "https://github.com/AljosaNj/anj-portfolio",
    previewUrl: "https://anj-portfolio-eta.vercel.app/",
  },
    {
    id: 7,
    title: "X-Social",
    description: "MERN (Login: Sabaton, sabaton123) (free hosting, slow loading)",
    image: "/images/social-x.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/x-social",
    previewUrl: "https://x-social.onrender.com/login",
  },
     {
    id: 8,
    title: "GymClient",
    description: "Mern",
    image: "/images/gymclients.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/AljosaNj/GymClients",
    previewUrl: "https://youtu.be/qjZn3WNh7uY?si=YXlZLhNG0iQ8R3iH",
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