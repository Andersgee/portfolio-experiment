type Props = {
  children: React.ReactNode;
};

export function Header(props: Props) {
  return <header className="h-[380px] xl:h-[500px]">{props.children}</header>;
}
