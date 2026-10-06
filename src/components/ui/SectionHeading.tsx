import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
};

export function Divider({
  align = "center",
  tone = "dark",
}: {
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "bg-white/50" : "bg-brand-500";
  const dot = tone === "light" ? "bg-white" : "bg-brand-600";
  return (
    <div
      className={`flex items-center gap-1.5 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
      aria-hidden
    >
      <span className={`h-px w-8 ${color} opacity-60`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-16 ${color}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-8 ${color} opacity-60`} />
    </div>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: Props) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-bold uppercase tracking-[0.28em] ${
            tone === "light" ? "text-brand-200" : "text-brand-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-5 ${isCenter ? "" : "flex"}`}>
        <Divider align={align} tone={tone} />
      </div>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-7 ${
            tone === "light" ? "text-brand-100" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
