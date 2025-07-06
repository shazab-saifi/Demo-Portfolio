import Container from "@/components/Container";
import { Frontmatter, getBlog, getBlogFrontmatterBySlug } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = (await getBlogFrontmatterBySlug(
    params.slug,
  )) as Frontmatter;

  if (!frontmatter) {
    return {
      titla: "No blog found!",
    };
  }

  return {
    title: frontmatter.title + " by Shazab Saifi",
    description: frontmatter.description,
  };
}

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const param = await params;
  const blog = await getBlog(param.slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content } = blog;

  return (
    <div className="flex min-h-screen w-full items-center justify-start">
      <Container classname="min-h-[200vh] w-full px-10 md:pt-20 mb:pb-10">
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
};

export default page;
