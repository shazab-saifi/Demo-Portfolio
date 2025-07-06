import { getBlogs } from "@/utils/mdx";
import Link from "next/link";

const truncate = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

const Blogs = async () => {
  const allBlogs = await getBlogs();
  return (
    <div className="space-y-12">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
        I love building things.
      </p>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default Blogs;
