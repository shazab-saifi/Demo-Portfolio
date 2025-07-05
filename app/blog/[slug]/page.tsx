import Container from "@/components/Container";
import Projects from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

const metaData: Metadata = {
  title: "Shazab's Blogs",
  description:
    "A collection of technical articles and insights by Shazab Saifi, covering topics in JavaScript, TypeScript, React, Next.js, Node.js, and modern web development frameworks.",
};

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <Container classname="min-h-[200vh] px-10 md:pt-20 mb:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All Blogs
        </h1>
        <p className="text-secondary text-sm md:text-base">
          I'm a software engineer with a passion of building scalable and
          efficient systems. I'm currently working as a freelancer.
        </p>
        <Projects />
      </Container>
    </div>
  );
};

export default page;
