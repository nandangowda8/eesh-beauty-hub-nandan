import { Phone, MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, hours } from "@/lib/salon-data";

const ADDRESS = "8A, Next to Chikkabidarakallu Metro Station, Near Prestige Jindal City, Ravi Kirloskar Layout, Anchepalya, Madanayakanahalli, Bengaluru, Karnataka – 560073";
const SHORT_ADDRESS = "8A, Next to Chikkabidarakallu Metro Station, Near Prestige Jindal City, Ravi Kirloskar Layout, Anchepalya, Bengaluru – 560073";
const mapQuery = encodeURIComponent("Eesh Unisex Salon, Chikkabidarakallu Metro Station, Anchepalya, Bengaluru 560073");
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function ContactPanel({ compact = false, large = false }: { compact?: boolean; large?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border bg-card shadow-elegant ${large ? "p-10 md:p-14 lg:p-16" : "p-8 lg:p-10"}`}>
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Reach us</span>
        <h2 className={`mt-2 font-display text-primary ${large ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>Visit, call or chat.</h2>
        <p className={`mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground ${large ? "text-base" : "text-sm"}`}>
          Book your appointment or ask us anything. One tap opens Maps, Phone or WhatsApp.
        </p>
      </div>

      <div className={`mx-auto mt-8 grid max-w-4xl gap-4 ${large ? "sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-3"}`}>
        <ActionButton
          href={googleMapsUrl}
          icon={<Navigation className={large ? "h-6 w-6" : "h-5 w-5"} />}
          label="Visit us"
          sublabel="Google Maps"
          external
          large={large}
        />
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

      <div className={`mx-auto mt-10 grid max-w-4xl gap-6 ${large ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
        <div className={`flex items-start gap-3 text-muted-foreground ${large ? "text-base" : "text-sm"}`}>
          <MapPin className={`mt-0.5 shrink-0 text-accent ${large ? "h-5 w-5" : "h-4 w-4"}`} />
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="text-left hover:text-primary">
            {compact ? SHORT_ADDRESS : ADDRESS}
          </a>
        </div>
        <div className={`flex items-start gap-3 text-muted-foreground ${large ? "text-base" : "text-sm"}`}>
          <Clock className={`mt-0.5 shrink-0 text-accent ${large ? "h-5 w-5" : "h-4 w-4"}`} />
          <div className="w-full text-left">
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
