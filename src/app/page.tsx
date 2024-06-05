//import img_hero from "#public/images/kristin-hero.webp";
//import img_salboai from "#public/icons/icon-512.png";
import img_kristin from "#public/images/kristin.webp";
import img_johan from "#public/images/johan.webp";
import { Header } from "#src/components/Header";
import { imageSizes } from "#src/utils/image-sizes";
import Image from "next/image";
import Link from "next/link";
import { HeroSvg } from "./HeroSvg";
import { TeamSection } from "#src/components/TeamSection";

export default function Page() {
  return (
    <>
      <Header>
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
              Salbo.ai
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-unthemed-neutral-100 delay-300">
              Actionable insights from large and small amounts of data
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

      <main className="">
        <section className="pb-4">
          <h2 className="text-2xl tracking-tighter">About</h2>
          <p>
            The vision of salbo.ai is to contribute to a sustainable society by creating data-driven, fact-based
            decision support, enabling our common assets to last longer and to be utilized more efficiently.
          </p>
          <p>
            With a unique competence in advanced analytics and artificial intelligence applied to transportation,
            infrastructure, and construction, salbo.ai creates actionable insights from large and small amounts of data.
          </p>
        </section>
        <TeamSection />
      </main>
      <footer className="pb-4">
        <h2 className="text-2xl tracking-tighter">Footer</h2>
        <p className="">footer</p>
      </footer>
    </>
  );
}
