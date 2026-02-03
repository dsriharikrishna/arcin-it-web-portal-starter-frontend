import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

type CustomButtonVariant =
  | "solid"
  | "outline"
  | "gradient"
  | "primary"
  | "secondary"
  | "custom";

interface CustomButtonProps {
  children: ReactNode;
  label?: string; // Optional for backward compatibility
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: CustomButtonVariant;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  className?: string;
  ariaLabel?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  title?: string;
}

// Base text sizing
const baseSizeStyles = {
  sm: "text-xs font-medium",
  md: "text-sm font-medium",
  lg: "text-base font-medium",
};

// Padding + height
const sizeStyles = {
  sm: "h-8 px-4",
  md: "h-10 px-6",
  lg: "h-12 px-8",
};

// Icon-only button sizing (square)
const iconSizeStyles = {
  sm: "h-7 w-7 p-0",
  md: "h-9 w-9 p-0",
  lg: "h-11 w-11 p-0",
};

const roundedStyles = {
  sm: "rounded",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

const variantStyles = {
  solid:
    "custom-btn custom-btn--solid",
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1",

  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-1 focus:ring-gray-500 focus:ring-offset-1",

  gradient:
    "bg-gradient-to-r from-orange-500 to-orange-300 text-white hover:opacity-90 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 shadow-lg shadow-orange-500/30",

  outline:
    "custom-btn custom-btn--outline",
  custom: "",

};

export default function CustomButton({
  children,
  label,
  href,
  onClick,
  variant = "solid",
  size = "md",
  rounded = "full",
  className,
  ariaLabel,
  startIcon,
  endIcon,
  type = "button",
  disabled = false,
  fullWidth = false,
  title,
}: CustomButtonProps) {
  // Use children if provided, otherwise fall back to label
  const content = children || (label && <span className="custom-btn__text">{label}</span>);
  const ariaLabelValue = ariaLabel ?? (typeof children === 'string' ? children : label);

  const isIconOnly = !children && !label && (startIcon || endIcon);
  const isIconVariant = variant.startsWith("icon-");
  const isCustomCSSVariant = variant === "solid" || variant === "outline";

  const classes = clsx(
    // Only apply base Tailwind classes if NOT using custom CSS variants
    !isCustomCSSVariant && "inline-flex items-center justify-center gap-2 transition-colors focus:outline-none cursor-pointer",
    !isCustomCSSVariant && "disabled:opacity-50 disabled:pointer-events-none",
    !isCustomCSSVariant && baseSizeStyles[size],
    !isCustomCSSVariant && (isIconOnly || isIconVariant ? iconSizeStyles[size] : sizeStyles[size]),
    !isCustomCSSVariant && roundedStyles[rounded],
    variantStyles[variant],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabelValue}>
        {startIcon && !isIconOnly && <span className="me-2">{startIcon}</span>}
        <span className="custom-btn__text">
          {isIconOnly ? startIcon || endIcon : content}
        </span>
        {endIcon && !isIconOnly && <span className="ms-2">{endIcon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={classes}
      aria-label={ariaLabelValue}
    >
      {startIcon && !isIconOnly && <span className="me-2">{startIcon}</span>}
      <span className="custom-btn__text">
        {isIconOnly ? startIcon || endIcon : content}
      </span>
      {endIcon && !isIconOnly && <span className="ms-2">{endIcon}</span>}
    </button>
  );
}