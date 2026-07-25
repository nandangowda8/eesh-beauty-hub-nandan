import { createFileRoute } from "@tanstack/react-router";
import { ContactPanel } from "@/components/ContactPanel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Eesh Unisex Salon, Anchepalya Bengaluru" },
      { name: "description", content: "Call, WhatsApp or visit Eesh Unisex Salon near Chikkabidarakallu Metro Station, Anchepalya, Bengaluru – 560073. Open 7 days a week." },
      { property: "og:title", content: "Contact Eesh Unisex Salon" },
      { property: "og:description", content: "Book your appointment. Open 7 days, near Chikkabidarakallu Metro." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Contact &amp; Location</span>
          <h1 className="mt-3 font-display text-4xl text-primary md:text-5xl">Visit our sanctuary</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Where style meets perfection — in the heart of Anchepalya.
          </p>
        </div>
        <ContactPanel showMap />
      </div>
    </section>
  );
}
