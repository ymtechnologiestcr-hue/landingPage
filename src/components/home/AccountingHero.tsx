import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/accounting-hero.jpg";

const badges = [
  { icon: ShieldCheck, label: "GST & MCA compliant filings" },
  { icon: Clock, label: "Deadline-tracked, on time" },
  { icon: MapPin, label: "Based in Thrissur, Kerala" },
];

export function AccountingHero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-[0.09]"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Balancing books, empowering businesses
          </span>

          <h1 className="mt-7 animate-rise text-4xl font-extrabold leading-[1.06] text-foreground sm:text-5xl lg:text-6xl">
            Professional <span className="gradient-text">Accounting &amp; Tax Services</span> in
            Thrissur
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-base leading-relaxed text-muted-foreground md:text-lg">
            YM Consultancy (Youngest Minds) provides professional accounting, bookkeeping, GST
            registration and filing, income tax return filing, MCA compliance, and business
            consultancy services for startups, small businesses, and entrepreneurs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="brand" size="xl" asChild>
              <a href="#contact">Schedule Consultation</a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="tel:+919496020731">
                <Phone className="size-4" />
                Call Now
              </a>
            </Button>
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            {badges.map((b) => (
              <li
                key={b.label}
                className="surface-card flex items-center gap-2.5 p-4 text-xs font-semibold text-foreground"
              >
                <b.icon className="size-4 shrink-0 text-primary" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card overflow-hidden p-2 md:p-3">
          <img
            src={hero}
            alt="Accounting dashboard showing GST filing summary, tax liability and recent ledger entries"
            width={1600}
            height={1104}
            className="w-full rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
}
