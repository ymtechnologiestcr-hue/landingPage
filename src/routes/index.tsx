import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { AccountingHero } from "@/components/home/AccountingHero";
import { Expertise } from "@/components/home/Expertise";
import { ConsultCta } from "@/components/home/ConsultCta";
import { Insights } from "@/components/home/Insights";
import { Contact } from "@/components/home/Contact";

const title = "Accounting & Tax Services in Thrissur | YM Consultancy";
const description =
  "YM Consultancy (Youngest Minds) offers accounting, bookkeeping, GST registration and filing, income tax return filing, MCA compliance and startup consultancy in Thrissur, Kerala.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <Nav />
      <main>
        <AccountingHero />
        <Expertise />
        <ConsultCta />
        <Insights />
        <Contact />
      </main>
    </div>
  );
}
