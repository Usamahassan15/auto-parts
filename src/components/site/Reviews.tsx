import { motion } from "motion/react";
import { Star, BadgeCheck } from "lucide-react";

const reviews = [
  { name: "Ahmed R.", role: "Workshop Owner, Dubai", stars: 5, text: "Best supplier we've worked with. Genuine parts, next-day delivery, and pricing that beats local distributors." },
  { name: "Sarah L.", role: "Fleet Manager, London", stars: 5, text: "Managing 40+ vehicles is easier with AxlePro. Their bulk pricing and account support are top notch." },
  { name: "Miguel D.", role: "Car Enthusiast, Madrid", stars: 5, text: "Ordered a Garrett turbo and Brembo kit. Everything OEM sealed, warranty registered, installed same week." },
  { name: "Kenji T.", role: "Mechanic, Tokyo", stars: 5, text: "OEM numbers match every time. Never once had to return a part. Absolutely reliable." },
  { name: "Fatima K.", role: "Dealer, Karachi", stars: 5, text: "The WhatsApp support is instant. They quote and confirm faster than any competitor." },
  { name: "James O.", role: "Owner, Nairobi", stars: 5, text: "Shipping to East Africa is quick and duties are handled. Genuinely a premium experience." },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">
            Rated <span className="text-gradient-accent">4.9 / 5</span> by pros
          </h2>
          <p className="mt-3 text-muted-foreground">Over 5,000 verified reviews from workshops, dealers, and drivers.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-card"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85 text-sm leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-accent text-accent-foreground font-bold">
                  {r.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-sm font-semibold truncate">
                    {r.name}
                    <BadgeCheck className="h-4 w-4 text-success shrink-0" />
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
