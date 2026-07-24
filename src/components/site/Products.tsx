import { motion } from "motion/react";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import brake from "@/assets/part-brake.jpg";
import wheel from "@/assets/part-wheel.jpg";
import battery from "@/assets/part-battery.jpg";
import headlight from "@/assets/part-headlight.jpg";
import turbo from "@/assets/part-turbo.jpg";
import spark from "@/assets/part-spark.jpg";

const products = [
  { name: "High-Performance Brake Kit", brand: "Brembo", price: 289, old: 349, img: brake, alt: turbo, badge: "SALE", rating: 4.9, reviews: 218 },
  { name: '19" Forged Alloy Wheel', brand: "OZ Racing", price: 649, old: 749, img: wheel, alt: brake, badge: "NEW", rating: 4.8, reviews: 142 },
  { name: "AGM Car Battery 80Ah", brand: "Bosch", price: 189, old: 229, img: battery, alt: spark, badge: "-18%", rating: 4.7, reviews: 512 },
  { name: "LED Matrix Headlight", brand: "Hella", price: 429, old: 499, img: headlight, alt: wheel, badge: "HOT", rating: 4.9, reviews: 96 },
  { name: "Twin-Scroll Turbocharger", brand: "Garrett", price: 1290, old: 1490, img: turbo, alt: headlight, badge: "PRO", rating: 5.0, reviews: 34 },
  { name: "Iridium Spark Plug (Set)", brand: "NGK", price: 59, old: 79, img: spark, alt: battery, badge: "-25%", rating: 4.8, reviews: 830 },
  { name: "Ceramic Brake Rotor Front", brand: "EBC", price: 219, old: 269, img: brake, alt: wheel, badge: "SALE", rating: 4.7, reviews: 187 },
  { name: "Bi-LED Fog Light Pair", brand: "Osram", price: 149, old: 189, img: headlight, alt: turbo, badge: "NEW", rating: 4.6, reviews: 74 },
];

function badgeStyle(b: string) {
  if (b === "SALE" || b.startsWith("-")) return "bg-accent text-accent-foreground";
  if (b === "NEW") return "bg-primary text-primary-foreground";
  if (b === "HOT") return "bg-gradient-accent text-accent-foreground";
  if (b === "PRO") return "bg-foreground text-background";
  return "bg-muted text-foreground";
}

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Featured</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold">
              Best-selling <span className="text-gradient-accent">auto parts</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Genuine, OEM, and premium aftermarket parts — all warranty-backed and shipped fast.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", "New", "Best Sellers", "On Sale"].map((f, i) => (
              <Button key={f} size="sm" variant={i === 0 ? "default" : "outline"} className={i === 0 ? "bg-primary" : ""}>
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all"
            >
              <div className="relative aspect-square bg-white overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="absolute inset-0 h-full w-full object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={p.alt}
                  alt=""
                  loading="lazy"
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className={`absolute top-3 left-3 rounded-md px-2 py-1 text-[10px] font-bold tracking-wider ${badgeStyle(p.badge)}`}>
                  {p.badge}
                </span>
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <button aria-label="Wishlist" className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-card hover:bg-accent hover:text-accent-foreground">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button aria-label="Quick view" className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-card hover:bg-accent hover:text-accent-foreground">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform">
                  <Button className="w-full rounded-none bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.brand}</div>
                <h3 className="mt-1 font-display font-semibold text-foreground line-clamp-2 min-h-12">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <div className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <span>{p.rating}</span>
                  <span>·</span>
                  <span>{p.reviews} reviews</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-xl font-bold text-foreground">${p.price}</span>
                  <span className="text-sm line-through text-muted-foreground">${p.old}</span>
                  <span className="ml-auto text-xs font-medium text-success">In stock</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View all products
          </Button>
        </div>
      </div>
    </section>
  );
}
