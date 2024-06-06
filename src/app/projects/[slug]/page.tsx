import type { Metadata } from "next";
//import { Suspense } from "react";
import { notFound } from "next/navigation";
//import { unstable_noStore as noStore } from "next/cache";
import { getPosts } from "../content";
import { absUrl } from "#src/utils/url";
import { CustomMDX } from "#src/components/CustomMdx";
import { Header } from "#src/components/Header";
import { Navbar } from "#src/components/Navbar";
import { HeroSvg } from "#src/app/HeroSvg";

type Props = {
  //searchParams: Record<string, string | string[] | undefined>;
  /** adjust params according dynamic routes, eg if this is under a [slug] folder */
  params: { slug: string };
};

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata | undefined {
  const post = getPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  //const ogImage = image ? `https://leerob.io${image}` : `https://leerob.io/og?title=${title}`;

  const ogImage = image ? absUrl(image) : absUrl("/og?title=${title}");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: absUrl(`/projects/${post.slug}`),
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/*
function formatDate(date: string) {
  noStore();
  const currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date).getTime();
  const timeDifference = Math.abs(currentDate - targetDate);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
*/

export default function Page({ params }: Props) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.metadata.title,
            "datePublished": post.metadata.publishedAt,
            "dateModified": post.metadata.publishedAt,
            "description": post.metadata.summary,
            "image": post.metadata.image ? absUrl(post.metadata.image) : absUrl(`/og?title=${post.metadata.title}`),
            "url": absUrl(`/projects/${post.slug}`),
            "author": {
              "@type": "Organization",
              "name": "Salbo.ai",
            },
          }),
        }}
      />
      <Header>
        <Navbar
          links={[
            { href: "/", label: "Home" },
            { href: "/team", label: "Meet the Team" },
            { href: "/projects", label: "Projects" },
          ]}
        />
        <div className="absolute left-0 right-0 top-0 -z-50">
          <HeroSvg className="mx-auto h-96 w-full max-w-[1920px] object-cover object-bottom xl:h-[500px]" />
          {/*
          <Image
            src={img_hero}
            priority
            className="mx-auto h-96 object-cover object-bottom opacity-70 xl:h-[500px]"
            alt="blue mountains"
            placeholder="blur"
          />
    */}
        </div>
        <div className="justify-betwee flex">
          <div className="pr-4">
            <h1 className="mb-4 animate-fade-and-slide-in text-4xl tracking-tight text-color-unthemed-neutral-300 xl:mb-8">
              {post.metadata.title}
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-unthemed-neutral-100 delay-300">
              {post.metadata.publishedAt}
            </p>
          </div>

          <div></div>
          {/*
          <Image
            src={img_salboai}
            alt="salbo.ai logo"
            sizes={imageSizes("w-24")}
            className="h-24 w-24 animate-img-fade-in rounded-full shadow-xl delay-1000"
          />
  */}
        </div>
      </Header>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
