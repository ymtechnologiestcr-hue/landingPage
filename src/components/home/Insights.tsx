import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/landing/Reveal";

const posts = [
  {
    tag: "GST",
    title: "Navigating GST Filing for Kerala Small Businesses",
    description:
      "A comprehensive guide for local shop owners and entrepreneurs in Thrissur to streamline their monthly GST compliance and avoid penalties.",
  },
  {
    tag: "Compliance",
    title: "MCA Compliance: What Every Startup Needs to Know",
    description:
      "Stay updated with current Ministry of Corporate Affairs regulations to ensure your company registration remains in good standing throughout the fiscal year.",
  },
  {
    tag: "Income tax",
    title: "Tax Saving Strategies for Individuals in 2026",
    description:
      "Discover the most effective legal tax deductions and investment paths available under the latest Indian income tax laws to optimize your savings.",
  },
];

export function Insights() {
  return (
    <section id="insights" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title={
            <>
              Latest <span className="gradient-text">Financial Insights</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="surface-card flex h-full flex-col p-7">
                <div
                  aria-hidden
                  className="h-32 rounded-2xl opacity-90"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                />
                <span className="mt-5 inline-flex w-fit rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article
                  <ArrowUpRight className="size-4" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}