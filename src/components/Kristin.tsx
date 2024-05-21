import Image from "next/image";
import { imageSizes } from "#src/utils/image-sizes";
import img from "#public/images/kristin.webp";

type Props = {
  className?: string;
};

export function Kristin({ className }: Props) {
  return <Image src={img} alt="Kristin" sizes={imageSizes("w-24")} className="h-auto w-24 rounded-full shadow-xl" />;
}
