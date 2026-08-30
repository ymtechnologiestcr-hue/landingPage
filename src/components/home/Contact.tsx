import { useState, useRef } from "react";
import { CheckCircle2, MapPin, Phone, Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/landing/Reveal";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_q1nd7iq";
const EMAILJS_TEMPLATE_ID = "template_1lirmc3";
const EMAILJS_PUBLIC_KEY = "4I03j8bXbhPQVAPHi";

const fields = [
  { id: "first", label: "First name", placeholder: "Arjun", name: "first_name" },
  { id: "last", label: "Last name", placeholder: "Menon", name: "last_name" },
  { id: "email", label: "Email", placeholder: "you@business.com", type: "email", name: "email" },
  { id: "phone", label: "Phone", placeholder: "94960 20731", type: "tel", name: "phone" },
  { id: "address", label: "Address", placeholder: "Thrissur, Kerala", full: true, name: "address" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      toast.success("Enquiry sent successfully!");
      setSubmitted(true);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      toast.error(error?.text || "Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
                Consult with our <span className="gradient-text">Experts Today</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                For accounting, GST filing, income tax return filing, MCA compliance, and business
                consultancy services, contact YM Consultancy today. Call us or send your enquiry
                using the form.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="surface-card flex gap-4 p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <MapPin className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Address</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      1st Floor, 429/F/23, Near Jeevan Jyothi Public School, Mudikkode, Pattikkad,
                      Thrissur, Kerala – 680652, India
                    </p>
                  </div>
                </div>
                <div className="surface-card flex gap-4 p-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Phone className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Get in touch</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      <a className="hover:text-foreground" href="tel:+919496020731">
                        +91 94960 20731
                      </a>
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Mail className="size-3.5" />
                      <a
                        className="hover:text-foreground"
                        href="mailto:youngestminds.tcr@gmail.com"
                      >
                        youngestminds.tcr@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-7 md:p-9">
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto size-14 text-primary" />
                  <h3 className="mt-6 text-2xl font-extrabold text-foreground">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Thank you for reaching out. One of our consultants will get back to you shortly.
                  </p>
                  <Button
                    variant="soft"
                    size="lg"
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="grid gap-5 sm:grid-cols-2"
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-xl font-extrabold text-foreground sm:col-span-2">
                    Send your enquiry
                  </h3>

                  {fields.map((f) => (
                    <div key={f.id} className={f.full ? "sm:col-span-2" : undefined}>
                      <Label htmlFor={f.id} className="text-xs font-semibold text-foreground">
                        {f.label} *
                      </Label>
                      <Input
                        id={f.id}
                        name={f.name}
                        type={f.type ?? "text"}
                        required
                        disabled={loading}
                        placeholder={f.placeholder}
                        className="mt-2 h-11 rounded-xl bg-card"
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <Label htmlFor="service" className="text-xs font-semibold text-foreground">
                      Service required
                    </Label>
                    <select
                      id="service"
                      name="service"
                      defaultValue="Accounting & Bookkeeping"
                      disabled={loading}
                      className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                    >
                      <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
                      <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                      <option value="Income Tax Filing">Income Tax Filing</option>
                      <option value="MCA & Statutory Compliance">MCA &amp; Statutory Compliance</option>
                      <option value="Audit & Assurance">Audit &amp; Assurance</option>
                      <option value="Startup & Setup Consultancy">Startup &amp; Setup Consultancy</option>
                      <option value="IT / Software Solutions">IT / Software Solutions</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="message" className="text-xs font-semibold text-foreground">
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      disabled={loading}
                      placeholder="Tell us briefly about your business and what you need help with."
                      className="mt-2 w-full rounded-xl border border-input bg-card px-3 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="brand"
                    size="xl"
                    disabled={loading}
                    className="w-full sm:col-span-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
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
