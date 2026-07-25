import { createFileRoute } from "@tanstack/react-router";
import { Navigation, Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, hours } from "@/lib/salon-data";

const ADDRESS_LINES = [
  "8A, Next to Chikkabidarakallu Metro Station",
  "Near Prestige Jindal City, Ravi Kirloskar Layout",
  "Anchepalya, Bengaluru, Karnataka – 560073",
];
const mapQuery = encodeURIComponent(
  "Eesh Unisex Salon, Chikkabidarakallu Metro Station, Anchepalya, Bengaluru 560073",
);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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

function ContactPage() {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden border border-border bg-card shadow-elegant lg:flex-row">
        {/* Content Section */}
        <div className="flex flex-col p-8 sm:p-14 lg:w-1/2">
          <header className="mb-10">
            <h1 className="mb-3 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              Contact &amp; Location
            </h1>
            <p className="text-sm font-medium uppercase italic tracking-[0.2em] text-muted-foreground">
              Visit our sanctuary
            </p>
          </header>

          <div className="grid flex-grow grid-cols-1 gap-10 md:grid-cols-2 lg:gap-8">
            {/* Address & Actions */}
            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-accent">
                  Address
                </h3>
                <address className="font-display text-lg not-italic leading-relaxed text-foreground">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </section>

              <div className="flex flex-col gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary px-6 py-4 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Navigation className="h-4 w-4" /> Visit us on Maps
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-center justify-center gap-2 border border-border px-4 py-4 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-border px-4 py-4 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
                <p className="pt-1 text-xs text-muted-foreground">{PHONE}</p>
              </div>
            </div>

            {/* Hours */}
            <section>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-accent">
                Opening Hours
              </h3>
              <div className="space-y-2 font-sans">
                {hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-end justify-between border-b border-border/60 pb-1.5 text-sm text-muted-foreground last:border-b-0"
                  >
                    <span className="font-medium text-foreground">{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <p className="font-display text-sm italic text-muted-foreground">
              Where style meets perfection — in the heart of Anchepalya.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative min-h-[420px] bg-secondary lg:w-1/2">
          <iframe
            title="Eesh Unisex Salon location"
            src={googleMapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
