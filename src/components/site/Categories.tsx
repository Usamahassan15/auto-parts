import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const cats = [
  { name: "Brakes & Rotors", count: "1,240 parts", emoji: "🛑" },
  { name: "Engine & Turbo", count: "2,180 parts", emoji: "⚙️" },
  { name: "Wheels & Tyres", count: "980 parts", emoji: "🛞" },
  { name: "Lighting", count: "760 parts", emoji: "💡" },
  { name: "Battery & Electric", count: "540 parts", emoji: "🔋" },
  { name: "Suspension", count: "890 parts", emoji: "🏁" },
  { name: "Filters & Oils", count: "1,540 parts", emoji: "🛢️" },
  { name: "Body & Exterior", count: "1,120 parts", emoji: "🚘" },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Explore</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-foreground">
              Shop by <span className="text-gradient-accent">category</span>
            </h2>
          </div>
          <a href="#products" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {cats.map((c, i) => (
            <motion.a
              key={c.name}
              href="#products"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant transition-all"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors" />
              <div className="relative">
                <div className="text-4xl">{c.emoji}</div>
                <div className="mt-4 font-display font-semibold text-foreground">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.count}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">
                  Browse <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
