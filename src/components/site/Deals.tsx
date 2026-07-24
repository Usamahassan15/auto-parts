import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

function useCountdown(hours = 36) {
  const [end] = useState(() => Date.now() + hours * 3600 * 1000);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s };
}

export function Deals() {
  const { h, m, s } = useCountdown();
  return (
    <section id="deals" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-14 text-white shadow-elegant"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
                <Flame className="h-3.5 w-3.5 text-accent" /> Flash Sale — Deals of the Week
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight">
                Up to <span className="text-gradient-accent">40% OFF</span> on top brands
              </h2>
              <p className="mt-3 text-white/70 max-w-md">
                Brembo, Bosch, NGK, Osram and more. Use code <span className="font-bold text-white">AXLE40</span> at checkout.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" className="bg-gradient-accent hover:opacity-95 text-accent-foreground shadow-glow">
                  Shop the sale
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white">
                  See all deals
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { label: "Hours", v: h },
                { label: "Minutes", v: m },
                { label: "Seconds", v: s },
              ].map((t) => (
                <div key={t.label} className="glass rounded-2xl p-5 text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold tabular-nums">
                    {String(t.v).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/60 mt-1">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
