"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
      description:
        "A clone of apple's website that showcase their products and services",
    },
    {
      title: "E-Commerce Platform",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/apple-cards-carousel.png",
      href: "#",
      description:
        "A full-stack e-commerce platform with payment integration and admin dashboard",
    },
    {
      title: "Weather Dashboard",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/hero-sections.webp",
      href: "#",
      description:
        "A beautiful weather dashboard with location-based forecasts and interactive maps",
    },
    {
      title: "Social Media Analytics",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/lens.webp",
      href: "#",
      description:
        "Analytics platform for social media management with data visualization and insights",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
        I love designing and building web apps the can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            key={idx}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={500}
                className="w-full cursor-pointer rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
            </Link>
            <h1 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
              {project.title}
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
