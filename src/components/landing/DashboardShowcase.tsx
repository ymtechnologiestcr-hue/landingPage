import { Reveal, SectionHeading, Counter } from "./Reveal";
import dashboard from "@/assets/owner-dashboard.jpg";

const widgets = [
  "Revenue",
  "Today's Sales",
  "Cylinder Stock",
  "Pending Deliveries",
  "Cash Collection",
  "Expenses",
  "Customer Growth",
  "Employee Performance",
  "Business Health Score",
  "Vehicle Tracking",
  "Recent Activities",
];

export function DashboardShowcase() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Owner dashboard"
          title={
            <>
              Your Whole Agency, <span className="gradient-text">On One Screen</span>
            </>
          }
          description="A premium analytics command centre built for owners who want answers, not spreadsheets."
        />

        <Reveal>
          <div className="glass-card mt-14 overflow-hidden p-2 md:p-3">
            <img
              src={dashboard}
              alt="LPG agency owner dashboard with revenue, stock, cash collection and employee performance widgets"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full rounded-[16px]"
            />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {widgets.map((w) => (
            <span
              key={w}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)]"
            >
              {w}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {([
            { to: 48750, prefix: "₹", label: "Revenue tracked today" },
            { to: 1250, label: "Cylinders in inventory" },
            { to: 86, label: "Deliveries completed" },
          ] as { to: number; prefix?: string; label: string }[]).map((s) => (
            <div key={s.label} className="surface-card p-7 text-center">
              <div className="text-3xl font-extrabold text-foreground">
                <Counter to={s.to} prefix={s.prefix ?? ""} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}