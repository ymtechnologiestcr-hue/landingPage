import { useState } from "react";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

const trustPoints = [
  "Free Demo",
  "Quick Setup",
  "Staff Training Included",
  "Dedicated Support",
  "Secure Cloud Platform",
  "No Technical Knowledge Required",
];

const fields = [
  { id: "agencyName", label: "Agency Name", placeholder: "Sai Bharat Gas Agency" },
  { id: "gstNumber", label: "GST Number", placeholder: "27ABCDE1234F1Z5" },
  { id: "phoneNumber", label: "Phone Number", placeholder: "98765 43210", type: "tel" },
  { id: "emailId", label: "Email ID", placeholder: "owner@agency.com", type: "email" },
  { id: "address", label: "Address", placeholder: "Shop 12, Main Road", full: true },
  { id: "state", label: "State", placeholder: "Maharashtra" },
  { id: "district", label: "District", placeholder: "Pune" },
  { id: "pinCode", label: "PIN Code", placeholder: "411001" },
];

export function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      agencyName: formData.get("agencyName") as string,
      gstNumber: formData.get("gstNumber") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      emailId: formData.get("emailId") as string,
      address: formData.get("address") as string,
      state: formData.get("state") as string,
      district: formData.get("district") as string,
      pinCode: formData.get("pinCode") as string,
      subscriptionPlan: formData.get("subscriptionPlan") as string,
      agreedToTerms,
    };

    try {
      const baseUrl = import.meta.env["VITE_API_BASE_URL"] || "http://localhost:5001/api";
      const response = await fetch(`${baseUrl}/agencies/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 201 || response.ok) {
        setSubmitted(true);
        toast.success("Agency registered successfully!");
      } else {
        const data = await response.json().catch(() => null);
        const errorMsg = data?.message || "Something went wrong. Please try again.";
        toast.error(errorMsg);
      }
    } catch (error: any) {
      toast.error(
        error.message || "Failed to register agency. Please check your network connection.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="register" className="section-pad border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Register Your <span className="gradient-text">LPG Agency</span> Today
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Start your digital transformation with our complete LPG Agency Management Platform.
                We'll help you onboard your agency, train your staff, and get you running in no
                time.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <Check className="size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-7 md:p-9">
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto size-14 text-primary" />
                  <h3 className="mt-6 text-2xl font-extrabold text-foreground">
                    Registration Submitted Successfully!
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Thank you for registering your agency. Our onboarding team will contact you
                    shortly to schedule your demo and complete the setup.
                  </p>
                  <Button
                    variant="soft"
                    size="lg"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Register another agency
                  </Button>
                </div>
              ) : (
                <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <h3 className="text-xl font-extrabold text-foreground sm:col-span-2">
                    Agency Registration
                  </h3>

                  {fields.map((f) => (
                    <div key={f.id} className={f.full ? "sm:col-span-2" : undefined}>
                      <Label htmlFor={f.id} className="text-xs font-semibold text-foreground">
                        {f.label} *
                      </Label>
                      <Input
                        id={f.id}
                        name={f.id}
                        type={f.type ?? "text"}
                        required
                        placeholder={f.placeholder}
                        className="mt-2 h-11 rounded-xl bg-card"
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <Label htmlFor="plan" className="text-xs font-semibold text-foreground">
                      Subscription Plan
                    </Label>
                    <select
                      id="plan"
                      name="subscriptionPlan"
                      defaultValue="Recommended - 6 Months"
                      className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="3 Months">3 Months</option>
                      <option value="Recommended - 6 Months">⭐ Recommended – 6 Months</option>
                      <option value="12 Months (10% OFF)">12 Months (10% OFF)</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-3 sm:col-span-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(v) => setAgreedToTerms(v === true)}
                      required
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-xs leading-relaxed text-muted-foreground"
                    >
                      I agree to the Terms &amp; Conditions and Privacy Policy.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    variant="brand"
                    size="xl"
                    disabled={!agreedToTerms || loading}
                    className="w-full sm:col-span-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      "Register Agency"
                    )}
                  </Button>
                  <Button type="button" variant="soft" size="xl" className="w-full sm:col-span-2">
                    Book Free Demo
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
