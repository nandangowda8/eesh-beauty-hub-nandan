import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { PHONE_TEL, WHATSAPP } from "@/lib/salon-data";

const mapQuery = encodeURIComponent(
  "Eesh Unisex Salon, Chikkabidarakallu Metro Station, Anchepalya, Bengaluru 560073",
);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function HomeContactStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="flex flex-col items-center justify-between gap-6 border-y border-accent/30 py-8 text-primary md:flex-row md:gap-4 md:py-6">
        {/* Location one-liner */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 transition-colors hover:text-accent"
        >
          <MapPin className="h-4 w-4 text-accent" />
          <p className="text-xs font-medium uppercase tracking-[0.15em]">
            Anchepalya, Bengaluru — 560073
          </p>
        </a>

        <div className="hidden h-6 w-px bg-accent/20 md:block" />

        {/* Hours summary */}
        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-accent" />
          <p className="text-xs font-medium uppercase tracking-[0.15em]">
            Open 7 Days · 8 AM – 9 PM
          </p>
        </div>

        <div className="hidden h-6 w-px bg-accent/20 md:block" />

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase italic tracking-widest">
                Call Us
              </span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase italic tracking-widest">
                Chat
              </span>
            </a>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
              Full Details
            </span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
