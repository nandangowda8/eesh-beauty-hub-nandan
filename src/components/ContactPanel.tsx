import { Phone, MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, hours } from "@/lib/salon-data";

const ADDRESS = "8A, Next to Chikkabidarakallu Metro Station, Near Prestige Jindal City, Ravi Kirloskar Layout, Anchepalya, Madanayakanahalli, Bengaluru, Karnataka – 560073";
const SHORT_ADDRESS = "8A, Next to Chikkabidarakallu Metro Station, Near Prestige Jindal City, Ravi Kirloskar Layout, Anchepalya, Bengaluru – 560073";
const mapQuery = encodeURIComponent("Eesh Unisex Salon, Chikkabidarakallu Metro Station, Anchepalya, Bengaluru 560073");
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export function ContactPanel({
  compact = false,
  large = false,
  showMap = false,
}: {
  compact?: boolean;
  large?: boolean;
  showMap?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-card shadow-elegant ${large ? "p-10 md:p-14 lg:p-16" : "p-8 lg:p-10"}`}>
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Reach us</span>
        <h2 className={`mt-2 font-display text-primary ${large ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>Visit, call or chat.</h2>
        <p className={`mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground ${large ? "text-base" : "text-sm"}`}>
          Book your appointment or ask us anything. One tap opens Maps, Phone or WhatsApp.
        </p>
      </div>

      <div className={`mx-auto mt-8 grid max-w-5xl gap-4 ${large ? "sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
        <ActionButton
          href={`tel:${PHONE_TEL}`}
          icon={<Phone className={large ? "h-6 w-6" : "h-5 w-5"} />}
          label="Call now"
          sublabel={PHONE}
          large={large}
        />
        <ActionButton
          href={`https://wa.me/${WHATSAPP}`}
          icon={<MessageCircle className={large ? "h-6 w-6" : "h-5 w-5"} />}
          label="WhatsApp"
          sublabel="Chat"
          external
          large={large}
        />
      </div>

      {showMap && (
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="group relative overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Eesh Unisex Salon location"
              src={googleMapsEmbedUrl}
              className="h-80 w-full border-0 md:h-[28rem]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft opacity-90 transition-opacity hover:opacity-100"
            >
              <ExternalLink className="h-4 w-4" /> Open in Maps
            </a>
          </div>
        </div>
      )}

      <div className={`mx-auto grid max-w-5xl gap-8 ${showMap ? "mt-10 md:grid-cols-2" : "mt-10 md:grid-cols-2"}`}>
        <div className={`flex items-start gap-3 text-muted-foreground ${large ? "text-base" : "text-sm"}`}>
          <MapPin className={`mt-0.5 shrink-0 text-accent ${large ? "h-5 w-5" : "h-4 w-4"}`} />
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="text-left hover:text-primary">
            {compact ? SHORT_ADDRESS : ADDRESS}
          </a>
        </div>
        <div className="flex items-start gap-4 text-muted-foreground">
          <Clock className={`mt-1 shrink-0 text-accent ${large ? "h-6 w-6" : "h-5 w-5"}`} />
          <div className="w-full text-left">
            <h3 className={`mb-4 font-display font-semibold text-primary ${large ? "text-xl" : "text-lg"}`}>Opening Hours</h3>
            <div className={`space-y-2 rounded-2xl border border-border bg-secondary/30 ${large ? "p-5" : "p-4"}`}>
              {hours.map(([d, t]) => (
                <div
                  key={d}
                  className={`flex items-center justify-between gap-4 border-b border-border/50 last:border-b-0 ${large ? "py-3 text-base" : "py-2 text-sm"}`}
                >
                  <span className="font-semibold text-foreground/90">{d}</span>
                  <span className="font-medium text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({
  href,
  icon,
  label,
  sublabel,
  external = false,
  large = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  external?: boolean;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group flex flex-col items-center rounded-2xl border border-border bg-secondary/40 text-center transition-all hover:-translate-y-1 hover:bg-secondary hover:shadow-soft ${large ? "p-6" : "p-5"}`}
    >
      <div className={`grid place-items-center rounded-full bg-gradient-gold text-primary transition-transform group-hover:scale-110 ${large ? "h-16 w-16" : "h-12 w-12"}`}>
        {icon}
      </div>
      <span className={`mt-4 font-semibold text-primary ${large ? "text-lg" : "text-base"}`}>{label}</span>
      <span className={`mt-1 text-muted-foreground ${large ? "text-sm" : "text-xs"}`}>{sublabel}</span>
    </a>
  );
}
