import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { callCentreServices } from "@/data/services";

export default function CallCentre() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title={
            <>
              Call Centre <span className="text-gradient">Services</span>
            </>
          }
          description="Back-office and customer-facing teams that plug straight into your business, trained on your product and measured on your numbers."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {callCentreServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="h-full">
              <ServiceCard
                title={service.title}
                body={service.body}
                icon={service.icon}
                href={service.href}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
