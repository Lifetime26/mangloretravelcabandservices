import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionTitle } from "@/components/SiteLayout";
import { posts, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Travel Blog | Mangalore Travel Cabs" },
      { name: "description", content: "Travel guides and tips for Mangaluru, temple yatras, Coorg, Chikmagalur and road trips across South India." },
      { property: "og:title", content: "Travel Blog | Mangalore Travel Cabs" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteLayout>
      <section className="bg-navy-deep py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle light center kicker="Blog" title="Travel Guides and Tips" sub="Ideas and practical tips for trips from Mangaluru, written by our local team." />
        </div>
      </section>
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-float">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gold">{p.tag}</p>
                <h2 className="mt-2 font-display text-lg font-bold text-primary">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(p.date)} · {p.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-primary">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
