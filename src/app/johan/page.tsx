import img_avatar from "#public/images/johan.webp";
import img_hero from "#public/images/johan-hero.webp";
import { Header } from "#src/components/Header";
import Image from "next/image";
import { imageSizes } from "#src/utils/image-sizes";

export default function Page() {
  return (
    <>
      <Header>
        <div className="absolute left-0 right-0 top-0 -z-50 bg-color-unthemed-neutral-1000">
          <Image
            src={img_hero}
            priority
            className="blur-xs mx-auto h-96 object-cover object-bottom opacity-50 xl:h-[500px]"
            alt="svartån"
            placeholder="blur"
          />
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
          <h2 className="text-2xl tracking-tighter">Section</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum veritatis aspernatur esse
            inventore maxime numquam rerum rem odit suscipit.
          </p>
        </section>
        <article className="pb-4">
          <h2 className="text-2xl tracking-tighter">Article</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid optio veritatis iusto alias
            voluptatem perspiciatis impedit magnam ab similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum alias, magnam eligendi commodi
            iusto quasi suscipit facere delectus distinctio labore minima neque quo libero hic perspiciatis fugit,
            facilis at.
          </p>
        </article>
      </main>
      <footer className="pb-4">
        <h2 className="text-2xl tracking-tighter">Footer</h2>
        <p className="">footer</p>
      </footer>
    </>
  );
}
