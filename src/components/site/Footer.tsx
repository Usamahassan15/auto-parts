import { Facebook, Instagram, MessageCircle, Wrench, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-accent shadow-glow">
                <Wrench className="h-5 w-5 text-accent-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-bold">AXLE<span className="text-accent">PRO</span></span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Premium automotive parts for individuals, workshops, dealers, and fleets — shipped worldwide.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/923175817400", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-accent transition"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Shop", links: ["All Products", "Categories", "Brands", "Deals", "New Arrivals"] },
            { title: "Support", links: ["Help Center", "Shipping", "Returns", "Warranty", "Contact Us"] },
            { title: "Company", links: ["About Us", "Services", "Fleet Program", "Blog", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-accent">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-primary-foreground/70 hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <h4 className="font-display text-lg font-semibold">Get exclusive offer alerts</h4>
            <p className="text-sm text-primary-foreground/70">Deals, new arrivals, and maintenance tips — no spam.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto gap-2">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 flex-1 md:w-72">
              <Mail className="h-4 w-4 text-white/60" />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent py-2.5 text-sm outline-none flex-1 placeholder:text-white/50"
              />
            </div>
            <Button className="bg-gradient-accent hover:opacity-95 text-accent-foreground">Subscribe</Button>
          </form>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} AxlePro. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
