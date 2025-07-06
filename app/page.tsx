import Blogs from "@/components/Blogs";
import Container from "@/components/Container";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <Container classname="min-h-[200vh] px-10 md:pt-20 mb:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Shazab Saifi
        </h1>
        <p className="text-secondary text-sm md:text-base">
          I'm a software engineer with a passion of building scalable and
          efficient systems. I'm currently working as a freelancer.
        </p>
        <Projects />
        <Blogs />
      </Container>
    </div>
  );
}
