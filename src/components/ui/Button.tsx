import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_12px_26px_-12px_rgba(22,85,219,0.9)] hover:bg-brand-700 hover:shadow-[0_18px_34px_-14px_rgba(22,85,219,0.95)]",
  dark: "bg-brand-950 text-white hover:bg-brand-900 shadow-[0_12px_26px_-14px_rgba(10,31,74,0.9)]",
  outline:
    "border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white",
  white:
    "bg-white text-brand-700 hover:bg-brand-50 shadow-[0_12px_26px_-14px_rgba(3,17,48,0.6)]",
  ghost: "text-brand-700 hover:text-brand-900 hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-[15px]",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide",
    "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
