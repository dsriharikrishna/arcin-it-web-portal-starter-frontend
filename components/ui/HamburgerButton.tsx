"use client";

import clsx from "clsx";

interface HamburgerButtonProps {
  onClick?: () => void;
  /** Open/expanded state (for icon animation) */
  isOpen?: boolean;
  ariaLabel?: string;
  className?: string;
}

export default function HamburgerButton({
  onClick,
  isOpen = false,
  ariaLabel = "Toggle menu",
  className,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      className={clsx(
        "flex items-center justify-center w-10 h-10 rounded-lg",
        "bg-gradient-to-b from-blue-500 to-indigo-600 shadow-md",
        "hover:from-blue-600 hover:to-indigo-700 transition-all",
        className
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-transform"
      >
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </button>
  );
}
