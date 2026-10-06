import Link from "next/link";
import { ServiceIcon, ArrowRight } from "./Icon";
import type { IconName } from "@/data/services";

type Props = {
  title: string;
  body: string;
  icon: IconName;
  href: string;
  index?: number;
};

export default function ServiceCard({ title, body, icon, href, index }: Props) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-2 hover:border-brand-200 hover:shadow-[var(--shadow-lift)]"
    >
      {/* Hover wash */}
      <span
        className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-brand-50 to-white transition-all duration-500 group-hover:h-full"
        aria-hidden
      />
      {typeof index === "number" && (
        <span
          className="absolute right-5 top-4 font-display text-4xl font-extrabold text-brand-50 transition-colors duration-400 group-hover:text-brand-100"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-400 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
        <ServiceIcon name={icon} className="h-7 w-7" />
      </span>

      <h3 className="relative mt-6 font-display text-[19px] font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-700">
        {title}
      </h3>
      <p className="relative mt-3 flex-1 text-[14px] leading-7 text-ink-soft">
        {body}
      </p>

      <span className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-brand-600">
        Read More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
