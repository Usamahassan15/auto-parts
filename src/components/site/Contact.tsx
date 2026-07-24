import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "923175817400";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", vehicle: "", part: "", message: "" });

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `*New Enquiry — AxlePro*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Vehicle:* ${encodeURIComponent(form.vehicle)}%0A*Part:* ${encodeURIComponent(form.part)}%0A*Message:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", vehicle: "", part: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Get in touch</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold">
              Enquire about a <span className="text-gradient-accent">part</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Send us your vehicle and part details. We reply within minutes on WhatsApp with pricing and stock.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Phone", val: "+92 317 581 7400" },
                { icon: MessageCircle, label: "WhatsApp", val: "+92 317 581 7400", href: `https://wa.me/${WA_NUMBER}` },
                { icon: Mail, label: "Email", val: "sales@axlepro.co" },
                { icon: MapPin, label: "Head office", val: "Karachi, Pakistan — shipping worldwide" },
                { icon: Clock, label: "Business hours", val: "Mon–Sat · 9:00 AM – 7:00 PM" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-card border border-border p-4 shadow-card hover:shadow-elegant transition-all"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-accent text-accent-foreground shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium text-foreground truncate">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "name", label: "Full name", type: "text", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "vehicle", label: "Vehicle model", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs font-medium text-foreground/70 uppercase tracking-wider">{f.label}</span>
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    value={(form as any)[f.name]}
                    onChange={onChange}
                    maxLength={120}
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                  />
                </label>
              ))}
            </div>
            <label className="block mt-4">
              <span className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Part name / OEM number</span>
              <input
                name="part"
                value={form.part}
                onChange={onChange}
                maxLength={200}
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
              />
            </label>
            <label className="block mt-4">
              <span className="text-xs font-medium text-foreground/70 uppercase tracking-wider">Message</span>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                maxLength={1000}
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
              />
            </label>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full bg-gradient-accent hover:opacity-95 text-accent-foreground shadow-glow"
            >
              {sent ? (
                <>
                  <Check className="mr-2 h-5 w-5" /> Sent — opening WhatsApp
                </>
              ) : (
                <>
                  <MessageCircle className="mr-2 h-5 w-5" /> Send via WhatsApp
                </>
              )}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Your details are sent securely — we reply within minutes.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
