import { cn } from "#src/utils/cn";
import { imageSizes } from "#src/utils/image-sizes";
import img_kristin from "#public/images/kristin.webp";
import img_johan from "#public/images/johan.webp";
import Link from "next/link";
import Image from "next/image";

type Props = {
  className?: string;
};

export function TeamSection({ className }: Props) {
  return (
    <section className={cn("pb-4", className)}>
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
  );
}
