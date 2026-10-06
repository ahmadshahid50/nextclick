export const site = {
  name: "NextClick Corp.",
  shortName: "NextClick",
  tagline: "Defining Your Online Presence",
  parent: "A Prosecco Audit Pty Ltd Company",
  acn: "617 472 867",
  description:
    "NextClick Corp. is a full-service software agency building custom websites, web apps and digital marketing systems that turn traffic into revenue.",
  url: "https://www.nextclickcorp.com.au",
  email: "info@nextclickcorp.com.au",
  phones: [
    { label: "Sydney", value: "+61 2 9056 1088", href: "tel:+61290561088" },
    { label: "Brisbane", value: "+61 7 2140 0800", href: "tel:+61721400800" },
  ],
  address: {
    line1: "160 Goulburn St",
    line2: "Surry Hills, NSW, 2010",
    full: "160 Goulburn St, Surry Hills, NSW 2010, Australia",
    mapQuery: "160+Goulburn+St,+Surry+Hills+NSW+2010,+Australia",
  },
  socials: [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};
