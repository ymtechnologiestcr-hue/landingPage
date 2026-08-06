import {
  BookOpenCheck,
  ReceiptIndianRupee,
  FileSpreadsheet,
  Landmark,
  ScanSearch,
  Rocket,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";

const services = [
  {
    icon: BookOpenCheck,
    title: "Accounting & Bookkeeping",
    description:
      "Precise financial tracking and record-keeping tailored to support your business growth and decision-making.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "GST Registration & Filing",
    description:
      "End-to-end GST compliance including registration, timely filing, and strategic advisory for small to medium enterprises.",
  },
  {
    icon: FileSpreadsheet,
    title: "Income Tax Filing",
    description:
      "Expertly handled tax returns for individuals and corporate entities, ensuring maximum efficiency and full legal alignment.",
  },
  {
    icon: Landmark,
    title: "MCA & Statutory Compliance",
    description:
      "Comprehensive management of MCA filings and statutory duties to keep your company in good standing.",
  },
  {
    icon: ScanSearch,
    title: "Audit & Assurance",
    description:
      "Rigorous financial inspections that provide clarity, ensure transparency, and build stakeholder confidence.",
  },
  {
    icon: Rocket,
    title: "Startup & Setup Consultancy",
    description:
      "A roadmap for your vision, from business registration to establishing robust financial frameworks.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our expertise"
          title={
            <>
              Compliance, Accounting and{" "}
              <span className="gradient-text">Advisory Under One Roof</span>
            </>
          }
          description="Everything a growing business needs to stay compliant, organised and confident about its numbers."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="surface-card group flex h-full flex-col p-7">
                <span
                  className="flex size-12 items-center justify-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <s.icon className="size-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}