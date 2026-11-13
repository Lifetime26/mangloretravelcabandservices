import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Phone, MessageCircle, Plane, Languages, Sparkles, BadgeCheck, Clock, Star,
  Car, ArrowRight, MapPin,
  Route as RouteIcon, Map, Building2,
} from "lucide-react";
import sMurudeshwara from "@/assets/murudeshwara.jpg";
import sUdupi from "@/assets/udupi.jpg";
import sKollur from "@/assets/kollur.jpg";
import sCoorg from "@/assets/coorg-tour.jpg";
import sDharmasthala from "@/assets/darmasthala-tour.jpg";
import sBeach from "@/assets/dest-beach.jpg";
import sGokarna from "@/assets/gokarna-tour.jpg";
import sHampi from "@/assets/hampi.jpg";
import sJog from "@/assets/jog-falls.jpg";
import sChik from "@/assets/chikamagaluru-tour.jpg";
import sMysore from "@/assets/mysore-tour.jpg";
import sBandipur from "@/assets/bandipur.jpg";
import tMurudeshwara from "@/assets/murudeshwara.jpg";
import tUdupi from "@/assets/udupi-mobile.jpg";
import tKollur from "@/assets/kollur-mobile.jpg";
import tCoorg from "@/assets/coorg-tour.jpg";
import tDharmasthala from "@/assets/darmasthala-tour.jpg";
import tBeach from "@/assets/dest-beach.jpg";
import tGokarna from "@/assets/gokarna-mobile.jpg";
import tHampi from "@/assets/hampi-mobile.jpg";
import tJog from "@/assets/jog-falls.jpg";
import tChik from "@/assets/chikamagaluru-tour.jpg";
import tMysore from "@/assets/mysore-tour.jpg";
import tBandipur from "@/assets/bandipur-mobile.jpg";
import dTannirbhavi from "@/assets/dest-beach.jpg";
import dCoorg from "@/assets/coorg-tour.jpg";
import fSedan from "@/assets/vehicle-sedan.jpg";
import fSuv from "@/assets/vehicle-suv.jpg";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { services } from "@/lib/services";
import { BRAND, CALL_NUMBER, WHATSAPP_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";
import { SiteLayout, SectionTitle, GoldLink, DestinationCard, PackageCard, ext } from "@/components/SiteLayout";
import { destinations, packages } from "@/lib/places";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles } from "@/lib/fleet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangalore Travel Cabs – Your Journey, Our Priority | 24/7 Taxi in Mangaluru" },
      { name: "description", content: "Reliable taxi and cab services in Mangalore for local rides, IXE airport transfers, outstation trips and custom tour packages. Call 8073565608." },
      { property: "og:title", content: "Mangalore Travel Cabs And Taxi Services" },
      { property: "og:description", content: "Local rides, airport transfers, outstation trips and temple & beach tours across Coastal Karnataka – book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Plane, t: "24/7 Airport Transfers", d: "On-time pickups & drops at Mangaluru International Airport (IXE), day or night." },
  { icon: Languages, t: "Experienced Local Drivers", d: "Courteous drivers fluent in Tulu, Kannada, English and Hindi." },
  { icon: Sparkles, t: "Clean, Sanitized AC Cars", d: "Every vehicle cleaned and sanitized before each trip." },
  { icon: BadgeCheck, t: "Transparent Quotes", d: "Clear pricing shared upfront on WhatsApp – zero hidden charges." },
];

const reviews = [
  { n: "Ramesh K.", p: "Bengaluru", t: "Driver was waiting at IXE before our flight landed. Very punctual and the Innova was spotless." },
  { n: "Priya Shetty", p: "Udupi", t: "Did Kollur, Murudeshwara and Udupi in one trip. Polite driver who knew every temple timing. Highly recommend!" },
  { n: "Anil Menon", p: "Kochi", t: "Booking on WhatsApp took two minutes. Clear quote, no surprises, smooth Coorg trip with family." },
  { n: "Fathima R.", p: "Mangaluru", t: "Booked a Tempo Traveller for 15 people to Dharmasthala. Clean vehicle and very safe driving." },
];

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Destinations />
      <Fleet />
      <Packages />
      <About />
      <Reviews />
      <ContactForm />
    </SiteLayout>
  );
}

const SLIDE_MS = 4000;

type Slide = { img: string; thumb: string; place: string; sub: string; pos?: string };
const slides: Slide[] = [
  { img: sBeach, thumb: tBeach, place: "Mangaluru", sub: "City & Beaches" },
  { img: sMurudeshwara, thumb: tMurudeshwara, place: "Murudeshwara", sub: "Coastal Karnataka" },
  { img: sGokarna, thumb: tGokarna, place: "Gokarna", sub: "Beaches & Temples" },
  { img: sDharmasthala, thumb: tDharmasthala, place: "Dharmasthala", sub: "Temple Yatra" },
  { img: sHampi, thumb: tHampi, place: "Hampi", sub: "Ancient Ruins" },
  { img: sJog, thumb: tJog, place: "Jog Falls", sub: "Sharavathi Waterfalls" },
  { img: sUdupi, thumb: tUdupi, place: "Udupi", sub: "Krishna Temple & Malpe" },
  { img: sKollur, thumb: tKollur, place: "Kollur", sub: "Mookambika Temple" },
  { img: sCoorg, thumb: tCoorg, place: "Coorg", sub: "Hills & Coffee" },
  { img: sChik, thumb: tChik, place: "Chikkamagaluru", sub: "Coffee Hills" },
  { img: sMysore, thumb: tMysore, place: "Mysore", sub: "Palace City" },
  { img: sBandipur, thumb: tBandipur, place: "Bandipur", sub: "Wildlife Safari", pos: "object-[50%_55%]" },
];

const wrap = (i: number, n: number) => ((i % n) + n) % n;

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const strip = useRef<HTMLUListElement>(null);
  const n = slides.length;
  const go = (i: number) => setActive(wrap(i, n));
  const s = slides[active] as Slide;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => wrap(a + 1, n)), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, paused, n]);

  useEffect(() => {
    const ul = strip.current;
    const li = ul?.children[active] as HTMLElement | undefined;
    if (ul && li) ul.scrollTo({ left: li.offsetLeft - 8, behavior: "smooth" });
  }, [active]);

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Popular trips from Mangalore"
      className="relative isolate flex min-h-[100svh] flex-col overflow-clip bg-navy-deep text-primary-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false); }}
      onTouchStart={(e) => { touchX.current = e.touches[0]?.clientX ?? null; setPaused(true); }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        touchX.current = null;
        setPaused(false);
        if (start === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? start) - start;
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      {slides.map((sl, i) => (
        <img
          key={sl.place}
          src={sl.img}
          alt=""
          aria-hidden
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 -z-20 h-full w-full object-cover ${sl.pos ?? "object-[72%_center] lg:object-center"} transition-opacity duration-[1400ms] ease-out ${i === active ? "animate-[hero-drift_9s_ease-out_forwards] opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-navy-deep/40 lg:bg-gradient-to-r lg:from-navy-deep/90 lg:via-navy-deep/55 lg:to-navy-deep/15" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy-deep/80 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-6 pt-32 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0 max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold animate-in fade-in slide-in-from-left-4 duration-700">
              <span className="h-px w-10 bg-gold" /> Mangalore Travel Cabs
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000 sm:text-6xl xl:text-7xl">
              Your Ride Across <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">Coastal Karnataka</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 animate-in fade-in slide-in-from-bottom-4 duration-1000 sm:text-lg">
              Local taxis, airport transfers, outstation trips and temple tours — clean AC cars, local drivers, clear prices on WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link to="/packages" className="inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-float transition hover:scale-105 sm:text-base">
                Explore Packages <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={wa(`Hi ${BRAND}, I'd like a cab quote.`)} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:bg-primary-foreground/20 sm:text-base">
                Get a Quote
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-primary-foreground/80 sm:text-sm">
              {["24/7 Service", "Airport Transfers", "Local Drivers", "No Hidden Charges"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{t}</li>
              ))}
            </ul>
          </div>

          <div key={active} aria-live="polite" className="hidden w-72 rounded-3xl border border-primary-foreground/20 bg-navy-deep/40 p-5 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-700 lg:block">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-5xl font-extrabold text-gold">{String(active + 1).padStart(2, "0")}</span>
              <span className="text-sm text-primary-foreground/60">/ {String(n).padStart(2, "0")}</span>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary-foreground/60"><MapPin className="h-3.5 w-3.5 text-gold" /> Now showing</p>
            <p className="mt-1 font-display text-2xl font-bold">{s.place}</p>
            <p className="text-sm text-primary-foreground/75">{s.sub}</p>
            <a href={wa(`Hi ${BRAND}, I'd like to plan a trip to ${s.place}.`)} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold hover:underline">
              Plan this trip <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-6 lg:px-8" role="tablist" aria-label="Choose trip">
        <ul ref={strip} className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:gap-4">
          {slides.map((sl, i) => {
            const on = i === active;
            return (
              <li key={sl.place} className="shrink-0">
                <button
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-label={`Show ${sl.place}`}
                  onClick={() => go(i)}
                  className={`group relative block h-24 overflow-hidden rounded-2xl text-left shadow-float transition-all duration-700 ease-out sm:h-28 ${on ? "w-44 ring-2 ring-gold sm:w-56" : "w-28 opacity-80 ring-1 ring-primary-foreground/30 hover:opacity-100 sm:w-36"}`}
                >
                  <img src={sl.thumb} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                  <span className="absolute inset-x-3 bottom-2.5 block truncate text-xs font-bold sm:text-sm">{sl.place}</span>
                  {on && <span key={active} className="absolute inset-x-0 bottom-0 h-1 origin-left bg-gold" style={{ animation: `hero-progress ${SLIDE_MS}ms linear forwards`, animationPlayState: paused ? "paused" : "running" }} />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-navy-deep py-16 text-primary-foreground sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionTitle center light kicker="Our Services" title="Taxi & Cab Services in Mangalore" sub="From city rides to long journeys, we've got you covered. Choose from a range of vehicles and travel options tailored to your needs." />
        <div data-reveal="focus" className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:gap-5">
          {services.map(({ slug, icon: I, img, tag, title: t, short: d, pts, pos, gallery }, i) => (
            <Link
              key={slug}
              to="/services/$slug"
              params={{ slug }}
              className="group relative isolate flex flex-col overflow-hidden rounded-3xl bg-primary-foreground/5 ring-1 ring-primary-foreground/15 transition-[flex,box-shadow] duration-700 ease-out hover:ring-gold/70 lg:flex-1 lg:hover:flex-[1.6]"
            >
              <div className="relative h-56 overflow-hidden sm:h-60">
                {gallery ? <PhotoMarquee imgs={gallery} itemClass="w-44" speed={45} /> : <img src={img} alt={t} loading="lazy" className={`h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105 ${pos ?? "object-center"}`} />}
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                <span className="absolute left-4 top-3 font-display text-4xl font-extrabold text-primary-foreground drop-shadow-lg">0{i + 1}</span>
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gold text-gold-foreground shadow-float transition duration-500 group-hover:rotate-[360deg]"><I className="h-5 w-5" /></span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block self-start rounded-full bg-gold/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground">{tag}</span>
                <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{d}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-primary-foreground/90">
                  {pts.map((x) => (
                    <li key={x} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{x}</li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-gold">
                  View Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="places" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-deep py-14 text-primary-foreground sm:py-16">
      <img src={dCoorg} alt="" loading="lazy" width={944} height={704} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start">
        <div>
          <SectionTitle light kicker="Explore Mangalore" title="Popular Destinations" sub="From pristine beaches to ancient temples, let us take you to the best places around Mangalore." />
          <Link to="/destinations" className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            View All Destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div data-reveal="iris" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {destinations.slice(0, 4).map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const list = vehicles.filter((v) => v.featured);
  return (
    <section id="cabs" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="Our Cabs" title="The Right Vehicle for Every Trip" sub="Clean, air-conditioned vehicles driven by experienced local drivers." />
        <div data-reveal="drive" className="mt-10 grid gap-5 md:grid-cols-3">
          {list.map((v) => <VehicleCard key={v.slug} v={v} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/fleet" className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            Explore all vehicles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const list = packages.filter((p) => p.featured);
  return (
    <section id="packages" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Tour Packages" title="Explore Coastal Karnataka" sub="Prices shared on enquiry – tell us your dates and group size on WhatsApp." />
        <div data-reveal="focus" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PackageCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/packages" className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            View All Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="About Us" title="Travel Easy with Local Experts" sub="A Mangaluru-based cab service open 24/7 – trusted by families, pilgrims and business travellers across South Canara." />
        <div data-reveal="pop" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="icon-bob mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-gold-foreground"><I className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-navy-soft py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center light kicker="Reviews" title="What Our Travellers Say" />
        <div data-reveal="tilt" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.n} className="rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10">
              <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-3 text-sm text-primary-foreground/90">"{r.t}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{r.n} <span className="font-normal text-primary-foreground/60">· {r.p}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", pickup: "", dest: "", date: "", vehicle: "Sedan (Dzire / Etios)" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value.slice(0, 120) });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !/^[0-9+\s-]{7,15}$/.test(f.phone.trim()) || !f.pickup.trim() || !f.dest.trim()) {
      setErr("Please enter your name, a valid phone number, pickup and destination.");
      return;
    }
    setErr("");
    const msg = `Hi ${BRAND}, new trip inquiry:\n\nName: ${f.name.trim()}\nPhone: ${f.phone.trim()}\nPickup: ${f.pickup.trim()}\nDestination/Package: ${f.dest.trim()}\nTravel Date: ${f.date || "Flexible"}\nVehicle: ${f.vehicle}`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };
  const input = "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40";
  return (
    <section id="contact" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle kicker="Contact" title="Book Your Ride in Minutes" sub="Share your trip details and we'll reply on WhatsApp with a clear quote." />
          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            {[
              { icon: Phone, l: "Call Now", v: CALL_NUMBER, h: callLink },
              { icon: MessageCircle, l: "WhatsApp", v: WHATSAPP_NUMBER, h: wa(`Hi ${BRAND}`) },
              { icon: Clock, l: "Service Hours", v: "Open 24/7" },
              { icon: Building2, l: "Based in", v: "Mangaluru, Karnataka" },
            ].map(({ icon: I, l, v, h }) => (
              <div key={l} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground"><I className="h-5 w-5" /></span>
                <span className="min-w-0"><span className="block text-xs text-muted-foreground">{l}</span>
                  {h ? <a href={h} {...(h.startsWith("http") ? ext : {})} className="font-bold text-primary hover:text-gold">{v}</a> : <span className="font-bold text-primary">{v}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-card p-6 shadow-float sm:grid-cols-2">
          <label className="text-sm font-semibold text-primary">Name<input className={input} value={f.name} onChange={set("name")} required /></label>
          <label className="text-sm font-semibold text-primary">Phone Number<input type="tel" className={input} value={f.phone} onChange={set("phone")} required /></label>
          <label className="text-sm font-semibold text-primary">Pickup Location<input className={input} value={f.pickup} onChange={set("pickup")} placeholder="e.g. IXE Airport" required /></label>
          <label className="text-sm font-semibold text-primary">Destination / Package<input className={input} value={f.dest} onChange={set("dest")} placeholder="e.g. Kollur Mookambika" required /></label>
          <label className="text-sm font-semibold text-primary">Travel Date<input type="date" className={input} value={f.date} onChange={set("date")} /></label>
          <label className="text-sm font-semibold text-primary">Vehicle Type
            <select className={input} value={f.vehicle} onChange={set("vehicle")}>
              {["Sedan (Dzire / Etios)", "MPV (Ertiga / Kia Carens)", "Innova Crysta / Hycross", "Tempo Traveller / Force Urbania", "Mini Bus (21 Seater)", "Bus (50 Seater)", "Not sure"].map((v) => <option key={v}>{v}</option>)}
            </select>
          </label>
          {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3.5 font-bold text-gold-foreground transition hover:brightness-105 sm:col-span-2">Send Inquiry on WhatsApp <ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>
    </section>
  );
}
