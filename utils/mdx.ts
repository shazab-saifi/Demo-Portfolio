import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export type Frontmatter = {
  title: string;
  description: string;
  image: string;
  date: string;
};

export const getBlog = async (slug: string) => {
  try {
    const blog = await fs.readFile(
      path.join(process.cwd(), `/data/${slug}.mdx`),
      "utf-8",
    );

    if (!blog) {
      return null;
    } else {
      const { content, frontmatter } = await compileMDX<Frontmatter>({
        source: blog,
        options: { parseFrontmatter: true },
      });

      return { content, frontmatter };
    }
  } catch (error) {
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "/data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogFrontmatterBySlug(slug);

      return {
        slug,
        ...(frontmatter as Frontmatter),
      };
    }),
  );

  return allBlogs;
};

export const getBlogFrontmatterBySlug = async (slug: string) => {
  try {
    const blog = await fs.readFile(
      path.join(process.cwd(), `/data/${slug}.mdx`),
      "utf-8",
    );

    if (!blog) {
      return null;
    } else {
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: blog,
        options: { parseFrontmatter: true },
      });

      return frontmatter;
    }
  } catch (error) {
    return error;
  }
};
