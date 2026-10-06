"use client";

import { useCallback, useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icon";
import { HeroArt, MarketingArt, UxArt } from "@/components/art/Illustrations";

const slides = [
  {
    eyebrow: "Rank Higher. Sell More.",
    title: ["Search Engine", "Optimization"],
    body: "Using effective and proven search engine optimisation techniques, we can bring your website onto page one of the search rankings and drive massive, qualified web traffic.",
    href: "/services/search-engine-optimization",
    Art: HeroArt,
  },
  {
    eyebrow: "Design. Build. Launch.",
    title: ["Custom Websites", "& Web Apps"],
    body: "From a marketing site your team can edit to a full customer platform, we design and engineer fast, secure products on Next.js and TypeScript — built to grow with you.",
    href: "/services/website-development",
    Art: UxArt,
  },
  {
    eyebrow: "Campaigns That Convert",
    title: ["Digital Marketing", "That Pays Back"],
    body: "Paid search, social campaigns and content that are measured against revenue rather than impressions. Every dollar is tracked from the first click to the signed deal.",
    href: "/services/social-media-marketing",
    Art: MarketingArt,
  },
];

const AUTOPLAY_MS = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  const active = slides[index];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Highlighted services"
    >
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container-x relative grid items-center gap-10 pb-28 pt-16 lg:grid-cols-2 lg:gap-6 lg:pb-36 lg:pt-20">
        {/* Copy */}
        <div key={index} className="reveal is-visible max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.2em] text-brand-100 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
            {active.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            {active.title[0]}
            <span className="block text-brand-200">{active.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15.5px] leading-8 text-brand-100">
            {active.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href={active.href} variant="white" size="lg">
              Discover More
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="border-2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              Talk To Us
            </ButtonLink>
          </div>
        </div>

        {/* Art */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <active.Art key={`art-${index}`} className="reveal is-visible h-auto w-full" />
        </div>
      </div>

      {/* Controls */}
      <div className="container-x relative -mt-14 flex items-center gap-3 pb-16 lg:-mt-20">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <div className="ml-2 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Wave */}
      <svg
        className="block h-[70px] w-full text-white sm:h-[90px]"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 44c180 40 360 52 540 34s360-62 540-56 300 44 360 62V90H0Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
