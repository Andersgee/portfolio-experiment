import { Header } from "#src/components/Header";
import { HeroSvg } from "#src/app/HeroSvg";
import { Navbar } from "#src/components/Navbar";
import { getPosts } from "./content";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <>
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
        </div>
        <div className="flex justify-between">
          <div className="pr-4">
            <h1 className="mb-4 animate-fade-and-slide-in text-4xl tracking-tight text-color-unthemed-neutral-300 xl:mb-8">
              Projects
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-unthemed-neutral-100 delay-300">
              Expertice in statistics, artificial intelligence and real world knowledge
            </p>
          </div>

          <div></div>
        </div>
      </Header>
      <main className="">
        <section className="flex flex-col gap-2 pb-4">
          {posts
            .sort((a, b) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="rounded-lg bg-color-neutral-100 px-3 py-2 transition-all ease-in hover:opacity-80"
                href={`/projects/${post.slug}`}
              >
                <div>
                  <h2>{post.metadata.title}</h2>
                  <p>{post.metadata.summary}</p>
                </div>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
}
