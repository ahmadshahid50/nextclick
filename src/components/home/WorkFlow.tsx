import { StepArt } from "@/components/art/Illustrations";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    key: "strategy" as const,
    number: "01",
    title: "Strategy",
    body: "We dig into your market, your customers and your numbers, then agree on what success looks like before any work starts.",
  },
  {
    key: "design" as const,
    number: "02",
    title: "Design",
    body: "Wireframes become polished, on-brand interfaces — reviewed with you at every breakpoint, never sprung on you at the end.",
  },
  {
    key: "develop" as const,
    number: "03",
    title: "Develop",
    body: "Clean, typed, tested code shipped in weekly increments so you can see real progress on a real staging environment.",
  },
  {
    key: "support" as const,
    number: "04",
    title: "Support",
    body: "Launch is the start. We monitor, patch, optimise and keep improving conversion long after go-live day.",
  },
];

export default function WorkFlow() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              Our Work <span className="text-gradient">Flow</span>
            </>
          }
          description="A transparent four-step process that keeps you informed from the first conversation through to ongoing support."
        />

        <div className="relative mt-16">
          {/* Connector */}
          <div
            className="absolute left-0 right-0 top-14 hidden lg:block"
            aria-hidden
          >
            <svg className="h-3 w-full" viewBox="0 0 1200 12" preserveAspectRatio="none">
              <path
                d="M60 6h1080"
                stroke="var(--color-brand-300)"
                strokeWidth="2"
                strokeDasharray="10 12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.key} delay={i * 120} className="text-center">
                <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full border-2 border-dashed border-brand-200 bg-white shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-400">
                  <StepArt step={step.key} className="h-12 w-12" />
                  <span className="absolute -right-1 -top-1 grid h-9 w-9 place-items-center rounded-full bg-brand-600 font-display text-[13px] font-extrabold text-white shadow-[0_8px_16px_-8px_rgba(22,85,219,0.9)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">
                  {step.number}. {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[14px] leading-7 text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
