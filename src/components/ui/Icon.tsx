import type { SVGProps } from "react";
import type { IconName } from "@/data/services";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ------------------------------------------------------------------ */
/*  Service icons                                                      */
/* ------------------------------------------------------------------ */

const serviceIcons: Record<IconName, (props: IconProps) => React.ReactElement> = {
  design: (props) => (
    <svg {...base} {...props}>
      <rect x="2.5" y="3.5" width="19" height="15" rx="2.5" />
      <path d="M2.5 8h19" />
      <circle cx="5.5" cy="5.8" r=".7" fill="currentColor" stroke="none" />
      <circle cx="8" cy="5.8" r=".7" fill="currentColor" stroke="none" />
      <path d="M6 11.5h5v4H6zM14 11.5h4M14 15h4M8.5 21.5h7" />
    </svg>
  ),
  code: (props) => (
    <svg {...base} {...props}>
      <path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5.5l-3 13" />
    </svg>
  ),
  headset: (props) => (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 1 1 16 0v1" />
      <rect x="2.5" y="12.5" width="4" height="6" rx="1.8" />
      <rect x="17.5" y="12.5" width="4" height="6" rx="1.8" />
      <path d="M19.5 18.5v.5a3 3 0 0 1-3 3H13" />
    </svg>
  ),
  seo: (props) => (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20.5 20.5-5.2-5.2M7.5 11.5l2 2 3.5-4" />
    </svg>
  ),
  share: (props) => (
    <svg {...base} {...props}>
      <circle cx="18" cy="5.5" r="2.8" />
      <circle cx="6" cy="12" r="2.8" />
      <circle cx="18" cy="18.5" r="2.8" />
      <path d="m8.5 10.6 7-3.6M8.5 13.4l7 3.6" />
    </svg>
  ),
  palette: (props) => (
    <svg {...base} {...props}>
      <path d="M12 21a9 9 0 1 1 9-9c0 2-1.6 2.8-3.2 2.8h-1.5a2 2 0 0 0-1.4 3.4A1.9 1.9 0 0 1 12 21Z" />
      <circle cx="7.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9.8" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  data: (props) => (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
      <path d="M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </svg>
  ),
  admin: (props) => (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4M7.5 13h3M7.5 16.5h6" />
    </svg>
  ),
};

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: IconName }) {
  const Render = serviceIcons[name] ?? serviceIcons.code;
  return Render(props);
}

/* ------------------------------------------------------------------ */
/*  Interface icons                                                    */
/* ------------------------------------------------------------------ */

export const ArrowRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDown = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const ChevronUp = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m6 14.5 6-6 6 6" />
  </svg>
);

export const Search = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.9-3.9" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Phone = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6.6 3.5h2.2l1.5 3.7-1.8 1.3a11.5 11.5 0 0 0 5 5l1.3-1.8 3.7 1.5v2.2a2.1 2.1 0 0 1-2.3 2.1A15.6 15.6 0 0 1 4.5 5.8a2.1 2.1 0 0 1 2.1-2.3Z" />
  </svg>
);

export const Mail = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
    <path d="m3.4 7 7.4 5.4a2 2 0 0 0 2.4 0L20.6 7" />
  </svg>
);

export const Pin = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </svg>
);

export const Check = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const Clock = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.3 2" />
  </svg>
);

export const Sparkle = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3.5 13.8 9 19.5 10.8 13.8 12.6 12 18.1 10.2 12.6 4.5 10.8 10.2 9Z" />
    <path d="M18.5 16.5 19.4 19l2.6.9-2.6.9-.9 2.6" />
  </svg>
);

export const Responsive = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="2.5" y="4.5" width="13" height="10" rx="1.8" />
    <path d="M2.5 11.5h13M6 18.5h6" />
    <rect x="16.5" y="9.5" width="5" height="10" rx="1.6" />
  </svg>
);

export const Badge = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2.8 14.6 8l5.7.8-4.1 4 1 5.7-5.2-2.7-5.2 2.7 1-5.7-4.1-4L9.4 8Z" />
  </svg>
);

export const Chart = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 20h16M7 20V12M12 20V6M17 20v-5" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Social icons (brand glyphs, solid)                                 */
/* ------------------------------------------------------------------ */

const socialGlyphs: Record<string, string> = {
  Facebook:
    "M13.5 21v-7.3h2.5l.4-2.9h-2.9V9c0-.8.2-1.4 1.5-1.4h1.5V5a20 20 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.9h2.4V21h3.1Z",
  Twitter:
    "M17.2 4h2.7l-5.9 6.8L21 20h-5.4l-4.2-5.5L6.6 20H3.9l6.3-7.2L3.3 4h5.6l3.8 5 4.5-5Zm-.9 14.4h1.5L8.1 5.5H6.5l9.8 12.9Z",
  LinkedIn:
    "M6.9 8.7H4V20h2.9V8.7ZM5.4 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.6c0-3-1.6-4.4-3.8-4.4a3.3 3.3 0 0 0-3 1.6V8.7H10.4V20h2.9v-6c0-1.6.3-3.1 2.2-3.1s1.7 1.7 1.7 3.2V20H20v-6.4Z",
  Instagram:
    "M12 6.9A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Zm0 8.4A3.3 3.3 0 1 1 15.3 12 3.3 3.3 0 0 1 12 15.3Zm6.5-8.6a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2ZM21.7 6.7a5.9 5.9 0 0 0-1.6-4.2 5.9 5.9 0 0 0-4.2-1.6C14.3.8 9.7.8 8.1.9A5.9 5.9 0 0 0 3.9 2.5a5.9 5.9 0 0 0-1.6 4.2C2.2 8.3 2.2 12.9 2.3 14.5a5.9 5.9 0 0 0 1.6 4.2 5.9 5.9 0 0 0 4.2 1.6c1.6.1 6.2.1 7.8 0a5.9 5.9 0 0 0 4.2-1.6 5.9 5.9 0 0 0 1.6-4.2c.1-1.6.1-6.2 0-7.8Zm-2.1 9.5a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.8.4s-4.5.1-5.8-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.8s-.1-4.5.4-5.8a3.3 3.3 0 0 1 1.9-1.9c1.3-.5 4.4-.4 5.8-.4s4.5-.1 5.8.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.8s.1 4.5-.4 5.8Z",
};

export function SocialIcon({
  name,
  ...props
}: IconProps & { name: string }) {
  const d = socialGlyphs[name] ?? socialGlyphs.Facebook;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d={d} />
    </svg>
  );
}
