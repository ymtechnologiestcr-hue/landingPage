import { AlertTriangle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import chaos from "@/assets/manual-chaos.png";

const problems = [
  "Manual stock management",
  "Cash collection confusion",
  "No real-time visibility",
  "Delivery tracking issues",
  "Purchase tracking problems",
  "Delayed reports",
  "Owner dependency",
  "Manual reconciliation",
];

const tools = [
  "Registers",
  "Excel Sheets",
  "Paperwork",
  "Phone Calls",
  "Manual Records",
  "Cash Books",
];

export function Problems() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Problems we solve"
          title={
            <>
              Running an LPG Agency Shouldn't Feel Like{" "}
              <span className="gradient-text">Managing Six Different Businesses.</span>
            </>
          }
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="rounded-[24px] border border-border bg-secondary/60 p-6">
                <img
                  src={chaos}
                  alt="Paper registers, cash books, spreadsheets and phone calls used to run an LPG agency manually"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="mx-auto w-full max-w-md"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="surface-card flex items-start gap-3 p-5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                    <AlertTriangle className="size-4" />
                  </span>
                  <p className="text-sm font-semibold text-foreground">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div
            className="mt-14 rounded-[24px] p-8 text-center md:p-12"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <p className="mx-auto max-w-2xl text-xl font-bold leading-snug text-primary-foreground md:text-3xl">
              Instead of managing your business, you're spending your day solving operational
              issues.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}