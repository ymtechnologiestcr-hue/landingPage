import { Layers, Radio, Cloud, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Layers,
    title: "Complete Agency Digitization",
    body: "Every register, ledger and manual record replaced by one connected system.",
  },
  {
    icon: Radio,
    title: "Real-Time Monitoring",
    body: "Deliveries, stock movement and cash collection update the moment they happen.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Platform",
    body: "Secure hosting, automatic backups and access from anywhere, on any device.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps For Every Team",
    body: "Purpose-built apps for customers, delivery agents, godown and purchase staff.",
  },
];

export function Trust() {
  return (
    <section className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="surface-card h-full p-7">
                <span
                  className="flex size-12 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <it.icon className="size-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}