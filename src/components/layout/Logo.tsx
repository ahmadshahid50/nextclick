import Link from "next/link";

type Props = {
  tone?: "dark" | "light";
  className?: string;
  withTagline?: boolean;
};

export default function Logo({
  tone = "dark",
  className = "",
  withTagline = false,
}: Props) {
  const primary = tone === "light" ? "text-white" : "text-brand-950";
  const secondary = tone === "light" ? "text-brand-200" : "text-brand-600";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="NextClick Corp. home"
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_8px_18px_-8px_rgba(17,66,174,0.85)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" aria-hidden>
          <path
            d="M6 4.6 17.5 11 6 17.4z"
            fill="currentColor"
          />
          <path
            d="M13.4 13.6 19 19.4"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="font-display text-[19px] font-extrabold tracking-tight">
          <span className={primary}>next</span>
          <span className={secondary}>Click</span>
        </span>
        {withTagline ? (
          <span
            className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] ${
              tone === "light" ? "text-brand-200/80" : "text-ink-soft"
            }`}
          >
            A Prosecco Audit Company
          </span>
        ) : (
          <span
            className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.26em] ${
              tone === "light" ? "text-brand-200/80" : "text-ink-soft"
            }`}
          >
            Software Agency
          </span>
        )}
      </span>
    </Link>
  );
}
