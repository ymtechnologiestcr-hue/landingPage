import { ArrowDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const flow = [
  "Customer Books Cylinder",
  "Delivery Assigned",
  "Godown Stock Updated",
  "Delivery Completed",
  "Cash Collected",
  "Owner Dashboard Updated",
  "Business Reports Generated",
];

export function AutomationFlow() {
  return (
    <section className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Automation flow"
          title="One Booking Updates Your Entire Agency"
          description="Every step is connected, so your records stay accurate without anyone entering them twice."
        />

        <div className="mx-auto mt-14 max-w-xl">
          {flow.map((step, i) => (
            <div key={step}>
              <Reveal delay={i * 110}>
                <div className="surface-card flex items-center gap-4 p-5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-accent text-xs font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{step}</span>
                </div>
              </Reveal>
              {i < flow.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="size-4 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}