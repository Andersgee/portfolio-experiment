import Link from "next/link";
import Image from "next/image";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
//import { TweetComponent } from "./tweet";
//import { LiveCode } from "./sandpack";
//import { highlight } from "sugar-high";
import React, { type ComponentProps } from "react";
import { cn } from "#src/utils/cn";

/*
function Table({ data }) {
  const headers = data.headers.map((header, index) => <th key={index}>{header}</th>);
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
*/
function CustomLink(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  const href = props.href!;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage({ alt, ...props }: ComponentProps<typeof Image>) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}

/*
function Code({ children, ...props }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
*/
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    const slug = slugify(props.children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      props.children
    );
  };
}

const components: MDXRemoteProps["components"] = {
  Image: RoundedImage,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  //Callout,
  //ProsCard,
  //ConsCard,
  //StaticTweet: TweetComponent,
  //code: Code,
  //Table,
  //LiveCode,
};

export function CustomMDX({ source }: { source: MDXRemoteProps["source"] }) {
  return <MDXRemote source={source} components={components} />;
}
