import Container from "@/components/Container";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

const metaData: Metadata = {
  title: "Shazab's Blogs",
  description:
    "A collection of technical articles and insights by Shazab Saifi, covering topics in JavaScript, TypeScript, React, Next.js, Node.js, and modern web development frameworks.",
};

const page = async () => {
  const allBlogs = await getBlogs();
  console.log(allBlogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

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
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link key={idx} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h1 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h1>
                <p className="text-secondary text-sm md:text-base">
                  {new Date(blog.date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-base">
                {truncate(blog.description, 100)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
