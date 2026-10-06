import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icon";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="container-x relative text-center">
        <p className="font-display text-[110px] font-extrabold leading-none text-gradient sm:text-[150px]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-8 text-ink-soft">
          The page you are after has been moved or never existed. Try one of our
          services below, or head back to the homepage.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" size="lg">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="dark" size="lg">
            Contact Us
          </ButtonLink>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-full border border-line bg-mist px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
