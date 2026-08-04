import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const included = [
  "Customer App",
  "Delivery Agent App",
  "Godown Manager App",
  "Purchase Driver App",
  "Cashier Dashboard",
  "Owner Dashboard",
  "Unlimited Employees",
  "Unlimited Customers",
  "Cloud Hosting",
  "Product Updates",
  "Automatic Backup",
  "Staff Training",
  "Technical Support",
  "Data Security",
];

const plans = [
  {
    name: "Starter",
    term: "3 Months",
    price: "₹24,000",
    perMonth: "₹8,000/month",
    note: "Perfect for agencies getting started.",
    cta: "Get Started",
    extras: [] as string[],
    featured: false,
    badge: "",
    strike: "",
  },
  {
    name: "Growth",
    term: "6 Months",
    price: "₹42,000",
    perMonth: "₹7,000/month",
    note: "Save ₹6,000",
    cta: "Register Agency",
    extras: ["Priority Support", "Free Onboarding", "Staff Training Included"],
    featured: true,
    badge: "⭐ Most Popular",
    strike: "",
  },
  {
    name: "Enterprise",
    term: "12 Months",
    price: "₹75,600",
    perMonth: "₹6,300/month",
    note: "Best value for established agencies.",
    cta: "Choose Enterprise",
    extras: ["Dedicated Account Manager", "Premium Support", "Priority Features"],
    featured: false,
    badge: "10% OFF",
    strike: "₹84,000",
  },
];

const everything = [
  "Agency Setup",
  "Training",
  "Data Migration",
  "Software Updates",
  "Cloud Hosting",
  "Unlimited Users",
  "Technical Support",
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple & Transparent Pricing"
          description="Choose the subscription that best fits your LPG agency. Every subscription includes the complete LPG Agency Management Platform with all six applications."
        />

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[20px] border bg-card p-8 transition-all duration-300",
                  p.featured
                    ? "border-primary shadow-[var(--shadow-glow)] lg:scale-[1.04]"
                    : "border-border shadow-[var(--shadow-soft)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
                )}
              >
                {p.badge && (
                  <span
                    className={cn(
                      "absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold",
                      p.featured
                        ? "text-primary-foreground [background-image:var(--gradient-brand)]"
                        : "border border-border bg-accent text-accent-foreground",
                    )}
                  >
                    {p.featured && <Star className="size-3" />}
                    {p.badge}
                  </span>
                )}

                <h3 className="text-xl font-extrabold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{p.term}</p>

                <div className="mt-6 flex items-end gap-2">
                  {p.strike && (
                    <span className="pb-1 text-sm text-muted-foreground line-through">
                      {p.strike}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary">{p.perMonth}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>

                <Button
                  variant={p.featured ? "brand" : "soft"}
                  size="xl"
                  className="mt-6 w-full"
                  asChild
                >
                  <a href="#register">{p.cta}</a>
                </Button>

                {p.extras.length > 0 && (
                  <ul className="mt-6 space-y-2 border-b border-border pb-6">
                    {p.extras.map((e) => (
                      <li key={e} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Check className="size-4 text-primary" />
                        {e}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-6 grid gap-2">
                  {included.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-[24px] border border-border bg-secondary/50 p-8 md:p-10">
            <h3 className="text-center text-xl font-extrabold text-foreground">
              Everything Included
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {everything.map((e) => (
                <span
                  key={e}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                >
                  <Check className="size-4 text-primary" />
                  {e}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}