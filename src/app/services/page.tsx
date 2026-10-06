import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CallCentre from "@/components/home/CallCentre";
import WorkFlow from "@/components/home/WorkFlow";
import CtaBand from "@/components/home/CtaBand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Website design, web and software development, SEO, social media marketing, graphic design and call centre outsourcing from NextClick Corp.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Everything you need to build and
            <span className="block text-brand-200">grow online, in one team.</span>
          </>
        }
        description="Design, engineering, search, social and support — delivered by senior specialists who work together rather than passing your project between agencies."
        crumbs={[{ label: "Our Services" }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Services Built Around <span className="text-gradient">Outcomes</span>
              </>
            }
            description="Pick one service or let us run the whole programme. Either way you get the same senior team, the same reporting and the same fixed pricing."
          />

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
        </div>
      </section>

      <CallCentre />
      <WorkFlow />
      <CtaBand />
    </>
  );
}
