import { cn } from "#src/utils/cn";
import { imageSizes } from "#src/utils/image-sizes";
import Image from "next/image";
import img_linkedin from "public/images/linkedinlogo.png";

type Props = {
  href: string;
  className?: string;
};

export function LinkedInLink({ href, className }: Props) {
  return (
    <a className={cn("transition-all ease-in hover:opacity-80", className)} target="_blank" href={href}>
      <Image src={img_linkedin} alt={"linkedin"} sizes={imageSizes("w-12")} className="h-auto w-12" />
    </a>
  );
}
