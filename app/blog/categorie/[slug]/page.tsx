import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostsByCategory, getCategoryInfo } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  const label = category?.label || slug;
  return {
    title: `${label} — Articles sur l'hébergement participatif`,
    description: `Retrouvez tous nos articles sur la thématique "${label}" : guides pratiques, conseils et témoignages sur l'hébergement chez l'habitant.`,
    alternates: { canonical: `https://bienvenuecheznous-bcn.fr/blog/categorie/${slug}` },
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, category] = await Promise.all([
    getBlogPostsByCategory(slug, 24, 0),
    getCategoryInfo(slug),
  ]);

  const label = category?.label || slug;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "hsl(25,20%,16%)",
          padding: "3.5rem 0 2.5rem",
          borderBottom: "1px solid hsl(25,15%,22%)",
        }}
      >
        <div className="container">
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.85rem",
              color: "hsl(38,20%,55%)",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            ← Retour au blog
          </Link>
          <span className="badge badge-primary" style={{ marginBottom: "1rem", display: "inline-block" }}>
            Catégorie
          </span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            {label}
          </h1>
          <p style={{ fontSize: "1rem", color: "hsl(38,20%,60%)" }}>
            {posts.length} article{posts.length !== 1 ? "s" : ""} dans cette catégorie
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section texture-warm">
        <div className="container">
          {posts.length === 0 ? (
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "4rem 2rem",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>📭</span>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Aucun article publié pour le moment.
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                Revenez bientôt pour découvrir nos articles sur cette thématique.
              </p>
              <Link href="/blog" className="btn-primary" style={{ fontSize: "0.875rem" }}>
                Voir tous les articles
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {posts.map((post, i) => (
                <BlogCard key={post.id} post={post} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
