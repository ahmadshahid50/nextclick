import Reveal from "@/components/ui/Reveal";
import { Badge, Responsive, Chart } from "@/components/ui/Icon";

const features = [
  {
    title: "Fully Responsive",
    body: "Every build is tested on phones, tablets and desktops before it ships.",
    Icon: Responsive,
  },
  {
    title: "Brand Specific",
    body: "No recycled templates — the design is drawn around your identity alone.",
    Icon: Badge,
  },
  {
    title: "SEO Optimised",
    body: "Clean markup, fast loads and schema so search engines rank you properly.",
    Icon: Chart,
  },
];

export default function DreamBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
          <defs>
            <pattern id="dream-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.6" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dream-dots)" />
        </svg>
      </div>

      <div className="container-x relative py-20 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-[42px]">
            You <span className="text-brand-300">Dream</span> It. We{" "}
            <span className="text-brand-300">Turn</span> It To Reality.
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-brand-200">
            At NextClick Corp., we believe in one thing: nothing is impossible
            when a good plan meets good engineering. Whether you want a brand-new
            website or a tired one brought back to life, our team of experienced
            developers and designers are ready to build it — and to keep it fast,
            secure and profitable long after launch.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 110}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-400/50 hover:bg-white/[0.1]">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/30 transition-all duration-400 group-hover:bg-brand-500 group-hover:text-white">
                  <feature.Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-brand-200">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
