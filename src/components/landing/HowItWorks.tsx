import { ArrowDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const steps: { title: string; body: string; tags?: string[] }[] = [
  { title: "Register Your Agency", body: "Share your agency details and we set up your account." },
  {
    title: "Configure Agency",
    body: "Add employees, customers, vehicles and godown details.",
    tags: ["Employees", "Customers", "Vehicles", "Godown"],
  },
  { title: "Assign Apps", body: "Give every team member the right app and role permissions." },
  {
    title: "Manage Everything From One Dashboard",
    body: "Track operations, cash and stock live from the Owner Dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="How it works" title="Live in Four Simple Steps" />

        <div className="mx-auto mt-14 max-w-3xl">
          {steps.map((s, i) => (
            <div key={s.title}>
              <Reveal delay={i * 100}>
                <div className="surface-card flex gap-5 p-6 md:p-7">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground md:text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                    {s.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown className="size-5 text-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}