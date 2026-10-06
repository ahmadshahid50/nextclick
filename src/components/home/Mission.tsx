"use client";

import { useEffect, useState } from "react";
import { MissionArt } from "@/components/art/Illustrations";
import { Divider } from "@/components/ui/SectionHeading";

const statements = [
  {
    title: "Our Mission",
    body: "Our mission is to provide our clients with valuable solutions and strategies that are on the hottest trends in the market. We are a team of highly qualified professionals with expertise across web design, software engineering, branding and digital marketing — all working to make sure that every project we take on measurably grows the business behind it.",
  },
  {
    title: "Our Vision",
    body: "We want to be the partner Australian businesses call first when technology needs to earn its keep. That means no jargon, no vanity metrics and no black boxes — just clear plans, honest timelines and software that keeps performing long after the invoice is paid.",
  },
  {
    title: "Our Promise",
    body: "Every engagement gets a named team, a fixed scope and a weekly demo. You will always know what we are building, what it costs and what it is doing for your pipeline. If something is not working, we say so early and fix it together.",
  },
];

export default function Mission() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % statements.length),
      7000,
    );
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  const active = statements[index];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-900/30 blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <MissionArt className="h-auto w-full animate-float-slow" />
        </div>

        <div className="text-center lg:text-left">
          <h2
            key={`title-${index}`}
            className="reveal is-visible font-display text-3xl font-bold text-white sm:text-4xl"
          >
            {active.title}
          </h2>
          <div className="mt-5 flex justify-center lg:justify-start">
            <Divider tone="light" align="left" />
          </div>
          <p
            key={`body-${index}`}
            className="reveal is-visible mt-6 text-[15.5px] leading-8 text-brand-50"
          >
            {active.body}
          </p>

          <div className="mt-9 flex items-center justify-center gap-2.5 lg:justify-start">
            {statements.map((statement, i) => (
              <button
                key={statement.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${statement.title}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-9 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
