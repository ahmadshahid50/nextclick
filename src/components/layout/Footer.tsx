import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, Pin, SocialIcon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { site } from "@/data/site";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-950 text-brand-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-3">
          <div className="inline-block rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <Logo tone="light" withTagline />
          </div>
          <p className="mt-5 text-[14px] leading-7 text-brand-200">
            {site.description}
          </p>
          <div className="mt-6 flex gap-2.5">
            {site.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-500"
              >
                <SocialIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="font-display text-lg font-bold text-white">Get In Touch</h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-500" />
          <ul className="mt-6 space-y-5 text-[14px]">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
              <span>
                {site.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={phone.href}
                    className="block text-brand-100 transition-colors hover:text-white"
                  >
                    {phone.value}
                  </a>
                ))}
                <span className="mt-1 block text-[12px] text-brand-300">
                  Give us a call
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
              <span>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-brand-100 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
                <span className="mt-1 block text-[12px] text-brand-300">
                  Drop us a line
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <Pin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
              <span>
                <span className="block text-brand-100">{site.address.line1}</span>
                <span className="block text-brand-100">{site.address.line2}</span>
                <span className="mt-1 block text-[12px] text-brand-300">
                  ACN {site.acn}
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="font-display text-lg font-bold text-white">Our Services</h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-500" />
          <ul className="mt-6 space-y-3 text-[14px]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-2 text-brand-200 transition-colors hover:text-white"
                >
                  <span className="text-brand-500 transition-transform duration-300 group-hover:translate-x-0.5">
                    ›
                  </span>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-display text-lg font-bold text-white">Company</h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-500" />
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-brand-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="lg:col-span-3">
          <h3 className="font-display text-lg font-bold text-white">
            Find Us on Google Map
          </h3>
          <span className="mt-3 block h-0.5 w-10 bg-brand-500" />
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5">
            <iframe
              title={`Map showing ${site.name} at ${site.address.full}`}
              src={`https://maps.google.com/maps?q=${site.address.mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-52 w-full rounded-xl border-0 grayscale-[35%] transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <p className="mt-4 text-[13px] leading-6 text-brand-300">
            Visit us at {site.address.full}. Office hours Monday to Friday, 9:00am
            to 5:30pm AEST.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-brand-300 sm:flex-row">
          <p>
            Copyright © {year}{" "}
            <span className="font-semibold text-white">{site.name}</span> — All
            Rights Reserved.
          </p>
          <p className="text-brand-400">{site.parent}</p>
        </div>
      </div>
    </footer>
  );
}
