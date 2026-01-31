"use client";

import Link from "next/link";
import clsx from "clsx";

interface NavLogoProps {
  href?: string;
  /** First part of brand name (e.g. "Arcin") */
  brandPrimary?: string;
  /** Second part of brand name (e.g. "IT") */
  brandSecondary?: string;
  /** Custom icon/svg (default: ArcinIT network circles) */
  icon?: React.ReactNode;
  /** Screen reader label */
  srLabel?: string;
  /** Text color for primary part */
  primaryClassName?: string;
  /** Text color for secondary part */
  secondaryClassName?: string;
  className?: string;
}

const DefaultIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="4" fill="url(#logoGrad)" opacity="0.9" />
    <circle cx="24" cy="12" r="4" fill="url(#logoGrad)" opacity="0.8" />
    <circle cx="18" cy="24" r="4" fill="url(#logoGrad)" opacity="0.85" />
    <circle cx="12" cy="12" r="2" fill="white" opacity="0.4" />
    <line
      x1="14.5"
      y1="13.5"
      x2="21.5"
      y2="13.5"
      stroke="url(#logoGrad)"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <line
      x1="13.5"
      y1="21.5"
      x2="14.5"
      y2="16.5"
      stroke="url(#logoGrad)"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <line
      x1="22.5"
      y1="21.5"
      x2="21.5"
      y2="16.5"
      stroke="url(#logoGrad)"
      strokeWidth="1.5"
      opacity="0.7"
    />
  </svg>
);

export default function NavLogo({
  href = "/",
  brandPrimary = "Arcin",
  brandSecondary = "IT",
  icon,
  srLabel,
  primaryClassName = "text-slate-800",
  secondaryClassName = "text-blue-600",
  className,
}: NavLogoProps) {
  const content = (
    <>
      {srLabel && <span className="sr-only">{srLabel}</span>}
      {icon ?? <DefaultIcon />}
      <span className="font-bold text-xl tracking-tight">
        <span className={primaryClassName}>{brandPrimary}</span>
        <span className={secondaryClassName}>{brandSecondary}</span>
      </span>
    </>
  );

  return (
    <Link href={href} className={clsx("flex items-center gap-2", className)}>
      {content}
    </Link>
  );
}
