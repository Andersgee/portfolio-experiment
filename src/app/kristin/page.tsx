import img_avatar from "#public/images/kristin.webp";
import img_hero from "#public/images/kristin-hero.webp";
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
            { href: "/team", label: "Team" },
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
          <div className="pr-4">
            <h1 className="mb-4 animate-fade-and-slide-in text-4xl tracking-tight text-color-unthemed-neutral-300 xl:mb-8">
              Kristin
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-unthemed-neutral-100 delay-300">
              Artificial Intelligence and Real World Knowledge
            </p>
          </div>

          <Image
            src={img_avatar}
            priority
            alt="Kristin"
            sizes={imageSizes("w-24")}
            className="h-24 w-24 animate-img-fade-in rounded-full shadow-xl delay-1000"
          />
        </div>
      </Header>
      <main className="">
        <section className="pb-4">
          <h2 className="text-2xl tracking-tighter">About me</h2>
          <p>
            I am passionate about extracting valuable insights from data and to bridge the gap between data and
            business. I believe that artificial intelligence needs hands-on real world knowledge to be efficient - and I
            aim to combine the best of both worlds.
          </p>
        </section>
        <section className="pb-4">
          <h2 className="text-2xl tracking-tighter">Lets chat</h2>
          <p>
            Find me on social media or at <code>kristin@salbo.ai</code>
          </p>
          <div className="flex">
            <LinkedInLink href="https://www.linkedin.com/in/kristin-ekl%C3%B6f-46ab97a8" />
          </div>
        </section>
      </main>
    </>
  );
}
