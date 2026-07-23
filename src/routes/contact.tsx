import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, hours } from "@/lib/salon-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Eesh Unisex Salon, Anchepalya Bengaluru" },
      { name: "description", content: "Call, WhatsApp or visit Eesh Unisex Salon near Chikkabidarakallu Metro Station, Anchepalya, Bengaluru – 560073. Open 7 days a week." },
      { property: "og:title", content: "Contact Eesh Unisex Salon" },
      { property: "og:description", content: "Book your appointment. Open 7 days, near Chikkabidarakallu Metro." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const mapQuery = encodeURIComponent("Eesh Unisex Salon, Chikkabidarakallu Metro Station, Anchepalya, Bengaluru 560073");

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Get in touch</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-primary md:text-6xl">Book your appointment.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Transform your style with expert haircuts, beauty treatments, skincare and makeup
            services. Call or WhatsApp — we're happy to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <ContactCard icon={<Phone className="h-5 w-5" />} title="Call us">
              <a href={`tel:${PHONE_TEL}`} className="text-lg font-semibold text-primary hover:text-accent">{PHONE}</a>
            </ContactCard>
            <ContactCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="text-lg font-semibold text-primary hover:text-accent">
                Chat on WhatsApp
              </a>
            </ContactCard>
            <ContactCard icon={<MapPin className="h-5 w-5" />} title="Visit">
              8A, Next to Chikkabidarakallu Metro Station,<br />
              Near Prestige Jindal City, Ravi Kirloskar Layout,<br />
              Anchepalya, Madanayakanahalli,<br />
              Bengaluru, Karnataka – 560073
            </ContactCard>
            <ContactCard icon={<Clock className="h-5 w-5" />} title="Working Hours">
              <ul className="divide-y divide-border">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex justify-between py-2 text-sm">
                    <span className="font-medium">{d}</span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </ContactCard>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Eesh Unisex Salon location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full min-h-[500px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-primary">{icon}</div>
        <h3 className="font-display text-xl text-primary">{title}</h3>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
