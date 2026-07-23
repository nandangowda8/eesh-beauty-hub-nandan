import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, Sparkles, Scissors, Heart, Award } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import heroImg from "@/assets/salon-hero.jpg";
import hairImg from "@/assets/salon-hair.jpg";
import facialImg from "@/assets/salon-facial.jpg";
import bridalImg from "@/assets/salon-bridal.jpg";
import { PHONE, PHONE_TEL, WHATSAPP } from "@/lib/salon-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eesh Unisex Salon — Premium Hair & Beauty in Anchepalya, Bengaluru" },
      { name: "description", content: "Premium unisex salon near Chikkabidarakallu Metro. Haircuts, hair spa, keratin, bridal makeup, facials & more. Rated 4.8★ on Google." },
      { property: "og:title", content: "Eesh Unisex Salon — Premium Hair & Beauty in Anchepalya, Bengaluru" },
      { property: "og:description", content: "Premium unisex salon near Chikkabidarakallu Metro. Haircuts, hair spa, keratin, bridal makeup, facials & more. Rated 4.8★ on Google." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Eesh Unisex Salon interior"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-black/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Premium Unisex Salon
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
            Where <span className="text-gradient-gold italic">style</span><br />
            meets perfection.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Expert haircuts, luxurious hair spas, radiant facials and stunning bridal
            makeup — all under one roof in Anchepalya, Bengaluru.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> Book Appointment
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/10"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 text-primary-foreground/85">
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm"><strong className="text-primary-foreground">4.8/5</strong> · 266+ Google Reviews</span>
            </div>
            <span className="h-4 w-px bg-primary-foreground/30" />
            <span className="text-sm">Open 7 Days · 8 AM – 9 PM</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-4 md:px-8">
          {[
            { icon: Scissors, title: "Expert Stylists", text: "Highly skilled professionals" },
            { icon: Sparkles, title: "Premium Products", text: "Only quality brands" },
            { icon: Heart, title: "Hygienic Space", text: "Fully AC & sanitised" },
            { icon: Award, title: "4.8★ Rated", text: "266+ happy reviews" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg text-primary">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src={hairImg}
              alt="Professional hair styling"
              loading="lazy"
              width={1200}
              height={1400}
              className="relative z-10 aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-3xl bg-gradient-gold md:block" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">About Us</span>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary md:text-5xl">
              A sanctuary for hair, skin & beauty.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Welcome to Eesh Unisex Salon, where style meets perfection. Located conveniently
              near Chikkabidarakallu Metro Station in Anchepalya, Bengaluru, we offer premium
              salon and beauty services for both men and women.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team of experienced professionals is dedicated to delivering exceptional hair,
              skin, and beauty treatments using quality products and modern techniques.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Service preview */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Signature Services</span>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">Crafted for every look</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: hairImg, title: "Hair Studio", text: "Cuts, colour, spa, keratin & smoothening." },
              { img: facialImg, title: "Skin & Facials", text: "Fruit, gold and diamond facials that glow." },
              { img: bridalImg, title: "Bridal & Makeup", text: "Bridal, party makeup & saree draping." },
            ].map((c) => (
              <article key={c.title} className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1200}
                    height={1400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <ContactPanel />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-gold)" }} />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl text-primary-foreground md:text-5xl">Ready for your transformation?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Book your appointment today and experience premium salon care.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

