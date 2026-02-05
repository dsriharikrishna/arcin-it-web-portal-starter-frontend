"use client";

import Link from "next/link";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  /** Show underline for active state (default: true) */
  showActiveIndicator?: boolean;
  /** Active indicator color class */
  activeIndicatorClassName?: string;
  /** Base link classes */
  className?: string;
  /** Active link classes */
  activeClassName?: string;
  /** Inactive link classes */
  inactiveClassName?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  isActive = false,
  showActiveIndicator = true,
  activeIndicatorClassName = "bg-white",
  className,
  activeClassName = "text-white",
  inactiveClassName = "text-slate-300 hover:text-white",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "relative py-2 text-sm font-medium transition-colors",
        isActive ? activeClassName : inactiveClassName,
        className
      )}
    >
      {children}
      {isActive && showActiveIndicator && (
        <span
          className={clsx(
            "absolute right-0 bottom-0 left-0 h-0.5 rounded-full",
            activeIndicatorClassName
          )}
        />
      )}
    </Link>
  );
}
