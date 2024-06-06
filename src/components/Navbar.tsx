import Link from "next/link";

type Props = {
  links: { href: string; label: string }[];
};
export function Navbar({ links }: Props) {
  return (
    <nav className="mb-20 flex gap-2">
      {links.map(({ href, label }) => {
        return (
          <Link
            key={label}
            href={href}
            className="flex px-2 py-1 align-middle text-color-unthemed-neutral-0 transition-colors hover:text-color-neutral-300 dark:hover:text-color-neutral-700"
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
