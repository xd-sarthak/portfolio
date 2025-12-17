// SEO utilities and metadata generation

const DEFAULT_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://sarthaksri.vercel.app";

const AUTHOR_NAME = "Sarthak Srivastav";
const AUTHOR_EMAIL = "sarthak.srivastav0203@gmail.com";
const AUTHOR_GITHUB = "https://github.com/xd-sarthak";
const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/sarthak-srivastav-a51207257/";

export function generateProjectMetadata(project: any) {
  const url = `${DEFAULT_BASE_URL}/projects/${project.slug}`;

  return {
    title: `${project.name} | ${AUTHOR_NAME}`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url,
      type: "article",
      images: [
        {
          url: project.image || `${DEFAULT_BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.image || `${DEFAULT_BASE_URL}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlogMetadata(post: any) {
  const url = `${DEFAULT_BASE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${AUTHOR_NAME}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: toIsoDate(post.date),
      authors: [AUTHOR_NAME],
      tags: post.tags,
      images: [
        {
          url: post.image || `${DEFAULT_BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || `${DEFAULT_BASE_URL}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

function toIsoDate(dateStr: string): string {
  if (!dateStr) return new Date().toISOString();

  // Handle year-only strings like "2025"
  if (/^\d{4}$/.test(dateStr)) {
    return new Date(`${dateStr}-01-01`).toISOString();
  }

  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export function generateStructuredData(
  type: "project" | "blog" | "person" | "website" | "blog-list",
  data: any,
) {
  if (type === "project") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: data.name,
      description: data.description,
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
      },
      datePublished: toIsoDate(data.year),
      image: data.image
        ? [data.image]
        : [`${DEFAULT_BASE_URL}/og-image.png`],
      url: `${DEFAULT_BASE_URL}/projects/${data.slug}`,
      keywords: data.tech?.join(", "),
    };
  }

  if (type === "blog") {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: data.excerpt,
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: DEFAULT_BASE_URL,
      },
      publisher: {
        "@type": "Person",
        name: AUTHOR_NAME,
      },
      datePublished: toIsoDate(data.date),
      dateModified: toIsoDate(data.date),
      url: `${DEFAULT_BASE_URL}/blog/${data.slug}`,
      keywords: data.tags?.join(", "),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${DEFAULT_BASE_URL}/blog/${data.slug}`,
      },
      image: data.image
        ? [data.image]
        : [`${DEFAULT_BASE_URL}/og-image.png`],
    };
  }

  if (type === "blog-list") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Blog | ${AUTHOR_NAME}`,
      description:
        "Articles on backend systems, distributed architectures, AI engineering, RAG pipelines, security, and modern web infrastructure.",
      url: `${DEFAULT_BASE_URL}/blog`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: data.posts.map((post: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${DEFAULT_BASE_URL}/blog/${post.slug}`,
          name: post.title,
          description: post.excerpt,
        })),
      },
    };
  }

  if (type === "person") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: data.name || AUTHOR_NAME,
      url: data.url || DEFAULT_BASE_URL,
      sameAs: data.sameAs || [AUTHOR_GITHUB, AUTHOR_LINKEDIN],
      jobTitle: data.jobTitle || "Backend & AI Systems Engineer",
      description:
        data.description ||
        "Backend-focused software engineer specializing in distributed systems, RAG pipelines, and AI infrastructure.",
      email: data.email || AUTHOR_EMAIL,
      image: data.image || `${DEFAULT_BASE_URL}/og-image.png`,
    };
  }

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: data.name || `${AUTHOR_NAME} Portfolio`,
      url: data.url || DEFAULT_BASE_URL,
      description:
        data.description ||
        "Portfolio of Sarthak Srivastav — backend systems, AI infrastructure, and distributed architectures.",
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${DEFAULT_BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export function generateBlogStaticParams(blogPosts: BlogPost[]) {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export interface Project {
  id?: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  year: string;
  tech: string[];
  image?: string;
  link?: string;
  featured?: boolean;
}

// Generate static params for all projects
export async function generateStaticParams(projects: Project[]) {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
