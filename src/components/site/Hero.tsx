import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Search, ShieldCheck, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-auto.jpg";
import brake from "@/assets/part-brake.jpg";
import wheel from "@/assets/part-wheel.jpg";
import turbo from "@/assets/part-turbo.jpg";
import headlight from "@/assets/part-headlight.jpg";
import spark from "@/assets/part-spark.jpg";

const floaters = [
  { src: brake, size: 140, top: "12%", left: "6%", delay: 0, dur: 8 },
  { src: wheel, size: 170, top: "58%", left: "3%", delay: 1.2, dur: 10 },
  { src: turbo, size: 130, top: "18%", right: "8%", delay: 0.6, dur: 9 },
  { src: headlight, size: 150, top: "62%", right: "6%", delay: 1.8, dur: 11 },
  { src: spark, size: 100, top: "40%", right: "18%", delay: 2.4, dur: 7 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Backdrop image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium automotive engine"
          className="h-full w-full object-cover opacity-30"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-fade" />
      </div>

      {/* Floating parts (hidden on small screens for perf/clarity) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {floaters.map((f, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: f.top,
              left: (f as any).left,
              right: (f as any).right,
              width: f.size,
              height: f.size,
            }}
            initial={{ opacity: 0, y: 30, rotate: -8 }}
            animate={{
              opacity: [0, 0.9, 0.9],
              y: [0, -20, 0],
              rotate: [0, 8, -4, 0],
            }}
            transition={{
              duration: f.dur,
              delay: f.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
              <img
                src={f.src}
                alt=""
                className="relative h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Trusted by 5,000+ workshops worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
          >
            Premium Automotive
            <br />
            <span className="text-gradient-accent">Parts. Delivered.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto"
          >
            High-quality genuine and OEM parts for every make and model. Backed by
            warranty, shipped worldwide, and installed by pros.
          </motion.p>

          {/* Search */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 mx-auto max-w-2xl flex items-center gap-2 rounded-2xl glass p-2"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0 px-3">
              <Search className="h-5 w-5 text-white/60 shrink-0" />
              <input
                type="search"
                placeholder="Search by part, brand, OEM number, or vehicle…"
                className="w-full bg-transparent text-white placeholder:text-white/50 text-sm sm:text-base outline-none py-2"
              />
            </div>
            <Button size="lg" className="bg-gradient-accent hover:opacity-95 text-accent-foreground shadow-glow shrink-0">
              Search
            </Button>
          </motion.form>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" className="bg-gradient-accent hover:opacity-95 text-accent-foreground shadow-glow">
              Shop Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white">
              Enquire Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="https://wa.me/923175817400" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto"
        >
          {[
            { icon: Award, label: "Products", value: "10,000+" },
            { icon: ShieldCheck, label: "Happy Customers", value: "5,000+" },
            { icon: Truck, label: "Trusted Brands", value: "50+" },
            { icon: Search, label: "Worldwide Shipping", value: "120+" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-4 md:p-5 text-left">
              <s.icon className="h-5 w-5 text-accent" />
              <div className="mt-3 font-display text-2xl md:text-3xl font-bold text-white">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-white/60 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
