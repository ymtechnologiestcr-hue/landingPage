import {
  Cloud,
  User,
  Truck,
  Warehouse,
  PackageCheck,
  Wallet,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Smartphone,
  Building2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const modules = [
  { icon: User, label: "Customer App" },
  { icon: Truck, label: "Delivery Agent App" },
  { icon: Warehouse, label: "Godown Manager App" },
  { icon: PackageCheck, label: "Purchase Driver App" },
  { icon: Wallet, label: "Cashier Dashboard" },
  { icon: LayoutDashboard, label: "Owner Dashboard" },
];

const outcomes = [
  "Monitor everything in real time",
  "Reduce manual work",
  "Improve accountability",
  "Increase productivity",
];

const capabilities = [
  {
    icon: MapPin,
    title: "GPS-Based Delivery Tracking",
    description:
      "Live vehicle and agent location on the map, with accurate delivery timelines for every order.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Booking confirmations, delivery updates and digital invoices sent straight to your customers on WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "Customer Self-Service Portal",
    description:
      "Customers book refills, view order history and download invoices themselves — fewer calls to your office.",
  },
  {
    icon: Building2,
    title: "Multi-Agency Dashboard",
    description:
      "Run multiple agencies or branches from one login, with consolidated stock, cash and performance reporting.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our solution"
          title={
            <>
              Everything Your LPG Agency Needs in{" "}
              <span className="gradient-text">One Platform</span>
            </>
          }
          description="Digitize your complete LPG agency from customer booking to cylinder delivery."
        />

        <Reveal>
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {modules.slice(0, 3).map((m) => (
                <ModuleChip key={m.label} icon={m.icon} label={m.label} />
              ))}
            </div>

            <div className="relative my-6 flex items-center justify-center">
              <div className="absolute inset-x-8 top-1/2 h-px bg-border" />
              <div
                className="relative flex items-center gap-3 rounded-2xl px-6 py-4 text-primary-foreground shadow-[var(--shadow-glow)]"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <Cloud className="size-5" />
                <span className="text-sm font-bold">One Cloud Platform</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {modules.slice(3).map((m) => (
                <ModuleChip key={m.label} icon={m.icon} label={m.label} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o} delay={i * 80}>
              <div className="surface-card p-5 text-center text-sm font-semibold text-foreground">
                {o}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <SectionHeading eyebrow="Also included" title="Built-In Advanced Capabilities" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 90}>
                <div className="surface-card flex h-full gap-4 p-7">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="surface-card flex flex-col items-center gap-2.5 p-5 text-center">
      <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="size-5" />
      </span>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}