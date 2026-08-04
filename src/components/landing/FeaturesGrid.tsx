import {
  CloudUpload,
  BarChart3,
  FileText,
  ScrollText,
  UserCog,
  Users,
  Bell,
  Search,
  RefreshCw,
  Smartphone,
  MonitorSmartphone,
  Lock,
  Building2,
  GitBranch,
  Network,
  TrendingUp,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const features = [
  { icon: CloudUpload, label: "Cloud Backup" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Reports" },
  { icon: ScrollText, label: "Audit Logs" },
  { icon: UserCog, label: "Role Management" },
  { icon: Users, label: "Unlimited Users" },
  { icon: Bell, label: "Notifications" },
  { icon: Search, label: "Search" },
  { icon: RefreshCw, label: "Automatic Sync" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: MonitorSmartphone, label: "Web Dashboard" },
  { icon: Lock, label: "Secure Login" },
];

const audience = [
  { icon: Building2, label: "Bharat Gas Agencies" },
  { icon: Building2, label: "Indane Gas Agencies" },
  { icon: Building2, label: "HP Gas Agencies" },
  { icon: GitBranch, label: "Single Branch Agencies" },
  { icon: Network, label: "Multi Branch Agencies" },
  { icon: TrendingUp, label: "Growing LPG Businesses" },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="section-pad border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Features" title="Enterprise Capability, Zero Complexity" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={(i % 4) * 70}>
              <div className="surface-card flex items-center gap-3.5 p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <f.icon className="size-4.5" />
                </span>
                <span className="text-sm font-semibold text-foreground">{f.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Who is this for?" title="Built for Every LPG Distributor" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audience.map((a, i) => (
              <Reveal key={a.label} delay={(i % 3) * 80}>
                <div className="surface-card flex items-center gap-4 p-7">
                  <span
                    className="flex size-11 items-center justify-center rounded-2xl text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <a.icon className="size-5" />
                  </span>
                  <span className="text-base font-bold text-foreground">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}