import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Mail, Phone } from "@/components/ui/Icon";
import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="bg-white pb-20 lg:pb-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-7 py-12 text-center sm:px-12 lg:px-16 lg:py-16 lg:text-left">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-brand-900/25 blur-2xl" />
            </div>

            <div className="relative flex flex-col items-center justify-between gap-9 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-200">
                  Ready When You Are
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-[38px]">
                  Let us build something worth clicking on.
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-brand-100">
                  Tell us where your business is stuck and we will come back
                  within one working day with a plan, a timeline and a fixed
                  price — no obligation, no sales theatre.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-6 lg:justify-start">
                  <a
                    href={site.phones[0].href}
                    className="flex items-center gap-2.5 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    <Phone className="h-4.5 w-4.5 text-brand-200" />
                    {site.phones[0].value}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2.5 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    <Mail className="h-4.5 w-4.5 text-brand-200" />
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="/contact" variant="white" size="lg">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  size="lg"
                  className="border-2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
                >
                  Explore Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
