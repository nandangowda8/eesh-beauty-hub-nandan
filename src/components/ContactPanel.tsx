import { Phone, MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, hours } from "@/lib/salon-data";

const ADDRESS = "8A, Next to Chikkabidarakallu Metro Station, Near Prestige Jindal City, Ravi Kirloskar Layout, Anchepalya, Madanayakanahalli, Bengaluru, Karnataka – 560073";
const SHORT_ADDRESS = "8A, Next to Chikkabidarakallu Metro Station, Near Prestige Jindal City, Ravi Kirloskar Layout, Anchepalya, Bengaluru – 560073";
const mapQuery = encodeURIComponent("Eesh Unisex Salon, Chikkabidarakallu Metro Station, Anchepalya, Bengaluru 560073");
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function ContactPanel({ showMap = true, compact = false }: { showMap?: boolean; compact?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-card shadow-elegant ${compact ? "" : "grid lg:grid-cols-[1fr_1.35fr]"}`}>
      <div className="space-y-6 p-8 lg:p-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Reach us</span>
          <h2 className="mt-2 font-display text-3xl text-primary md:text-4xl">Visit, call or chat.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Book your appointment or ask us anything. One tap opens Maps, Phone or WhatsApp.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <ActionButton
            href={googleMapsUrl}
            icon={<Navigation className="h-5 w-5" />}
            label="Visit us"
            sublabel="Google Maps"
            external
          />
          <ActionButton
            href={`tel:${PHONE_TEL}`}
            icon={<Phone className="h-5 w-5" />}
            label="Call now"
            sublabel={PHONE}
          />
          <ActionButton
            href={`https://wa.me/${WHATSAPP}`}
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            sublabel="Chat"
            external
          />
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
              {compact ? SHORT_ADDRESS : ADDRESS}
            </a>
          </div>
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <div>
              {hours.map(([d, t]) => (
                <div key={d} className="flex justify-between gap-6">
                  <span className="font-medium text-foreground/80">{d}</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showMap && (
        <div className="relative min-h-[320px] border-t border-border lg:border-l lg:border-t-0">
          <iframe
            title="Eesh Unisex Salon location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft hover:opacity-90"
          >
            <Navigation className="h-3.5 w-3.5" /> Open in Maps
          </a>
        </div>
      )}
    </div>
  );
}

function ActionButton({
  href,
  icon,
  label,
  sublabel,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex flex-col items-center rounded-2xl border border-border bg-secondary/40 p-4 text-center transition-colors hover:bg-secondary"
    >
      <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-primary transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="mt-3 text-sm font-semibold text-primary">{label}</span>
      <span className="mt-0.5 text-xs text-muted-foreground">{sublabel}</span>
    </a>
  );
}
