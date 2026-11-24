import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout, GoldLink } from "@/components/SiteLayout";
import { getPost, formatDate } from "@/lib/blog";
import { BRAND, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.post.title} | Mangalore Travel Cabs And Taxi Services` : "Blog | Mangalore Travel Cabs And Taxi Services" },
      { name: "description", content: loaderData?.post.excerpt ?? "Travel guides from Mangalore." },
    ],
  }),
  component: BlogPostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="bg-background px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-primary">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground">See all posts</Link>
      </section>
    </SiteLayout>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="bg-background pb-16">
        <div className="relative h-64 sm:h-96">
          <img src={post.img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-4 pb-8 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-wider text-gold">{post.tag}</p>
            <h1 className="mt-2 font-display text-2xl font-bold sm:text-4xl">{post.title}</h1>
            <p className="mt-2 text-sm text-primary-foreground/80">{formatDate(post.date)} · {post.readTime}</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 pt-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold"><ArrowLeft className="h-4 w-4" />All posts</Link>
          {post.sections.map((s, i) => (
            <section key={i} className="mt-8">
              {s.heading && <h2 className="font-display text-xl font-bold text-primary">{s.heading}</h2>}
              {s.body.map((para) => <p key={para} className="mt-3 leading-relaxed text-muted-foreground">{para}</p>)}
            </section>
          ))}

          <div className="mt-12 rounded-2xl bg-secondary p-6 text-center">
            <h2 className="font-display text-lg font-bold text-primary">Planning this trip?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Book a clean AC cab with a local driver.</p>
            <GoldLink href={wa(`Hi ${BRAND}, I read "${post.title}" and would like to plan a trip.`)} className="mt-4">Ask on WhatsApp</GoldLink>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
