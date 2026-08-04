import { Clock, Radio, Boxes, Zap, ShieldCheck, Coins } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const benefits = [
  { icon: Clock, title: "Save 4–6 Hours Every Day", body: "No more manual entries, calls and end-of-day reconciliation." },
  { icon: Radio, title: "Real-Time Monitoring", body: "See every delivery, payment and stock movement as it happens." },
  { icon: Boxes, title: "Better Inventory Control", body: "Filled, empty and damaged cylinders always accounted for." },
  { icon: Zap, title: "Faster Deliveries", body: "Smart assignment and route planning for delivery agents." },
  { icon: ShieldCheck, title: "Employee Accountability", body: "Every action logged against the person who performed it." },
  { icon: Coins, title: "Accurate Cash Management", body: "Opening to closing balance tracked without manual books." },
];

export function Benefits() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Benefits"
          title={
            <>
              Spend Less Time Managing.{" "}
              <span className="gradient-text">Spend More Time Growing.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90}>
              <div className="surface-card h-full p-7">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <b.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}