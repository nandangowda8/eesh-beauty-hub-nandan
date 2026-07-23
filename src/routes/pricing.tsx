import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { priceGroups, PHONE, PHONE_TEL } from "@/lib/salon-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Price List — Eesh Unisex Salon | Affordable Hair & Beauty Rates" },
      { name: "description", content: "Approximate price list for haircuts, hair spa, keratin, facials, waxing, threading, manicure, pedicure and bridal makeup at Eesh Unisex Salon." },
      { property: "og:title", content: "Price List — Eesh Unisex Salon" },
      { property: "og:description", content: "Affordable, transparent pricing for all hair and beauty services." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Price List</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-primary md:text-6xl">Affordable luxury.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Approximate pricing — final cost may vary based on hair length, service duration
            and products used. Contact us for a personalised quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {priceGroups.map((g) => (
            <div key={g.title} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="bg-gradient-gold px-8 py-5">
                <h2 className="font-display text-2xl text-primary">{g.title}</h2>
              </div>
              <ul className="divide-y divide-border">
                {g.rows.map(([name, price]) => (
                  <li key={name} className="flex items-center justify-between gap-4 px-8 py-4">
                    <span className="text-sm font-medium text-foreground/85">{name}</span>
                    <span className="text-sm font-semibold text-primary">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-accent/30 bg-accent/10 p-8 text-center">
          <h3 className="font-display text-2xl text-primary">Need a custom quote?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Bridal packages and combined services are priced on consultation.
          </p>
          <a href={`tel:${PHONE_TEL}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
