import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Divider } from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/Icon";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  paragraphs: string[];
  bullets?: string[];
  art: ReactNode;
  /** Places the artwork on the right instead of the left. */
  reverse?: boolean;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  muted?: boolean;
  id?: string;
};

export default function FeatureSplit({
  eyebrow,
  title,
  paragraphs,
  bullets,
  art,
  reverse = false,
  primary,
  secondary,
  muted = false,
  id,
}: Props) {
  return (
    <section id={id} className={muted ? "bg-mist py-20 lg:py-24" : "bg-white py-20 lg:py-24"}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal
          className={`mx-auto w-full max-w-lg lg:max-w-none ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          {art}
        </Reveal>

        <Reveal delay={120} className={reverse ? "lg:order-1" : ""}>
          {eyebrow && (
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-500">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-bold leading-[1.22] tracking-tight text-ink sm:text-[38px]">
            {title}
          </h2>
          <div className="mt-6">
            <Divider align="left" />
          </div>

          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-[15px] leading-8 text-ink-soft">
              {paragraph}
            </p>
          ))}

          {bullets && (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] leading-6 text-ink-soft">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {(primary || secondary) && (
            <div className="mt-9 flex flex-wrap gap-4">
              {primary && (
                <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
              )}
              {secondary && (
                <ButtonLink href={secondary.href} variant="dark">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
