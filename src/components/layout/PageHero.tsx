import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  crumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brand-300/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="page-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)" />
        </svg>
      </div>

      <div className="container-x relative py-16 lg:py-20">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-100 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-[44px]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[15.5px] leading-8 text-brand-100">
            {description}
          </p>
        )}

        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-7">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] text-brand-200">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span aria-hidden className="text-brand-400">
                    /
                  </span>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      <svg
        className="block h-[50px] w-full text-white sm:h-[70px]"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 34c220 34 420 40 660 20s480-46 780-14v30H0Z" fill="currentColor" />
      </svg>
    </section>
  );
}
