import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const testimonials = [
  {
    quote:
      "Earlier I used to sit with registers till midnight. Now my closing balance and stock match by 7 PM, every single day.",
    name: "Rajesh Kulkarni",
    role: "Owner, Bharat Gas Agency · Pune",
    initials: "RK",
  },
  {
    quote:
      "My delivery agents update every drop from their phone. Cash collection disputes have completely stopped.",
    name: "Anand Reddy",
    role: "Owner, Indane Gas Agency · Hyderabad",
    initials: "AR",
  },
  {
    quote:
      "I can check revenue, stock and employee performance from anywhere. The agency no longer depends on me being present.",
    name: "Sunita Patel",
    role: "Owner, HP Gas Agency · Ahmedabad",
    initials: "SP",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="Trusted by Modern LPG Agency Owners" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="surface-card flex h-full flex-col p-7">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className="flex size-11 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-foreground">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}