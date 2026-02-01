import React, { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant =
  | "primary"
  | "secondary"
  | "gradient"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "primary-blue"
  | "icon-edit"
  | "icon-delete"
  | "icon-ghost"
  | "primary-blue-gradient"
  | "custom";

type ButtonProps = {
  children?: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  title?: string;
  /** When provided, renders as Link instead of button */
  href?: string;
};

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
  // 🔥 Updated Primary → Orange theme
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1",

  // ✔ Secondary (gray) – unchanged
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-1 focus:ring-gray-500 focus:ring-offset-1",

  // ✔ Gradient brand styling
  gradient:
    "bg-gradient-to-r from-orange-500 to-orange-300 text-white hover:opacity-90 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1 shadow-lg shadow-orange-500/30",

  outline:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1",

  ghost:
    "text-gray-700 hover:bg-gray-100 focus:ring-1 focus:ring-orange-500 focus:ring-offset-1",

  danger:
    "bg-red-500 text-white hover:bg-red-600 focus:ring-1 focus:ring-red-500 focus:ring-offset-1",

  success:
    "bg-green-500 text-white hover:bg-green-600 focus:ring-1 focus:ring-green-500 focus:ring-offset-1",

  "primary-blue":
    "bg-blue-500 text-white hover:bg-blue-600 focus:ring-1 focus:ring-blue-500 focus:ring-offset-1",

  // Icon-only variants
  "icon-edit":
    "text-blue-600 hover:bg-blue-50 focus:ring-1 focus:ring-blue-500",

  "icon-delete": "text-red-600 hover:bg-red-50 focus:ring-1 focus:ring-red-500",

  "icon-ghost":
    "text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-500",
  custom: "",
  "primary-blue-gradient":
    "bg-gradient-to-r from-blue-500 to-blue-300 text-white hover:opacity-90 focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 shadow-lg shadow-blue-500/30",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  startIcon,
  endIcon,
  className,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  title,
  href,
}) => {
  const isIconOnly = !children && (startIcon || endIcon);
  const isIconVariant = variant.startsWith("icon-");
  const baseClasses = clsx(
    "inline-flex items-center justify-center gap-2 transition-colors focus:outline-none",
    "disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    baseSizeStyles[size],
    isIconOnly || isIconVariant ? iconSizeStyles[size] : sizeStyles[size],
    roundedStyles[rounded],
    variantStyles[variant],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {startIcon && !isIconOnly && <span className="me-2">{startIcon}</span>}
        {isIconOnly ? startIcon || endIcon : children}
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
      className={baseClasses}
    >
      {startIcon && !isIconOnly && <span className="me-2">{startIcon}</span>}
      {isIconOnly ? startIcon || endIcon : children}
      {endIcon && !isIconOnly && <span className="ms-2">{endIcon}</span>}
    </button>
  );
};

export default React.memo(Button);
