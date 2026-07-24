import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingCart, User, Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "Deals", href: "#deals" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-accent shadow-glow">
              <Wrench className="h-5 w-5 text-accent-foreground" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-lg font-bold tracking-tight ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                AXLE<span className="text-accent">PRO</span>
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase ${
                  scrolled ? "text-muted-foreground" : "text-white/60"
                }`}
              >
                Auto Parts
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-accent hover:bg-accent/5"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className={scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Wishlist"
              className={`hidden sm:inline-flex ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cart"
              className={`relative ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Account"
              className={`hidden sm:inline-flex ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              className={`lg:hidden ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-border/50 bg-background/95 backdrop-blur-xl -mx-4 sm:-mx-6 px-4 sm:px-6 pt-3">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium rounded-md text-foreground/80 hover:text-accent hover:bg-accent/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
