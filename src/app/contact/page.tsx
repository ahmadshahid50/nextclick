import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Clock, Mail, Phone, Pin, SocialIcon } from "@/components/ui/Icon";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Talk to ${site.name} about your website, web app, SEO or call centre project. Offices in Sydney and Brisbane.`,
};

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Discovery usually begins within one to two weeks of a signed proposal. Urgent fixes and support work can often start the same week.",
  },
  {
    q: "Do you work on fixed prices?",
    a: "Yes. After a short discovery call we issue a fixed scope and fixed price. Anything outside that scope is quoted separately before work starts.",
  },
  {
    q: "Who owns the code and accounts?",
    a: "You do — always. Repositories, hosting, analytics and ad accounts are created in your name and handed over in full at the end of the engagement.",
  },
  {
    q: "Do you support sites you did not build?",
    a: "Often. We run a paid technical audit first so both sides know what condition the codebase is in before we commit to a retainer.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Tell us what you need built.
            <span className="block text-brand-200">We will tell you how.</span>
          </>
        }
        description="Every enquiry is read by a senior member of the team, not a sales bot. Expect a real answer within one working day."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-500">
                Send a Message
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                Request a free quote
              </h2>
              <p className="mt-3 text-[14.5px] leading-7 text-ink-soft">
                Fill in the form and we will come back with scope, timeline and a
                fixed price. No obligation.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 p-8 text-white">
                <h2 className="font-display text-2xl font-bold">
                  Contact Information
                </h2>
                <span className="mt-4 block h-0.5 w-12 bg-brand-300" />

                <ul className="mt-8 space-y-7">
                  <li className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-200">
                        Call Us
                      </p>
                      {site.phones.map((phone) => (
                        <a
                          key={phone.value}
                          href={phone.href}
                          className="mt-1 block text-[15px] font-semibold transition-opacity hover:opacity-80"
                        >
                          {phone.value}
                          <span className="ml-2 text-[12px] font-normal text-brand-200">
                            {phone.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-200">
                        Email Us
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-1 block break-all text-[15px] font-semibold transition-opacity hover:opacity-80"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15">
                      <Pin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-200">
                        Visit Us
                      </p>
                      <p className="mt-1 text-[15px] font-semibold leading-7">
                        {site.address.line1}
                        <br />
                        {site.address.line2}
                      </p>
                      <p className="mt-1 text-[12.5px] text-brand-200">
                        ACN {site.acn}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-200">
                        Office Hours
                      </p>
                      <p className="mt-1 text-[15px] font-semibold leading-7">
                        Mon – Fri: 9:00am – 5:30pm
                        <br />
                        <span className="text-[13px] font-normal text-brand-200">
                          Support desk open 24/7 for retainer clients
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-9 border-t border-white/15 pt-6">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-200">
                    Follow Us
                  </p>
                  <div className="mt-3 flex gap-2.5">
                    {site.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={social.name}
                        className="grid h-10 w-10 place-items-center rounded-full bg-white/12 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-700"
                      >
                        <SocialIcon name={social.name} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-6">
              <div className="overflow-hidden rounded-3xl border border-line bg-white p-2 shadow-[var(--shadow-card)]">
                <iframe
                  title={`Map showing ${site.name} at ${site.address.full}`}
                  src={`https://maps.google.com/maps?q=${site.address.mapQuery}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full rounded-2xl border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Good To Know"
            title={
              <>
                Frequently Asked <span className="text-gradient">Questions</span>
              </>
            }
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 90}>
                <details className="group rounded-2xl border border-line bg-white px-6 py-5 shadow-[var(--shadow-card)] open:border-brand-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[16px] font-bold text-ink marker:hidden">
                    {faq.q}
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[14.5px] leading-7 text-ink-soft">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
