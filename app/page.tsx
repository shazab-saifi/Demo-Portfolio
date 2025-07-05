import Container from "@/components/Container";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container classname="min-h-[200vh] p-4 md:pt-20 mb:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello there! I'm Shazab
        </h1>
        <p className="text-secondary text-sm md:text-base">
          I'm a software engineer with a passion of building scalable and
          efficient systems. I'm currently working as a freelancer.
        </p>
      </Container>
    </div>
  );
}
