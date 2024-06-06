import { Header } from "#src/components/Header";
import { HeroSvg } from "./HeroSvg";
import { Navbar } from "#src/components/Navbar";
import { cn } from "#src/utils/cn";
import { imageSizes } from "#src/utils/image-sizes";
import img_kristin from "#public/images/kristin.webp";
import img_johan from "#public/images/johan.webp";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header>
        <Navbar links={[{ href: "/", label: "Home" }]} />
        <div className="absolute left-0 right-0 top-0 -z-50">
          <HeroSvg className="mx-auto h-96 w-full max-w-[1920px] object-cover object-bottom xl:h-[500px]" />
        </div>
        <div className="flex justify-between">
          <div className="pr-4">
            <h1 className="mb-4 animate-fade-and-slide-in text-4xl tracking-tight text-color-unthemed-neutral-300 xl:mb-8">
              Meet the team
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-unthemed-neutral-100 delay-300">
              Expertice in statistics, artificial intelligence and real world knowledge
            </p>
          </div>

          <div></div>
        </div>
      </Header>
      <main className="">
        <section className="pb-4">
          <h2 className="pb-6 text-2xl tracking-tighter">The team</h2>
          <div className="flex gap-4">
            <Link href="/kristin" className="transition-all ease-in hover:opacity-80">
              <Image
                src={img_kristin}
                alt="Kristin"
                sizes={imageSizes("w-24")}
                className="h-auto w-24 rounded-full shadow-xl"
              />
              <div className="mt-2 text-center text-xl">Kristin</div>
            </Link>
            <Link href="/johan" className="transition-all ease-in hover:opacity-80">
              <Image
                src={img_johan}
                alt="Johan"
                sizes={imageSizes("w-24")}
                className="h-auto w-24 rounded-full shadow-xl"
              />
              <div className="mt-2 text-center text-xl">Johan</div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
