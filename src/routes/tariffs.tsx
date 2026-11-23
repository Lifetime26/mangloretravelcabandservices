import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { SiteLayout, SectionTitle, GoldLink } from "@/components/SiteLayout";
import { tariffs, tariffNotes, outstationMinKmPerDay, dayRateNote, inr } from "@/lib/tariffs";
import { BRAND, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/tariffs")({
  head: () => ({
    meta: [
      { title: "Taxi & Cab Tariffs in Mangalore | Mangalore Travel Cabs" },
      {
        name: "description",
        content:
          "Local, outstation and airport taxi fares in Mangaluru for sedans, Ertiga, Innova Crysta, Hycross, Tempo Traveller, Urbania and buses.",
      },
      { property: "og:title", content: "Taxi & Cab Tariffs in Mangalore" },
    ],
  }),
  component: TariffsPage,
});

function DayRate({
  rate,
  bata,
}: {
  rate?: number | undefined;
  bata?: number | undefined;
}) {
  if (rate === undefined) {
    return <span className="text-muted-foreground">—</span>;
  }

  return (
    <>
      <span className="font-semibold text-primary">{inr(rate)}</span>
      {bata !== undefined && (
        <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
          + {inr(bata)} bata
        </span>
      )}
    </>
  );
}

function TariffsPage() {
  const scroller = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ more: false, started: false });

  const measure = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const more = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    const started = el.scrollLeft > 12;
    setEdge((p) => (p.more === more && p.started === started ? p : { more, started }));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <SiteLayout>
      <section className="bg-navy-deep py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            light
            center
            kicker="Taxi Tariffs"
            title="Clear Cab Fares in Mangalore"
            sub="Starting prices for local rides, outstation trips and airport transfers. Message us on WhatsApp for an exact quote for your trip."
          />
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">
            Local, full day and outstation fares
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Local package is 8 hours / 80 km. Outstation minimum is {outstationMinKmPerDay} km per
            day. Day rates are shown where we quote them; “—” means ask us for a price.
          </p>

          <p
            className={`mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition-opacity duration-300 sm:hidden ${edge.more && !edge.started ? "opacity-100" : "pointer-events-none h-0 opacity-0"}`}
          >
            Swipe to see all fare columns <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </p>

          <div className="relative mt-3 sm:mt-6">
            <div
              ref={scroller}
              onScroll={measure}
              role="region"
              tabIndex={0}
              aria-label="Fare table. Scroll sideways for extra hour, outstation, driver bata and airport drop columns."
              className="overflow-x-auto rounded-2xl border border-border bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
            <table className="w-full min-w-[1080px] text-left text-sm">
              <caption className="sr-only">
                Taxi tariffs by vehicle for local, full day and outstation trips
              </caption>
              <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Vehicle
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Full Day Local
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Local 8 hr / 80 km
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Extra km
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Extra hour
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Outstation / km
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Outstation / day ({outstationMinKmPerDay} km)
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Driver bata / day
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Airport drop
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tariffs.map((t) => (
                  <tr key={t.vehicle}>
                    <th scope="row" className="px-4 py-3 font-semibold text-primary">
                      {t.vehicle}
                      <span className="block text-xs font-normal text-muted-foreground">
                        {t.seats}
                      </span>
                    </th>
                    <td className="px-4 py-3">
                      <DayRate rate={t.fullDayLocal} bata={t.fullDayBata} />
                    </td>
                    <td className="px-4 py-3 font-semibold text-primary">{inr(t.local8h80km)}</td>
                    <td className="px-4 py-3">{inr(t.extraKm)}</td>
                    <td className="px-4 py-3">{inr(t.extraHour)}</td>
                    <td className="px-4 py-3 font-semibold text-primary">
                      {inr(t.outstationPerKm)}
                    </td>
                    <td className="px-4 py-3">
                      <DayRate rate={t.outstationPerDay} bata={t.outstationBata} />
                    </td>
                    <td className="px-4 py-3">{inr(t.driverBata)}</td>
                    <td className="px-4 py-3">{inr(t.airportDrop)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-2xl bg-gradient-to-l from-card via-card/80 to-transparent transition-opacity duration-300 ${edge.more ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <p className="mt-4 flex items-start gap-2 rounded-xl border border-gold bg-gold/10 px-4 py-3 text-sm font-semibold text-primary">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            <span>{dayRateNote}</span>
          </p>

          <div className="mt-10 rounded-2xl bg-secondary p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-primary">
              <Info className="h-5 w-5 text-gold" aria-hidden="true" />
              Terms and notes
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
              {tariffNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">
              Need an exact price?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Send your pickup, drop, dates and group size and we will reply with a clear quote.
            </p>
            <GoldLink href={wa(`Hi ${BRAND}, please share a quote for my trip.`)} className="mt-5">
              Get a quote on WhatsApp
            </GoldLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
