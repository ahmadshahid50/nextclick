import type { SVGProps } from "react";

/* Shared flat-illustration palette — blue & white with one warm accent. */
const C = {
  deep: "#0f2f6e",
  navy: "#123a8a",
  blue: "#1655db",
  mid: "#2f74f5",
  light: "#8bbaff",
  pale: "#d9e8ff",
  mist: "#eef5ff",
  white: "#ffffff",
  accent: "#ffc24b",
  accentDeep: "#f5a623",
};

type Props = SVGProps<SVGSVGElement>;

const frame = (props: Props) => ({
  viewBox: "0 0 520 400",
  fill: "none",
  role: "img" as const,
  ...props,
});

/* ------------------------------------------------------------------ */
/*  Hero — analytics dashboard with search                             */
/* ------------------------------------------------------------------ */
export function HeroArt(props: Props) {
  return (
    <svg {...frame(props)} aria-label="Search engine optimisation dashboard">
      <defs>
        <linearGradient id="hero-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.white} />
          <stop offset="100%" stopColor={C.mist} />
        </linearGradient>
        <linearGradient id="hero-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={C.mid} />
          <stop offset="100%" stopColor={C.light} />
        </linearGradient>
      </defs>

      <circle cx="262" cy="196" r="168" fill={C.blue} opacity="0.07" />
      <circle cx="262" cy="196" r="126" fill={C.blue} opacity="0.06" />

      {/* Monitor */}
      <g className="animate-float-slow">
        <rect x="96" y="70" width="330" height="218" rx="16" fill={C.navy} />
        <rect x="108" y="82" width="306" height="182" rx="8" fill="url(#hero-screen)" />
        <rect x="108" y="82" width="306" height="26" rx="8" fill={C.pale} />
        <circle cx="123" cy="95" r="4" fill={C.mid} />
        <circle cx="137" cy="95" r="4" fill={C.light} />
        <circle cx="151" cy="95" r="4" fill={C.pale} />

        {/* Search bar */}
        <rect x="126" y="124" width="180" height="26" rx="13" fill={C.white} stroke={C.pale} strokeWidth="2" />
        <circle cx="143" cy="137" r="6" fill="none" stroke={C.mid} strokeWidth="2.5" />
        <path d="m148 142 5 5" stroke={C.mid} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="160" y="133" width="86" height="7" rx="3.5" fill={C.pale} />
        <rect x="316" y="124" width="76" height="26" rx="13" fill={C.blue} />

        {/* Bars */}
        <rect x="128" y="212" width="22" height="32" rx="5" fill="url(#hero-bar)" />
        <rect x="160" y="192" width="22" height="52" rx="5" fill="url(#hero-bar)" />
        <rect x="192" y="204" width="22" height="40" rx="5" fill="url(#hero-bar)" />
        <rect x="224" y="172" width="22" height="72" rx="5" fill={C.blue} />
        <rect x="256" y="186" width="22" height="58" rx="5" fill="url(#hero-bar)" />

        {/* Trend line */}
        <path
          d="M300 232 L326 210 L350 220 L378 176"
          stroke={C.accentDeep}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="378" cy="176" r="6" fill={C.accent} stroke={C.white} strokeWidth="3" />
        <rect x="300" y="248" width="90" height="6" rx="3" fill={C.pale} />
      </g>

      {/* Stand */}
      <path d="M228 288h66l12 30h-90z" fill={C.deep} />
      <rect x="206" y="316" width="110" height="12" rx="6" fill={C.navy} />

      {/* Floating magnifier */}
      <g className="animate-float">
        <circle cx="404" cy="112" r="40" fill={C.white} stroke={C.blue} strokeWidth="9" />
        <circle cx="404" cy="112" r="28" fill={C.mist} />
        <path d="M434 142l26 26" stroke={C.deep} strokeWidth="14" strokeLinecap="round" />
        <path d="M392 114l8 9 16-19" stroke={C.mid} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Floating stat card */}
      <g className="animate-float">
        <rect x="42" y="196" width="112" height="76" rx="14" fill={C.white} stroke={C.pale} strokeWidth="2" />
        <circle cx="74" cy="234" r="20" fill="none" stroke={C.pale} strokeWidth="8" />
        <path d="M74 214a20 20 0 0 1 17 30" fill="none" stroke={C.blue} strokeWidth="8" strokeLinecap="round" />
        <rect x="102" y="220" width="38" height="7" rx="3.5" fill={C.pale} />
        <rect x="102" y="236" width="26" height="7" rx="3.5" fill={C.light} />
      </g>

      {/* Gear */}
      <g className="animate-spin-slow" style={{ transformOrigin: "78px 112px" }}>
        <path
          d="M78 86a26 26 0 0 1 8 1.3l3.4-7.6 9.6 4.3-3.4 7.6a26 26 0 0 1 5.8 5.8l7.6-3.4 4.3 9.6-7.6 3.4a26 26 0 0 1 0 8.2l7.6 3.4-4.3 9.6-7.6-3.4a26 26 0 0 1-5.8 5.8l3.4 7.6-9.6 4.3-3.4-7.6a26 26 0 0 1-8.2 0l-3.4 7.6-9.6-4.3 3.4-7.6a26 26 0 0 1-5.8-5.8l-7.6 3.4-4.3-9.6 7.6-3.4a26 26 0 0 1 0-8.2l-7.6-3.4 4.3-9.6 7.6 3.4a26 26 0 0 1 5.8-5.8l-3.4-7.6 9.6-4.3 3.4 7.6A26 26 0 0 1 78 86Z"
          fill={C.light}
          opacity="0.65"
        />
        <circle cx="78" cy="112" r="10" fill={C.mist} />
      </g>

      <circle cx="452" cy="256" r="7" fill={C.accent} />
      <circle cx="60" cy="318" r="5" fill={C.light} />
      <circle cx="470" cy="60" r="5" fill={C.light} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Mission — dart hitting the bullseye                                */
/* ------------------------------------------------------------------ */
export function MissionArt(props: Props) {
  return (
    <svg {...frame({ viewBox: "0 0 400 400", ...props })} aria-label="Dart hitting a target">
      <circle cx="196" cy="206" r="150" fill={C.white} opacity="0.14" />
      <circle cx="196" cy="206" r="126" fill={C.white} />
      <circle cx="196" cy="206" r="100" fill={C.mid} />
      <circle cx="196" cy="206" r="74" fill={C.white} />
      <circle cx="196" cy="206" r="48" fill={C.blue} />
      <circle cx="196" cy="206" r="22" fill={C.white} />
      <circle cx="196" cy="206" r="10" fill={C.accent} />

      {/* Dart */}
      <g>
        <path
          d="M196 206 L78 108"
          stroke={C.deep}
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path d="M78 108l-30-24 14 36 36 14-20-26Z" fill={C.accent} />
        <path d="M62 120l-14-36 30 24Z" fill={C.accentDeep} />
        <circle cx="196" cy="206" r="13" fill={C.deep} />
      </g>

      {/* Motion trail */}
      <path
        d="M30 62c22 6 40 18 54 34"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.55"
        fill="none"
      />
      <path
        d="M22 96c16 2 30 8 42 18"
        stroke={C.white}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
      />
      <circle cx="330" cy="86" r="8" fill={C.white} opacity="0.5" />
      <circle cx="352" cy="300" r="6" fill={C.white} opacity="0.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  UX — browser window, rocket and gears                              */
/* ------------------------------------------------------------------ */
export function UxArt(props: Props) {
  return (
    <svg {...frame(props)} aria-label="Website user experience">
      <circle cx="250" cy="200" r="160" fill={C.mist} />

      <g className="animate-float-slow">
        <rect x="112" y="72" width="296" height="216" rx="18" fill={C.white} stroke={C.pale} strokeWidth="3" />
        <path d="M112 90a18 18 0 0 1 18-18h260a18 18 0 0 1 18 18v20H112z" fill={C.blue} />
        <circle cx="134" cy="91" r="5" fill={C.white} opacity="0.9" />
        <circle cx="150" cy="91" r="5" fill={C.white} opacity="0.65" />
        <circle cx="166" cy="91" r="5" fill={C.white} opacity="0.45" />
        <rect x="192" y="84" width="180" height="14" rx="7" fill={C.white} opacity="0.28" />

        <rect x="134" y="130" width="112" height="84" rx="10" fill={C.pale} />
        <path d="M150 196l24-28 18 20 14-14 24 30z" fill={C.mid} />
        <circle cx="166" cy="152" r="9" fill={C.accent} />

        <rect x="262" y="130" width="122" height="11" rx="5.5" fill={C.pale} />
        <rect x="262" y="151" width="98" height="11" rx="5.5" fill={C.pale} />
        <rect x="262" y="172" width="110" height="11" rx="5.5" fill={C.pale} />
        <rect x="262" y="196" width="72" height="26" rx="13" fill={C.blue} />

        <rect x="134" y="232" width="250" height="10" rx="5" fill={C.mist} />
        <rect x="134" y="252" width="180" height="10" rx="5" fill={C.mist} />
      </g>

      {/* Rocket */}
      <g className="animate-float">
        <path
          d="M402 118c26-16 56-14 56-14s2 30-14 56c-8 13-22 24-32 30l-26-26c6-10 17-24 30-32z"
          fill={C.white}
          stroke={C.blue}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <circle cx="428" cy="146" r="10" fill={C.mid} />
        <path d="M402 178l-14 22 24-6z" fill={C.accent} />
        <path d="M386 200l-16 18 22-8z" fill={C.accentDeep} />
      </g>

      {/* Gears */}
      <g className="animate-spin-slow" style={{ transformOrigin: "78px 300px" }}>
        <path
          d="M78 274a26 26 0 0 1 8 1.3l3.4-7.6 9.6 4.3-3.4 7.6a26 26 0 0 1 5.8 5.8l7.6-3.4 4.3 9.6-7.6 3.4a26 26 0 0 1 0 8.2l7.6 3.4-4.3 9.6-7.6-3.4a26 26 0 0 1-5.8 5.8l3.4 7.6-9.6 4.3-3.4-7.6a26 26 0 0 1-8.2 0l-3.4 7.6-9.6-4.3 3.4-7.6a26 26 0 0 1-5.8-5.8l-7.6 3.4-4.3-9.6 7.6-3.4a26 26 0 0 1 0-8.2l-7.6-3.4 4.3-9.6 7.6 3.4a26 26 0 0 1 5.8-5.8l-3.4-7.6 9.6-4.3 3.4 7.6a26 26 0 0 1 8.2-1.3Z"
          fill={C.blue}
        />
        <circle cx="78" cy="300" r="10" fill={C.white} />
      </g>
      <g className="animate-spin-slow" style={{ transformOrigin: "128px 344px" }}>
        <path
          d="M128 326a18 18 0 0 1 5.6.9l2.4-5.3 6.7 3-2.4 5.3a18 18 0 0 1 4 4l5.3-2.4 3 6.7-5.3 2.4a18 18 0 0 1 0 5.7l5.3 2.4-3 6.7-5.3-2.4a18 18 0 0 1-4 4l2.4 5.3-6.7 3-2.4-5.3a18 18 0 0 1-5.7 0l-2.4 5.3-6.7-3 2.4-5.3a18 18 0 0 1-4-4l-5.3 2.4-3-6.7 5.3-2.4a18 18 0 0 1 0-5.7l-5.3-2.4 3-6.7 5.3 2.4a18 18 0 0 1 4-4l-2.4-5.3 6.7-3 2.4 5.3a18 18 0 0 1 5.7-.9Z"
          fill={C.light}
        />
        <circle cx="128" cy="344" r="7" fill={C.white} />
      </g>

      <circle cx="446" cy="288" r="7" fill={C.accent} />
      <circle cx="58" cy="140" r="6" fill={C.light} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Digital marketing — megaphone and floating metrics                 */
/* ------------------------------------------------------------------ */
export function MarketingArt(props: Props) {
  return (
    <svg {...frame(props)} aria-label="Digital marketing campaign">
      <circle cx="262" cy="200" r="158" fill={C.mist} />

      {/* Megaphone */}
      <g className="animate-float-slow">
        <path
          d="M150 168l150-62v190l-150-62z"
          fill={C.blue}
        />
        <path d="M150 168h-22a26 26 0 0 0 0 52h22z" fill={C.navy} />
        <path d="M300 106c26 0 42 38 42 88s-16 88-42 88z" fill={C.mid} />
        <path d="M186 220h30l10 84a18 18 0 0 1-18 20h-6a18 18 0 0 1-18-18z" fill={C.deep} />
        <path
          d="M362 152c14 12 20 28 20 42s-6 30-20 42"
          stroke={C.accent}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M392 124c22 20 30 46 30 70s-8 50-30 70"
          stroke={C.accentDeep}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Metric cards */}
      <g className="animate-float">
        <rect x="46" y="74" width="122" height="72" rx="14" fill={C.white} stroke={C.pale} strokeWidth="2.5" />
        <path d="M66 126l20-24 16 16 22-30" stroke={C.mid} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="124" cy="88" r="6" fill={C.accent} />
      </g>
      <g className="animate-float">
        <rect x="60" y="264" width="112" height="66" rx="14" fill={C.white} stroke={C.pale} strokeWidth="2.5" />
        <rect x="78" y="302" width="14" height="14" rx="4" fill={C.light} />
        <rect x="100" y="292" width="14" height="24" rx="4" fill={C.mid} />
        <rect x="122" y="282" width="14" height="34" rx="4" fill={C.blue} />
        <rect x="78" y="280" width="34" height="7" rx="3.5" fill={C.pale} />
      </g>
      <g className="animate-float">
        <circle cx="428" cy="304" r="30" fill={C.white} stroke={C.pale} strokeWidth="2.5" />
        <path
          d="M428 318c-9-6-14-11-14-17a7 7 0 0 1 14-3 7 7 0 0 1 14 3c0 6-5 11-14 17z"
          fill={C.blue}
        />
      </g>
      <circle cx="466" cy="128" r="7" fill={C.light} />
      <circle cx="42" cy="200" r="5" fill={C.accent} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Why choose us — creative workstation                               */
/* ------------------------------------------------------------------ */
export function ChoiceArt(props: Props) {
  return (
    <svg {...frame(props)} aria-label="Creative design workstation">
      <circle cx="250" cy="196" r="158" fill={C.mist} />

      <g className="animate-float-slow">
        <rect x="106" y="80" width="288" height="200" rx="16" fill={C.navy} />
        <rect x="118" y="92" width="264" height="164" rx="8" fill={C.white} />

        {/* Canvas artwork */}
        <rect x="136" y="110" width="118" height="82" rx="10" fill={C.pale} />
        <circle cx="168" cy="140" r="14" fill={C.accent} />
        <path d="M144 186l28-32 20 22 16-16 26 26z" fill={C.mid} />

        <rect x="268" y="110" width="96" height="12" rx="6" fill={C.pale} />
        <rect x="268" y="132" width="76" height="12" rx="6" fill={C.pale} />
        <rect x="268" y="154" width="86" height="12" rx="6" fill={C.pale} />
        <rect x="268" y="178" width="60" height="14" rx="7" fill={C.blue} />

        {/* Swatches */}
        <circle cx="146" cy="222" r="11" fill={C.blue} />
        <circle cx="174" cy="222" r="11" fill={C.mid} />
        <circle cx="202" cy="222" r="11" fill={C.light} />
        <circle cx="230" cy="222" r="11" fill={C.accent} />
        <rect x="256" y="214" width="106" height="16" rx="8" fill={C.mist} />
      </g>

      <path d="M222 280h56l10 28h-76z" fill={C.deep} />
      <rect x="200" y="306" width="100" height="12" rx="6" fill={C.navy} />

      {/* Pencil */}
      <g className="animate-float" style={{ transformOrigin: "420px 190px" }}>
        <g transform="rotate(35 420 190)">
          <rect x="406" y="70" width="30" height="170" rx="6" fill={C.accent} />
          <rect x="406" y="70" width="30" height="26" rx="6" fill={C.blue} />
          <path d="M406 240h30l-15 34z" fill={C.pale} />
          <path d="M414 262h14l-7 12z" fill={C.deep} />
        </g>
      </g>

      {/* Palette */}
      <g className="animate-float">
        <path
          d="M74 286a44 44 0 1 1 44-44c0 10-8 14-16 14h-7a10 10 0 0 0-7 17 9 9 0 0 1-14 13z"
          fill={C.white}
          stroke={C.blue}
          strokeWidth="4"
        />
        <circle cx="56" cy="242" r="6" fill={C.mid} />
        <circle cx="68" cy="222" r="6" fill={C.accent} />
        <circle cx="90" cy="220" r="6" fill={C.light} />
      </g>
      <circle cx="452" cy="300" r="7" fill={C.light} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Growth — hands presenting a growth report                          */
/* ------------------------------------------------------------------ */
export function GrowthArt(props: Props) {
  return (
    <svg {...frame(props)} aria-label="Business growth report">
      <circle cx="256" cy="204" r="152" fill={C.mist} />

      {/* Map pins */}
      <g className="animate-float">
        <path d="M150 52a22 22 0 0 0-22 22c0 16 22 36 22 36s22-20 22-36a22 22 0 0 0-22-22z" fill={C.blue} />
        <circle cx="150" cy="74" r="8" fill={C.white} />
      </g>
      <g className="animate-float-slow">
        <path d="M256 30a18 18 0 0 0-18 18c0 13 18 30 18 30s18-17 18-30a18 18 0 0 0-18-18z" fill={C.mid} />
        <circle cx="256" cy="48" r="6.5" fill={C.white} />
      </g>
      <g className="animate-float">
        <path d="M360 58a20 20 0 0 0-20 20c0 14 20 33 20 33s20-19 20-33a20 20 0 0 0-20-20z" fill={C.accentDeep} />
        <circle cx="360" cy="78" r="7" fill={C.white} />
      </g>
      <path d="M150 112c40 34 74 34 106 6" stroke={C.light} strokeWidth="3" strokeDasharray="7 9" strokeLinecap="round" fill="none" />
      <path d="M270 120c30 20 62 14 90-16" stroke={C.light} strokeWidth="3" strokeDasharray="7 9" strokeLinecap="round" fill="none" />

      {/* Report */}
      <g className="animate-float-slow">
        <rect x="140" y="146" width="236" height="152" rx="14" fill={C.white} stroke={C.pale} strokeWidth="3" />
        <rect x="164" y="170" width="86" height="11" rx="5.5" fill={C.pale} />
        <rect x="164" y="190" width="56" height="9" rx="4.5" fill={C.mist} />
        <rect x="166" y="248" width="22" height="26" rx="5" fill={C.light} />
        <rect x="196" y="234" width="22" height="40" rx="5" fill={C.mid} />
        <rect x="226" y="218" width="22" height="56" rx="5" fill={C.blue} />
        <rect x="256" y="240" width="22" height="34" rx="5" fill={C.light} />
        <path d="M296 262l22-26 18 16 22-38" stroke={C.accentDeep} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="358" cy="214" r="7" fill={C.accent} stroke={C.white} strokeWidth="3" />
      </g>

      {/* Hands */}
      <path
        d="M96 386c-4-30 4-56 22-72 10-9 24-11 33-4l31 24-28 8 34 18-8 26z"
        fill={C.white}
        stroke={C.navy}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M424 386c4-30-4-56-22-72-10-9-24-11-33-4l-31 24 28 8-34 18 8 26z"
        fill={C.white}
        stroke={C.navy}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M96 386h328" stroke={C.navy} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Workflow step glyphs                                               */
/* ------------------------------------------------------------------ */
export function StepArt({
  step,
  ...props
}: Props & { step: "strategy" | "design" | "develop" | "support" }) {
  const shapes = {
    strategy: (
      <>
        <circle cx="40" cy="38" r="20" fill="none" stroke={C.blue} strokeWidth="5" />
        <path d="m55 53 13 13" stroke={C.blue} strokeWidth="6" strokeLinecap="round" />
        <path d="M32 38h16M40 30v16" stroke={C.mid} strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    design: (
      <>
        <path
          d="M40 14a20 20 0 0 0-11 37v7a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-7a20 20 0 0 0-11-37z"
          fill="none"
          stroke={C.blue}
          strokeWidth="5"
        />
        <path d="M33 68h14" stroke={C.mid} strokeWidth="5" strokeLinecap="round" />
        <path d="M40 30v18" stroke={C.mid} strokeWidth="4" strokeLinecap="round" />
      </>
    ),
    develop: (
      <>
        <path
          d="M28 26 14 40l14 14M52 26l14 14-14 14M46 20 34 60"
          fill="none"
          stroke={C.blue}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    support: (
      <>
        <path d="M18 40v-4a22 22 0 0 1 44 0v4" fill="none" stroke={C.blue} strokeWidth="5" strokeLinecap="round" />
        <rect x="10" y="38" width="14" height="20" rx="6" fill={C.mid} />
        <rect x="56" y="38" width="14" height="20" rx="6" fill={C.mid} />
        <path d="M60 58v3a7 7 0 0 1-7 7h-9" fill="none" stroke={C.blue} strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden {...props}>
      {shapes[step]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Abstract client logo marks                                         */
/* ------------------------------------------------------------------ */
export function ClientLogo({
  index,
  name,
  ...props
}: Props & { index: number; name: string }) {
  const marks = [
    <g key="0">
      <path d="M12 30 24 8l12 22z" fill="currentColor" />
      <circle cx="24" cy="30" r="6" fill="currentColor" opacity="0.5" />
    </g>,
    <g key="1">
      <rect x="8" y="10" width="14" height="24" rx="4" fill="currentColor" />
      <rect x="26" y="18" width="14" height="16" rx="4" fill="currentColor" opacity="0.5" />
    </g>,
    <g key="2">
      <circle cx="20" cy="22" r="13" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M33 22h10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </g>,
    <g key="3">
      <path d="M10 34 24 10l14 24z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" />
      <path d="M24 20v9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </g>,
    <g key="4">
      <path d="M24 8 40 22 24 36 8 22z" fill="currentColor" opacity="0.85" />
      <path d="M24 16 32 22l-8 6-8-6z" fill="#fff" />
    </g>,
    <g key="5">
      <circle cx="16" cy="22" r="11" fill="currentColor" opacity="0.55" />
      <circle cx="32" cy="22" r="11" fill="currentColor" opacity="0.85" />
    </g>,
  ];

  return (
    <svg viewBox="0 0 48 44" fill="none" aria-label={name} role="img" {...props}>
      {marks[index % marks.length]}
    </svg>
  );
}
