import Image from "next/image";
import { imageSizes } from "#src/utils/image-sizes";
import img_kristin from "#public/images/kristin.webp";

export default function Page() {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="animate-fade-and-slide-in mb-4 text-4xl tracking-tight text-color-neutral-800 xl:mb-8">
              Kristin Eklöf
            </h1>
            <p className="animate-fade-and-slide-in text-balance text-color-neutral-1000 delay-300">
              Artificial Intelligence and Real World Knowledge
            </p>
          </div>
          <div className="animate-img-fade-in delay-1000">
            <Image
              src={img_kristin}
              alt="Kristin"
              sizes={imageSizes("w-24")}
              className="h-auto w-24 rounded-full shadow-xl"
            />
          </div>
        </div>
      </header>
      <main className="mt-48 xl:mt-72">
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
