import { createFileRoute } from "@tanstack/react-router";
import { Check, Star, Wifi, CreditCard, Snowflake, ParkingSquare } from "lucide-react";
import heroImg from "@/assets/salon-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eesh Unisex Salon, Anchepalya Bengaluru" },
      { name: "description", content: "Meet Eesh Unisex Salon — premium hair & beauty in Anchepalya, Bengaluru. 4.8★ rated, 266+ reviews, expert stylists, hygienic space." },
      { property: "og:title", content: "About Eesh Unisex Salon" },
      { property: "og:description", content: "Where style meets perfection. Learn our story, facilities and why customers love us." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const whyLove = [
  "Highly Skilled Hair Stylists",
  "Friendly & Professional Staff",
  "Hygienic Environment",
  "Affordable Pricing",
  "Premium Hair & Beauty Products",
  "Excellent Customer Service",
  "Personalized Hair Consultation",
  "Comfortable Ambience",
  "Quick Service",
  "Easily Accessible Near Metro",
];

const facilities = [
  { icon: Snowflake, label: "Fully Air-Conditioned" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: CreditCard, label: "UPI / Card / Digital" },
  { icon: ParkingSquare, label: "Nearby Parking" },
];

const areas = [
  "Anchepalya", "Chikkabidarakallu", "Madanayakanahalli", "Bagalagunte",
  "T. Dasarahalli", "Peenya", "Nagasandra", "Jalahalli",
  "Hesaraghatta Road", "North-West Bengaluru",
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroImg} alt="" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">About Us</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-primary md:text-6xl">
            Style, care & confidence — since day one.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Welcome to Eesh Unisex Salon, where style meets perfection. Located near
            Chikkabidarakallu Metro Station in Anchepalya, we offer premium salon and beauty
            services for both men and women, using quality products and modern techniques.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl bg-gradient-gold p-10">
            <div className="flex items-center gap-2 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-display text-5xl text-primary">4.8 / 5</p>
            <p className="mt-2 text-sm font-medium text-primary/80">Based on 266+ Google reviews</p>
            <p className="mt-6 max-w-md text-sm text-primary/80">
              Consistently loved for our stylists, hygiene, and warm service — visit us and
              see why our clients keep coming back.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-primary">Why customers love us</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyLove.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-3xl text-primary md:text-4xl">Facilities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {facilities.map((f) => (
              <div key={f.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <h2 className="font-display text-3xl text-primary md:text-4xl">Areas we serve</h2>
        <p className="mt-3 text-muted-foreground">Conveniently located for clients across North-West Bengaluru.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <span key={a} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{a}</span>
          ))}
        </div>
      </section>
    </>
  );
}
