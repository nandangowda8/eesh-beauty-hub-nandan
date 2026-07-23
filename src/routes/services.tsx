import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { serviceCategories, PHONE, PHONE_TEL } from "@/lib/salon-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Eesh Unisex Salon | Hair, Skin, Bridal & Nail Care" },
      { name: "description", content: "Full menu of services at Eesh Unisex Salon: haircuts, hair spa, keratin, coloring, facials, bridal makeup, threading, waxing, manicure & pedicure." },
      { property: "og:title", content: "Our Services — Eesh Unisex Salon" },
      { property: "og:description", content: "Premium hair, skin, and bridal services in Anchepalya, Bengaluru." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Menu</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-primary md:text-6xl">
            Everything you need to look & feel your best.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From everyday grooming to statement bridal looks — explore our full range of
            services delivered by expert stylists.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {serviceCategories.map((cat) => (
            <div key={cat.title} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-3xl text-primary">{cat.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-primary py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">See our pricing</h2>
            <p className="mt-2 text-primary-foreground/80">Transparent, affordable rates for every service.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary">
              View Price List
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
