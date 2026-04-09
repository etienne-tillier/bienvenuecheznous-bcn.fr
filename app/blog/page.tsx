import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog — Hébergement participatif, conseils et guides",
  description:
    "Retrouvez tous nos articles sur l'hébergement chez l'habitant : conseils pratiques, guides voyageurs, astuces hôtes, comparatifs plateformes et témoignages.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/blog" },
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "hsl(25,20%,16%)",
          padding: "4rem 0 3rem",
          borderBottom: "1px solid hsl(25,15%,22%)",
        }}
      >
        <div className="container">
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "hsl(38,20%,55%)", textDecoration: "none", marginBottom: "1.5rem", transition: "color 0.2s" }}>
            ← Accueil
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            Nos articles &amp; guides
          </h1>
          <p style={{ fontSize: "1.05rem", color: "hsl(38,20%,60%)", maxWidth: "54ch", lineHeight: 1.7 }}>
            Conseils pratiques, témoignages authentiques et guides complets pour voyageurs et hôtes.
          </p>
        </div>
      </section>

      {/* Liste articles */}
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
                  fontSize: "1.25rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Aucun article publié pour le moment.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                Notre équipe rédige actuellement des guides sur l&apos;hébergement participatif.
              </p>
              <Link href="/" className="btn-primary" style={{ fontSize: "0.875rem" }}>
                Retour à l&apos;accueil
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
