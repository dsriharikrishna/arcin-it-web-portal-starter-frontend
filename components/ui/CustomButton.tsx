import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonVariant = "solid" | "outline";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
}

export default function CustomButton({
  label,
  href,
  onClick,
  variant = "solid",
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = clsx(
    "custom-btn",
    variant === "solid" ? "custom-btn--solid" : "custom-btn--outline",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel ?? label}>
        <span className="custom-btn__text">{label}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel ?? label}
    >
      <span className="video-btn__text">{label}</span>
    </button>
  );
}