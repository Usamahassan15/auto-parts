import { motion } from "motion/react";
import { Wrench, Truck, Building2, Boxes, ShieldCheck, Headphones } from "lucide-react";

const services = [
  { icon: Wrench, title: "Installation", desc: "Certified mechanics fit parts at our workshops or your location." },
  { icon: Building2, title: "Workshop Support", desc: "Priority pricing and dedicated support for auto workshops." },
  { icon: Truck, title: "Fleet Supply", desc: "Bulk contracts and scheduled delivery for fleets & rentals." },
  { icon: Boxes, title: "Bulk & OEM", desc: "Direct OEM sourcing for dealerships and importers." },
  { icon: ShieldCheck, title: "Warranty", desc: "12–24 month warranty on every genuine and OEM part." },
  { icon: Headphones, title: "24/7 Support", desc: "Real humans on WhatsApp, email, and phone — any timezone." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">
            More than a store — a <span className="text-gradient-accent">partner</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl bg-card border border-border p-6 md:p-8 shadow-card hover:shadow-elegant transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-glow text-accent-foreground group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
