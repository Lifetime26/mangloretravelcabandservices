import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { SiteLayout, SectionTitle, GoldLink } from "@/components/SiteLayout";
import { tariffs, tariffNotes, outstationMinKmPerDay, inr } from "@/lib/tariffs";
import { BRAND, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/tariffs")({
  head: () => ({
    meta: [
      { title: "Taxi & Cab Tariffs in Mangalore | Mangalore Travel Cabs" },
      { name: "description", content: "Local, outstation and airport taxi fares in Mangaluru for sedans, Ertiga, Innova Crysta, Hycross, Tempo Traveller, Urbania and buses." },
      { property: "og:title", content: "Taxi & Cab Tariffs in Mangalore" },
    ],
  }),
  component: TariffsPage,
});

function TariffsPage() {
  return (
    <SiteLayout>
      <section className="bg-navy-deep py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle light center kicker="Taxi Tariffs" title="Clear Cab Fares in Mangalore" sub="Starting prices for local rides, outstation trips and airport transfers. Message us on WhatsApp for an exact quote for your trip." />
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">Local and outstation fares</h2>
          <p className="mt-1 text-sm text-muted-foreground">Local package is 8 hours / 80 km. Outstation minimum is {outstationMinKmPerDay} km per day.</p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[760px] text-left text-sm">
              <caption className="sr-only">Taxi tariffs by vehicle</caption>
              <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3">Vehicle</th>
                  <th scope="col" className="px-4 py-3">Local 8 hr / 80 km</th>
                  <th scope="col" className="px-4 py-3">Extra km</th>
                  <th scope="col" className="px-4 py-3">Extra hour</th>
                  <th scope="col" className="px-4 py-3">Outstation / km</th>
                  <th scope="col" className="px-4 py-3">Driver bata / day</th>
                  <th scope="col" className="px-4 py-3">Airport drop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tariffs.map((t) => (
                  <tr key={t.vehicle}>
                    <th scope="row" className="px-4 py-3 font-semibold text-primary">
                      {t.vehicle}
                      <span className="block text-xs font-normal text-muted-foreground">{t.seats}</span>
                    </th>
                    <td className="px-4 py-3 font-semibold text-primary">{inr(t.local8h80km)}</td>
                    <td className="px-4 py-3">{inr(t.extraKm)}</td>
                    <td className="px-4 py-3">{inr(t.extraHour)}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{inr(t.outstationPerKm)}</td>
                    <td className="px-4 py-3">{inr(t.driverBata)}</td>
                    <td className="px-4 py-3">{inr(t.airportDrop)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-2xl bg-secondary p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-primary"><Info className="h-5 w-5 text-gold" aria-hidden="true" />Terms and notes</h2>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
              {tariffNotes.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">Need an exact price?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Send your pickup, drop, dates and group size and we will reply with a clear quote.</p>
            <GoldLink href={wa(`Hi ${BRAND}, please share a quote for my trip.`)} className="mt-5">Get a quote on WhatsApp</GoldLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
