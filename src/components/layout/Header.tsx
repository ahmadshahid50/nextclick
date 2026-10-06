"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Logo from "./Logo";
import { ButtonLink } from "@/components/ui/Button";
import {
  ChevronDown,
  Close,
  Mail,
  Menu,
  Phone,
  Search,
  SocialIcon,
} from "@/components/ui/Icon";
import { services } from "@/data/services";
import { site } from "@/data/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close every overlay when the route changes. Adjusting state during render
  // (rather than in an effect) avoids a flash of the stale open menu.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onClick = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) setSearchOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return services
      .filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.excerpt.toLowerCase().includes(q) ||
          s.stack.some((tool) => tool.toLowerCase().includes(q)),
      )
      .slice(0, 5);
  }, [query]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility strip — collapses once the page is scrolled */}
      <div
        className={`hidden overflow-hidden bg-brand-950 text-white transition-all duration-300 lg:block ${
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-[12.5px]">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-brand-100 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <a
              href={site.phones[0].href}
              className="flex items-center gap-2 text-brand-100 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {site.phones[0].value}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-300">
              Follow us
            </span>
            {site.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500"
              >
                <SocialIcon name={social.name} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "border-line shadow-[0_10px_30px_-20px_rgba(12,27,51,0.5)]" : "border-transparent"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-brand-600"
                        : "text-ink hover:text-brand-600"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[var(--shadow-lift)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[13.5px] font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                          <span className="text-brand-400">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-brand-600"
                      : "text-ink hover:text-brand-600"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div ref={searchRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setSearchOpen((open) => !open)}
                aria-label="Search services"
                aria-expanded={searchOpen}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
              >
                {searchOpen ? <Close className="h-4.5 w-4.5" /> : <Search className="h-4.5 w-4.5" />}
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-full z-10 mt-3 w-80 rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-lift)]">
                  <div className="flex items-center gap-2 rounded-xl bg-mist px-3">
                    <Search className="h-4 w-4 text-brand-500" />
                    <input
                      autoFocus
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search services..."
                      className="h-11 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft/70"
                    />
                  </div>
                  {query.trim() && (
                    <div className="mt-2">
                      {results.length ? (
                        results.map((result) => (
                          <Link
                            key={result.slug}
                            href={`/services/${result.slug}`}
                            className="block rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {result.title}
                          </Link>
                        ))
                      ) : (
                        <p className="px-3 py-3 text-[13px] text-ink-soft">
                          No services matched “{query}”.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <ButtonLink href="/contact" size="sm" className="hidden md:inline-flex">
              Get a Quote
            </ButtonLink>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-brand-50 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-brand-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-line/70">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-3.5 text-[15px] font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServices((open) => !open)}
                      aria-label="Toggle services"
                      aria-expanded={mobileServices}
                      className="grid h-9 w-9 place-items-center rounded-full text-brand-600"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileServices ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      mobileServices ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-[14px] text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-line/70 py-3.5 text-[15px] font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}

            <div className="mt-6 space-y-3 rounded-2xl bg-mist p-5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-ink-soft"
              >
                <Mail className="h-4 w-4 text-brand-600" />
                {site.email}
              </a>
              {site.phones.map((phone) => (
                <a
                  key={phone.value}
                  href={phone.href}
                  className="flex items-center gap-3 text-sm text-ink-soft"
                >
                  <Phone className="h-4 w-4 text-brand-600" />
                  {phone.value}
                </a>
              ))}
            </div>

            <ButtonLink href="/contact" size="lg" className="mt-5 w-full">
              Get a Free Quote
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
