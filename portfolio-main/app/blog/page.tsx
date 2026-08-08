import type { Metadata } from "next";
import BlogListPage from "@/components/blog/blog-list-page";

export const metadata: Metadata = {
  title: "Blog | Sarthak Srivastav",
  description:
    "Articles on backend systems, distributed architectures, AI engineering, RAG pipelines, security, and modern web infrastructure.",
  openGraph: {
    title: "Blog | Sarthak Srivastav",
    description:
      "Articles on backend systems, distributed architectures, AI engineering, and modern web infrastructure.",
    url: "https://sarthaksri.vercel.app/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sarthak Srivastav",
    description:
      "Articles on backend systems, distributed architectures, AI engineering, and modern web infrastructure.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://sarthaksri.vercel.app/blog" },
};

export default function Page() {
  return <BlogListPage />;
}
