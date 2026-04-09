import Link from "next/link";
import Image from "next/image";

type Post = {
  id: string;
  slug: string;
  h1?: string | null;
  seo_title?: string | null;
  meta_description?: string | null;
  excerpt?: string | null;
  published_at?: string | null;
  cover?: { file_url: string; alt?: string | null } | null;
  categories?: { label?: string | null; slug?: string | null }[] | null;
};

export function BlogCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  const title = post.h1 || post.seo_title || post.slug;
  const description = post.excerpt || post.meta_description;
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Cover */}
      <Link href={`/blog/${post.slug}`} style={{ display: "block", overflow: "hidden", aspectRatio: "16/9", position: "relative", background: "var(--color-surface-alt)" }}>
        {post.cover?.file_url ? (
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || title}
            fill
            priority={priority}
            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            className="blog-card-img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, var(--color-primary-light), var(--color-secondary-light))",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <polygon points="4,26 24,6 44,26" fill="var(--color-accent)" opacity="0.7" />
              <rect x="10" y="26" width="28" height="18" rx="2" fill="var(--color-primary)" opacity="0.5" />
              <rect x="20" y="32" width="8" height="12" rx="1" fill="var(--color-primary)" opacity="0.8" />
            </svg>
          </div>
        )}
      </Link>

      {/* Contenu */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Catégorie + date */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          {post.categories?.[0]?.label && (
            <Link
              href={`/blog/categorie/${post.categories[0].slug}`}
              className="badge badge-primary"
              style={{ textDecoration: "none" }}
            >
              {post.categories[0].label}
            </Link>
          )}
          {date && (
            <time
              dateTime={post.published_at || undefined}
              style={{ fontSize: "0.78rem", color: "var(--color-text-light)" }}
            >
              {date}
            </time>
          )}
        </div>

        {/* Titre */}
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.6rem", flex: 1 }}>
          <Link
            href={`/blog/${post.slug}`}
            style={{ color: "var(--color-text)", textDecoration: "none", transition: "color 0.2s ease" }}
            className="blog-card-title-link"
          >
            {title}
          </Link>
        </h2>

        {/* Excerpt */}
        {description && (
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {description}
          </p>
        )}

        {/* Lire la suite */}
        <Link
          href={`/blog/${post.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--color-primary)",
            textDecoration: "none",
            marginTop: "auto",
            transition: "gap 0.2s ease",
          }}
          className="blog-card-read-link"
        >
          Lire l&apos;article
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 7h10M8 3l4 4-4 4" />
          </svg>
        </Link>
      </div>

      <style>{`
        .blog-card-img:hover { transform: scale(1.04) !important; }
        .blog-card-title-link:hover { color: var(--color-primary) !important; }
        .blog-card-read-link:hover { gap: 0.6rem !important; }
      `}</style>
    </article>
  );
}
