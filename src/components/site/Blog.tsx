import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import brake from "@/assets/part-brake.jpg";
import battery from "@/assets/part-battery.jpg";
import turbo from "@/assets/part-turbo.jpg";

const posts = [
  { tag: "Maintenance", title: "How to know it's time to replace your brake pads", read: "5 min", img: brake },
  { tag: "Buying Guide", title: "Best AGM batteries for start-stop vehicles in 2026", read: "7 min", img: battery },
  { tag: "Performance", title: "Turbo vs supercharger: what actually delivers more power?", read: "9 min", img: turbo },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Insights</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold">
              From the <span className="text-gradient-accent">garage journal</span>
            </h2>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent">
            All articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/10 text-accent px-2.5 py-0.5 font-medium">{p.tag}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
