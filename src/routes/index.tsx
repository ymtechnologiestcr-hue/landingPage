import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Problems } from "@/components/landing/Problems";
import { Solution } from "@/components/landing/Solution";
import { Products } from "@/components/landing/Products";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { AutomationFlow } from "@/components/landing/AutomationFlow";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { PoweredBy } from "@/components/landing/PoweredBy";
import { Register } from "@/components/landing/Register";

const title = "LPG Agency Management System | Youngest Minds";
const description =
  "Run your LPG agency without the daily chaos. One cloud platform with six apps for deliveries, stock, purchases, cash flow, employees and customers.";

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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Problems />
        <Solution />
        <Products />
        <HowItWorks />
        <Benefits />
        <DashboardShowcase />
        <AutomationFlow />
        <FeaturesGrid />
        <Pricing />
        <Testimonials />
        <PoweredBy />
        <Register />
      </main>
    </div>
  );
}
