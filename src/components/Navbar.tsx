import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export function Navbar() {
  return (
    <aside className="">
      <nav className="flex flex-row space-x-0">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="flex px-2 py-1 align-middle transition-colors hover:text-color-neutral-700"
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
