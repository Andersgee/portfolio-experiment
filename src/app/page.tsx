import { Kristin } from "#src/components/Kristin";

export default function Page() {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-4 text-4xl tracking-tight text-color-neutral-800 xl:mb-8">Kristin Eklöf</h1>
            <p className="text-balance text-color-neutral-1000">Artificial Intelligence and Real World Knowledge</p>
          </div>
          <Kristin />
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
