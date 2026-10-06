import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import CtaBand from "@/components/home/CtaBand";
import WorkFlow from "@/components/home/WorkFlow";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Check, Phone, ServiceIcon } from "@/components/ui/Icon";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        description={service.summary}
        crumbs={[
          { label: "Our Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Main column */}
          <div className="lg:col-span-8">
            <Reveal>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </span>
              <h2 className="mt-7 font-display text-2xl font-bold leading-snug text-ink sm:text-[30px]">
                {service.excerpt}
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-ink-soft">
                {service.intro}
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <h3 className="font-display text-xl font-bold text-ink">
                What is included
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-line bg-mist px-4 py-3.5"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] leading-6 text-ink-soft">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140} className="mt-12">
              <h3 className="font-display text-xl font-bold text-ink">
                What you receive
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                {service.deliverables.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="font-display text-2xl font-extrabold text-brand-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-2 font-display text-[16px] font-bold text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-6 text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-12">
              <h3 className="font-display text-xl font-bold text-ink">
                Tools we work with
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {service.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-[13px] font-semibold text-brand-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 lg:space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg font-bold text-ink">
                    Other Services
                  </h3>
                  <span className="mt-3 block h-0.5 w-10 bg-brand-500" />
                  <ul className="mt-5 space-y-1.5">
                    {others.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/services/${other.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-[14px] font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          <span className="flex items-center gap-3">
                            <ServiceIcon
                              name={other.icon}
                              className="h-5 w-5 text-brand-500"
                            />
                            {other.title}
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100} className="mt-6 lg:mt-0">
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-500 p-7 text-white">
                  <h3 className="font-display text-xl font-bold">
                    Need {service.title.toLowerCase()}?
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-brand-100">
                    Tell us what you are trying to achieve and we will come back
                    within one working day with scope, timeline and price.
                  </p>
                  <ButtonLink
                    href="/contact"
                    variant="white"
                    className="mt-6 w-full"
                  >
                    Request a Quote
                  </ButtonLink>
                  <a
                    href={site.phones[0].href}
                    className="mt-4 flex items-center justify-center gap-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    <Phone className="h-4 w-4" />
                    {site.phones[0].value}
                  </a>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <WorkFlow />
      <CtaBand />
    </>
  );
}
