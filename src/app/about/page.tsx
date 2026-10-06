import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import FeatureSplit from "@/components/home/FeatureSplit";
import WorkFlow from "@/components/home/WorkFlow";
import Clients from "@/components/home/Clients";
import CtaBand from "@/components/home/CtaBand";
import Mission from "@/components/home/Mission";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChoiceArt, GrowthArt } from "@/components/art/Illustrations";
import { ServiceIcon } from "@/components/ui/Icon";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is a Sydney software agency building websites, web apps and digital marketing systems for Australian businesses.`,
};

const values = [
  {
    icon: "design" as const,
    title: "Clarity First",
    body: "No jargon, no black boxes. You get plain-English plans, visible timelines and a price that does not move mid-project.",
  },
  {
    icon: "code" as const,
    title: "Built To Last",
    body: "We write typed, tested, documented code. When you outgrow us, your next team will thank us rather than rebuild from scratch.",
  },
  {
    icon: "seo" as const,
    title: "Measured On Revenue",
    body: "Traffic and impressions are inputs, not outcomes. Every engagement is reported against pipeline and revenue.",
  },
  {
    icon: "headset" as const,
    title: "Genuinely Available",
    body: "A named team, a shared channel and a support response under four hours during business days. No ticket black holes.",
  },
];

const milestones = [
  { year: "2013", title: "Founded in Sydney", body: "Three developers, one office in Surry Hills and a first client who is still with us." },
  { year: "2016", title: "Call centre launched", body: "Added inbound and outbound teams so clients could scale support alongside their websites." },
  { year: "2019", title: "Brisbane office", body: "A second location opened to serve growing demand across Queensland." },
  { year: "2024", title: "250+ projects", body: "From single-page sites to multi-tenant platforms, all still maintained in-house." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            A software agency that treats your
            <span className="block text-brand-200">numbers as our own.</span>
          </>
        }
        description={`${site.name} builds websites, web applications and digital marketing programmes for Australian businesses that need technology to pay for itself.`}
        crumbs={[{ label: "About Us" }]}
      />

      <FeatureSplit
        eyebrow="Our Story"
        title={
          <>
            Twelve years of building things that{" "}
            <span className="text-gradient">actually get used</span>
          </>
        }
        paragraphs={[
          "NextClick Corp. started in 2013 with three developers and a simple frustration: too many agencies were selling websites that looked good in a pitch deck and did nothing for the business behind them. We set out to be the opposite — a team that asks about your margins before it asks about your colour palette.",
          "Today we are a full-service software agency with offices in Sydney and Brisbane, covering design, engineering, search, paid media and outsourced customer support. The through-line has not changed: build the right thing, build it well, and be honest about what it costs.",
        ]}
        bullets={[
          "Offices in Sydney and Brisbane",
          "Senior in-house team, no offshore hand-offs",
          "250+ projects delivered since 2013",
          "98% of clients stay past year one",
        ]}
        art={<ChoiceArt className="h-auto w-full" />}
        primary={{ label: "Our Services", href: "/services" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />

      <Mission />

      {/* Values */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Stand For"
            title={
              <>
                The Way We <span className="text-gradient">Work</span>
              </>
            }
            description="Four principles that decide how we scope, build and support every project we take on."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <div className="group flex h-full gap-5 rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-400 group-hover:bg-brand-600 group-hover:text-white">
                    <ServiceIcon name={value.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] font-bold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-7 text-ink-soft">
                      {value.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Milestones"
            title={
              <>
                How We Got <span className="text-gradient">Here</span>
              </>
            }
          />

          <div className="relative mt-14">
            <span
              className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-brand-200 lg:left-1/2 lg:-translate-x-1/2"
              aria-hidden
            />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <Reveal key={milestone.year} delay={i * 100}>
                  <div
                    className={`relative flex gap-6 lg:w-1/2 ${
                      i % 2 === 0
                        ? "lg:ml-0 lg:flex-row-reverse lg:pr-10 lg:text-right"
                        : "lg:ml-auto lg:pl-10"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-2 z-10 h-10 w-10 shrink-0 rounded-full border-4 border-mist bg-brand-600 lg:left-auto ${
                        i % 2 === 0 ? "lg:-right-5" : "lg:-left-5"
                      }`}
                      aria-hidden
                    />
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-[11px] font-extrabold text-white lg:hidden">
                      {milestone.year}
                    </span>
                    <div className="flex-1 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                      <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-brand-600">
                        {milestone.year}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-bold text-ink">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-7 text-ink-soft">
                        {milestone.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Results"
        title={
          <>
            Growth We Have <span className="text-gradient">Driven</span>
          </>
        }
        paragraphs={[
          "We are one of the leading companies in the market, offering reliable and efficient services tailored to the needs of our clients. Most of our clientele is recurring or arrives through word-of-mouth recommendations — the clearest statement we can make about the quality of the work.",
        ]}
        bullets={[
          "3.4x average return on ad spend",
          "90+ Lighthouse scores on every build",
          "Sub-4-hour support response",
          "Zero unplanned downtime in 2024",
        ]}
        art={<GrowthArt className="h-auto w-full" />}
        reverse
        primary={{ label: "Start a Project", href: "/contact" }}
      />

      <WorkFlow />
      <Clients />
      <CtaBand />
    </>
  );
}
