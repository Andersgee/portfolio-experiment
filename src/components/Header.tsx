type Props = {
  children: React.ReactNode;
};

export function Header(props: Props) {
  return <header className="h-72 xl:h-[400px]">{props.children}</header>;
}
