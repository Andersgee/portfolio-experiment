import Link from "next/link";

const NAV_ITEMS = {
  "/": {
    name: "Home",
  },
  //  "/kristin": {
  //    name: "Kristin",
  //  },
  //  "/johan": {
  //    name: "Johan",
  //  },
};

export function Navbar() {
  return (
    <nav className="flex pb-12">
      {Object.entries(NAV_ITEMS).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className="flex px-2 py-1 align-middle text-color-unthemed-neutral-0 transition-colors hover:text-color-neutral-300 dark:hover:text-color-neutral-700"
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
