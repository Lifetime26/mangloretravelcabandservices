import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { SiteLayout, SectionTitle, ext } from "@/components/SiteLayout";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { getService, services } from "@/lib/services";
import { BRAND, CALL_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? getService(loaderData.slug) : undefined;
    return {
      meta: [
        { title: s ? `${s.title} | Mangalore Travel Cabs And Taxi Services` : "Service | Mangalore Travel Cabs And Taxi Services" },
        { name: "description", content: s?.short ?? "Taxi and cab services in Mangalore." },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="bg-background px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-primary">Service not found</h1>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground">Back to home</Link>
      </section>
    </SiteLayout>
  ),
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  const I = s.icon;
  const msg = `Hi ${BRAND}, I'd like to book: ${s.title}. Please share details.`;
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <SiteLayout>
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-navy-deep text-primary-foreground sm:min-h-[440px]">
        {s.gallery ? <PhotoMarquee imgs={s.gallery} itemClass="w-72 sm:w-96" speed={60} className="-z-20" /> : (
          <img src={s.img} alt={s.title} className={`absolute inset-0 -z-20 h-full w-full sm:animate-[hero-drift_9s_ease-out_forwards] object-cover ${s.pos ?? "object-center"}`} />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-28 sm:pb-12">
          <Link to="/" hash="services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/80 hover:text-gold">
            <ArrowLeft className="h-3.5 w-3.5" /> All services
          </Link>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground"><I className="h-3.5 w-3.5" />{s.tag}</p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{s.title}</h1>
          <p className="mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">{s.short}</p>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">About this service</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">{s.intro.map((t) => <p key={t}>{t}</p>)}</div>

            <h3 className="mt-8 font-display text-xl font-bold text-primary">What's included</h3>
            <ul data-reveal="pop" className="mt-4 grid gap-3 sm:grid-cols-2">
              {s.included.map((h) => (
                <li key={h} className="flex items-start gap-2.5 rounded-xl bg-secondary p-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{h}</li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-bold text-primary">How it works</h3>
            <ol data-reveal="focus" className="mt-4 grid gap-4 sm:grid-cols-3">
              {s.steps.map((st, i) => (
                <li key={st.t} className="rounded-2xl border border-border bg-card p-5">
                  <span className="font-display text-3xl font-extrabold text-gold">0{i + 1}</span>
                  <p className="mt-2 font-display font-bold text-primary">{st.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{st.d}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-display text-xl font-bold text-primary">Best for</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.bestFor.map((b) => <span key={b} className="rounded-full bg-navy-deep px-4 py-1.5 text-sm font-semibold text-primary-foreground">{b}</span>)}
            </div>

            <h3 className="mt-10 font-display text-xl font-bold text-primary">Questions</h3>
            <div className="mt-4 space-y-3">
              {s.faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-float lg:sticky lg:top-28">
            <h3 className="font-display text-lg font-bold text-primary">Book this service</h3>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Vehicles available</p>
            <ul className="mt-2 space-y-1.5 text-sm font-semibold text-primary">
              {s.vehicles.map((v) => <li key={v} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{v}</li>)}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Prices shared on enquiry – tell us your trip details and we reply with a clear quote.</p>
            <a href={wa(msg)} {...ext} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a href={callLink} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:border-gold">
              <Phone className="h-4 w-4" /> Call {CALL_NUMBER}
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="More Services" title="Explore our other services" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to="/services/$slug" params={{ slug: o.slug }} className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-float">
                <span><span className="block font-display font-bold text-primary">{o.title}</span><span className="text-xs text-muted-foreground">{o.tag}</span></span>
                <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
