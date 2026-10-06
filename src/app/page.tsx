import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import Mission from "@/components/home/Mission";
import FeatureSplit from "@/components/home/FeatureSplit";
import DreamBanner from "@/components/home/DreamBanner";
import CallCentre from "@/components/home/CallCentre";
import WorkFlow from "@/components/home/WorkFlow";
import Clients from "@/components/home/Clients";
import CtaBand from "@/components/home/CtaBand";
import {
  ChoiceArt,
  GrowthArt,
  MarketingArt,
  UxArt,
} from "@/components/art/Illustrations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Mission />

      <FeatureSplit
        eyebrow="User Experience"
        title={
          <>
            A Better Website Means{" "}
            <span className="text-gradient">Better User Experience</span>
          </>
        }
        paragraphs={[
          "A custom website will help increase the reach of your products and services. When your website design is unique and attractive, it helps to promote your business online. You can gain new customers and keep the old ones loyal to you.",
          "NextClick Corp. ensures that your website stands out from your competitors and helps you gain a solid and loyal customer base.",
        ]}
        bullets={[
          "Mobile-first layouts",
          "Sub-two-second load times",
          "Accessible to every visitor",
          "Conversion-focused journeys",
        ]}
        art={<UxArt className="h-auto w-full" />}
        primary={{ label: "About Us", href: "/about" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />

      <FeatureSplit
        eyebrow="Digital Growth"
        title={
          <>
            It is Time to Grow. It is the{" "}
            <span className="text-gradient">Digital Marketing Era</span>
          </>
        }
        paragraphs={[
          "Digital marketing aims to provide a strong online presence. In the age where every transaction and business opportunity is found online, it is the magic key to get more customers, increase revenue and take your business to new heights.",
          "At NextClick Corp., we provide our clients with the best digital marketing strategies to help maximise their businesses and attract more customers.",
        ]}
        bullets={[
          "Search engine optimisation",
          "Paid search and social",
          "Content and email campaigns",
          "Revenue-linked reporting",
        ]}
        art={<MarketingArt className="h-auto w-full" />}
        reverse
        muted
        primary={{ label: "About Us", href: "/about" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />

      <DreamBanner />
      <CallCentre />
      <WorkFlow />

      <FeatureSplit
        eyebrow="Why Us"
        title={
          <>
            What Makes NextClick Corp.{" "}
            <span className="text-gradient">A Better Choice?</span>
          </>
        }
        paragraphs={[
          "When it comes to IT solutions, whether website design and development, digital marketing or call centre services, NextClick Corp. comes second to none. Having a team of highly qualified designers, developers and SEOs, who have years of experience under their sleeves, we can assure you to get the optimum results.",
          "They ensure all the strategies are aligned with your objectives — and that you always know what is being built and why.",
        ]}
        bullets={[
          "Senior engineers, no juniors on the bill",
          "Fixed scope and transparent pricing",
          "Weekly demos on a live environment",
          "You own the code and the accounts",
        ]}
        art={<ChoiceArt className="h-auto w-full" />}
        primary={{ label: "About Us", href: "/about" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />

      <FeatureSplit
        eyebrow="Results"
        title={
          <>
            Growth We Have <span className="text-gradient">Driven</span>
          </>
        }
        paragraphs={[
          "We are one of the leading companies in the market, offering reliable and efficient services tailored according to the needs of our clients. Having years of experience in this field, over time we have earned numerous customers with our efficient and reliable services to their utmost satisfaction.",
          "Our growth is what we strive for, and we have achieved a 100% success rate so far. Most of our clientele is recurring and from word-of-mouth recommendations — a statement to the quality of websites we develop and other services we provide.",
        ]}
        bullets={[
          "250+ projects delivered",
          "98% client retention rate",
          "Average 3.4x return on ad spend",
          "Support response under 4 hours",
        ]}
        art={<GrowthArt className="h-auto w-full" />}
        reverse
        muted
        primary={{ label: "About Us", href: "/about" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />

      <Clients />
      <CtaBand />
    </>
  );
}
