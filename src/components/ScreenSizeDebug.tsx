export default function ScreenSizeDebug() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }
  return (
    <div className="absolute bottom-0 left-0">
      <div className="bg-color-neutral-300 p-1 text-color-neutral-950">
        <div className="sm:hidden">screen: xs</div>
        <div className="hidden sm:block md:hidden">screen: sm</div>
        <div className="hidden md:block lg:hidden">screen: md</div>
        <div className="hidden lg:block xl:hidden">screen: lg</div>
        <div className="hidden xl:block 2xl:hidden">screen: xl</div>
        <div className="hidden 2xl:block">screen: 2xl</div>
      </div>
    </div>
  );
}
