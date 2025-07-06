import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <Container classname="min-h-[200vh] px-10 md:pt-20 mb:pb-10 space-y-4">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About me
        </h1>
        <p className="text-secondary text-sm md:text-base">
          I'm Shazab Saifi, a dedicated software engineer passionate about
          crafting robust, scalable web applications. I enjoy solving complex
          problems, learning new technologies, and collaborating with others to
          build impactful digital solutions.
        </p>
      </Container>
    </div>
  );
}
