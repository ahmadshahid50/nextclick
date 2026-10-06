import { ClientLogo } from "@/components/art/Illustrations";
import SectionHeading from "@/components/ui/SectionHeading";

const clients = [
  "Industry Trade",
  "Vertex Labs",
  "Mimulus Co.",
  "Keryl Egan",
  "Northbay Legal",
  "Harbour Freight",
  "Solace Health",
  "Bright Ledger",
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden || undefined}
    >
      {clients.map((client, i) => (
        <li
          key={`${client}-${ariaHidden ? "dup" : "main"}`}
          className="flex items-center gap-3 text-ink-soft/70 grayscale transition-all duration-400 hover:text-brand-600 hover:grayscale-0"
        >
          <ClientLogo index={i} name={client} className="h-9 w-10 text-current" />
          <span className="whitespace-nowrap font-display text-[15px] font-bold tracking-tight">
            {client}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Trusted By"
          title={
            <>
              Our Happy <span className="text-gradient">Clients</span>
            </>
          }
          description="From local specialists to national brands, these are some of the teams who trust us with their digital presence."
        />
      </div>

      <div
        className="group relative mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
