import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { generateBlogMetadata } from "@/lib/seo";
import BlogPost from "@/components/blog/blog-post";

export function generateStaticParams() {
  return blogPosts
    .filter((post) => Boolean(post.slug))
    .map((post) => ({ slug: post.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Sarthak Srivastav",
      robots: { index: false, follow: false },
    };
  }

  return generateBlogMetadata(post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <BlogPost slug={slug} />;
}
