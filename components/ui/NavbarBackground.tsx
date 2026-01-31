"use client";

import clsx from "clsx";

// Abstract circuit/network pattern SVG
const PATTERN_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="60" viewBox="0 0 400 60">
  <defs>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgba(96,165,250,0)"/>
      <stop offset="30%" style="stop-color:rgba(96,165,250,0.15)"/>
      <stop offset="70%" style="stop-color:rgba(96,165,250,0.25)"/>
      <stop offset="100%" style="stop-color:rgba(96,165,250,0.1)"/>
    </linearGradient>
  </defs>
  <path d="M0 20 Q50 10 80 25 T160 20 T240 15 T320 25 T400 18" fill="none" stroke="url(#lineGrad)" stroke-width="0.5"/>
  <path d="M0 35 Q60 45 120 32 T200 38 T280 30 T360 35 T400 28" fill="none" stroke="url(#lineGrad)" stroke-width="0.5"/>
  <path d="M0 45 Q40 30 100 45 T180 38 T260 42 T340 35 T400 40" fill="none" stroke="url(#lineGrad)" stroke-width="0.5"/>
  <circle cx="80" cy="25" r="1" fill="rgba(96,165,250,0.3)"/>
  <circle cx="200" cy="38" r="1" fill="rgba(96,165,250,0.3)"/>
  <circle cx="320" cy="30" r="1" fill="rgba(96,165,250,0.3)"/>
</svg>
`);

interface NavbarBackgroundProps {
  /** Gradient classes (default: light-to-dark) */
  gradientClassName?: string;
  /** Pattern opacity 0-100 (default: 60) */
  patternOpacity?: number;
  /** Show/hide pattern overlay (default: true) */
  showPattern?: boolean;
  /** Additional className for wrapper */
  className?: string;
}

export default function NavbarBackground({
  gradientClassName = "bg-gradient-to-r from-slate-100 via-slate-200 to-slate-900",
  patternOpacity = 60,
  showPattern = true,
  className,
}: NavbarBackgroundProps) {
  return (
    <div className={clsx("absolute inset-0 -z-[1]", className)} aria-hidden>
      <div className={clsx("absolute inset-0", gradientClassName)} />
      {showPattern && (
        <div
          className="absolute inset-0"
          style={{
            opacity: patternOpacity / 100,
            backgroundImage: `url("data:image/svg+xml,${PATTERN_SVG}")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
      )}
    </div>
  );
}
