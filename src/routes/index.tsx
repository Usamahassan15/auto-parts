import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { Deals } from "@/components/site/Deals";
import { Services } from "@/components/site/Services";
import { Reviews } from "@/components/site/Reviews";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AxlePro — Premium Auto Parts, Delivered Worldwide" },
      {
        name: "description",
        content:
          "Genuine, OEM & premium aftermarket auto parts for car owners, workshops, dealers, and fleets. Warranty-backed. Worldwide shipping.",
      },
      { property: "og:title", content: "AxlePro — Premium Auto Parts, Delivered Worldwide" },
      {
        property: "og:description",
        content:
          "Shop 10,000+ genuine and OEM parts. Trusted by 5,000+ workshops. Warranty & worldwide shipping.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AxlePro — Premium Auto Parts" },
      {
        name: "twitter:description",
        content: "Genuine & OEM parts. Warranty-backed. Worldwide shipping.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "AxlePro",
          description: "Premium automotive parts store shipping worldwide.",
          telephone: "+92-317-581-7400",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Deals />
        <Services />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
