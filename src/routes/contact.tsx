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
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Get in touch</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-primary md:text-6xl">Book your appointment.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Transform your style with expert haircuts, beauty treatments, skincare and makeup
            services. Call, WhatsApp or visit us — we're happy to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <ContactPanel />
      </section>
    </>
  );
}
