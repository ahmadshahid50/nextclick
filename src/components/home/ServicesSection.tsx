import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/ui/ServiceCard";
import { Divider } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative bg-white pb-24 pt-4" id="services">
      <div className="container-x">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-500">
              Who We Are
            </p>
            <h2 className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-[40px]">
              NextClick Corp.
              <span className="mt-1 block text-gradient">
                Defining Your Online
              </span>
              Presence
            </h2>
            <div className="mt-6">
              <Divider align="left" />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-[15px] leading-8 text-ink-soft">
              NextClick Corp. aims to provide the best services in town and help
              our clients have a better online presence. We build custom software
              and digital experiences that gain a solid customer base, then keep
              improving them with data. Our services are designed to help our
              clients find the perfect solution per their needs — and pull well
              ahead of the competition.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { value: "250+", label: "Projects Delivered" },
                { value: "12+", label: "Years In Business" },
                { value: "98%", label: "Client Retention" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-line bg-mist px-4 py-4"
                >
                  <p className="font-display text-2xl font-extrabold text-brand-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[12.5px] font-medium text-ink-soft">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80} className="h-full">
              <ServiceCard
                index={i}
                title={service.title}
                body={service.excerpt}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink href="/services" size="lg">
            View All Services
          </ButtonLink>
          <ButtonLink href="/contact" variant="dark" size="lg">
            Contact Us Now
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
