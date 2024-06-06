import img_avatar from "#public/images/johan.webp";
//import img_hero from "#public/images/johan-hero.webp";
import { Header } from "#src/components/Header";
import Image from "next/image";
import { imageSizes } from "#src/utils/image-sizes";
import { HeroSvg } from "./HeroSvg";
import { TeamSection } from "#src/components/TeamSection";
import { Navbar } from "#src/components/Navbar";
import { LinkedInLink } from "#src/components/LinkedInLink";

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

        <div className="flex justify-between">
          <div className="mr-4 rounded-md p-2">
            <h1 className="mb-4 animate-fade-and-slide-in text-4xl tracking-tight text-color-unthemed-neutral-200 xl:mb-8">
              Johan
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-unthemed-neutral-0 delay-300">
              Landsbygd som blomstrar med data
            </p>
          </div>

          <Image
            src={img_avatar}
            priority
            alt="Johan"
            sizes={imageSizes("w-24")}
            className="h-24 w-24 animate-img-fade-in rounded-full shadow-xl delay-1000"
          />
        </div>
      </Header>

      <main className="">
        <section className="pb-4">
          <h2 className="text-2xl tracking-tighter">About me</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum veritatis aspernatur esse
            inventore maxime numquam rerum rem odit suscipit.
          </p>
        </section>
        <section className="pb-4">
          <h2 className="text-2xl tracking-tighter">Lets chat</h2>
          <p>
            Find me on social media or at <code>johan@salbo.ai</code>
          </p>
          <div className="flex">
            <LinkedInLink href="https://www.linkedin.com/in/johaneklo" />
          </div>
        </section>
      </main>
    </>
  );
}
