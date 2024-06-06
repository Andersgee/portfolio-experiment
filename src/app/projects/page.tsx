import { Header } from "#src/components/Header";
import { HeroSvg } from "#src/app/HeroSvg";
import { Navbar } from "#src/components/Navbar";

export default function Page() {
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
        <article className="pb-4">
          <h2 className="pb-2 text-2xl tracking-tighter">Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime cupiditate doloribus obcaecati beatae
            optio amet molestiae voluptatum repudiandae rerum.
          </p>
        </article>
        <article className="pb-4">
          <h2 className="pb-2 text-2xl tracking-tighter">Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ullam molestias animi sequi quaerat
            sed.
          </p>
        </article>
        <article className="pb-4">
          <h2 className="pb-2 text-2xl tracking-tighter">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ullam molestias animi sequi quaerat
            sed.
          </p>
        </article>
      </main>
    </>
  );
}
