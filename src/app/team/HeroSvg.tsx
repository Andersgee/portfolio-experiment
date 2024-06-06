type Props = {
  className?: string;
};
export function HeroSvg({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1000"
      preserveAspectRatio="xMidYMin slice"
      className={className}
    >
      <defs>
        <filter id="noise">
          <feTurbulence
            result="turbulence"
            type="fractalNoise"
            baseFrequency="0.102"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0"
            y="0"
            width="100%"
            height="100%"
          />

          <feSpecularLighting
            in="turbulence"
            result="specularLighting"
            surfaceScale="1"
            specularConstant="0.75"
            specularExponent="20"
            lightingColor="white"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feDistantLight azimuth="3" elevation="100" />
          </feSpecularLighting>
        </filter>

        <filter
          id="blur"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feGaussianBlur stdDeviation="15" edgeMode="duplicate" />
        </filter>

        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="20%" stopOpacity="0.75" className="[stop-color:#020617]" />
          <stop offset="100%" stopOpacity="0.1" className="[stop-color:#c026d3]" />
        </linearGradient>

        <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="50%">
          <stop offset="30%" stopOpacity="0.9" className="[stop-color:#701a75]" />
          <stop offset="100%" stopOpacity="0.1" className="[stop-color:#0369a1]" />
        </linearGradient>

        <linearGradient id="gradient3" x1="50%" y1="0%" x2="75%" y2="100%">
          <stop offset="0%" stopOpacity="0.8" className="[stop-color:#000000]" />
          <stop offset="30%" stopOpacity="0.65" className="[stop-color:#000000]" />
          <stop offset="100%" stopOpacity="0" className="[stop-color:#020617]" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="black" />
      <rect width="100%" height="100%" fill="url(#gradient1)" />
      <rect width="100%" height="100%" fill="url(#gradient2)" />
      <rect width="100%" height="100%" fill="url(#gradient3)" />
      <rect filter="url(#noise)" className="mix-blend-soft-light" width="100%" height="100%" />
    </svg>
  );
}
