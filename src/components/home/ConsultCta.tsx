import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";

export function ConsultCta() {
  return (
    <section className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="glass-card grid items-center gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <Flame className="size-3.5 text-primary" />
                Our IT solutions
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                We also build software:{" "}
                <span className="gradient-text">LPG Agency Management System</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Beyond accounting and tax, Youngest Minds builds enterprise software for Indian
                businesses. Our flagship product is a cloud platform with six connected apps that
                digitizes an entire LPG agency — deliveries, stock, purchases, cash flow, employees
                and customers.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button variant="brand" size="xl" asChild>
                <Link to="/it-solutions">
                  Explore IT Solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}