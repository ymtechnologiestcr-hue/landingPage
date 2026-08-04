import {
  User,
  Truck,
  Warehouse,
  PackageCheck,
  Wallet,
  LayoutDashboard,
  Check,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

type Product = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  features: string[];
  preview: { label: string; value: string }[];
};

const products: Product[] = [
  {
    icon: User,
    title: "Customer App",
    features: [
      "Book Cylinder",
      "Track Delivery",
      "Order History",
      "Notifications",
      "Digital Invoice",
      "Support",
    ],
    preview: [
      { label: "14.2kg Domestic", value: "₹903" },
      { label: "Order #48120", value: "Out for delivery" },
      { label: "Last refill", value: "18 days ago" },
    ],
  },
  {
    icon: Truck,
    title: "Delivery Agent App",
    features: [
      "Assigned Deliveries",
      "Route Planning",
      "Cash Collection",
      "Delivery Confirmation",
      "Empty Cylinder Return",
      "Live Updates",
    ],
    preview: [
      { label: "Assigned today", value: "12" },
      { label: "Cash collected", value: "₹10,836" },
      { label: "Empties returned", value: "8" },
    ],
  },
  {
    icon: Warehouse,
    title: "Godown Manager App",
    features: [
      "Filled Stock",
      "Empty Stock",
      "Cylinder Allocation",
      "Vehicle Loading",
      "Inventory",
      "Damage Tracking",
    ],
    preview: [
      { label: "Filled cylinders", value: "340" },
      { label: "Empty cylinders", value: "185" },
      { label: "Damaged", value: "3" },
    ],
  },
  {
    icon: PackageCheck,
    title: "Purchase Driver App",
    features: [
      "Return Empty Cylinders",
      "Receive Filled Cylinders",
      "Purchase Trips",
      "Vehicle Tracking",
      "Purchase Reports",
    ],
    preview: [
      { label: "Trip status", value: "At plant" },
      { label: "Empties loaded", value: "220" },
      { label: "Filled received", value: "200" },
    ],
  },
  {
    icon: Wallet,
    title: "Cashier Dashboard",
    features: [
      "Cash Collection",
      "Settlements",
      "Opening Balance",
      "Closing Balance",
      "Expenses",
      "Reports",
    ],
    preview: [
      { label: "Opening balance", value: "₹12,400" },
      { label: "Collected today", value: "₹38,600" },
      { label: "Pending settlement", value: "₹2,150" },
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    features: [
      "Revenue",
      "Stock Overview",
      "Analytics",
      "Business Health",
      "Cash Flow",
      "Employee Performance",
      "Customer Growth",
    ],
    preview: [
      { label: "Revenue today", value: "₹48,750" },
      { label: "Business health", value: "92 / 100" },
      { label: "Active customers", value: "4,286" },
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our products"
          title={
            <>
              One Platform. <span className="gradient-text">Six Powerful Applications.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <article className="surface-card group flex h-full flex-col p-7">
                <span
                  className="flex size-12 items-center justify-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <p.icon className="size-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{p.title}</h3>

                <div className="mt-4 rounded-2xl border border-border bg-secondary/60 p-4">
                  <div className="mb-3 flex gap-1.5">
                    <span className="size-2 rounded-full bg-destructive/50" />
                    <span className="size-2 rounded-full bg-chart-4/60" />
                    <span className="size-2 rounded-full bg-chart-2/60" />
                  </div>
                  <div className="space-y-2">
                    {p.preview.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-xl bg-card px-3 py-2"
                      >
                        <span className="text-xs text-muted-foreground">{row.label}</span>
                        <span className="text-xs font-bold text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="mt-5 grid gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}