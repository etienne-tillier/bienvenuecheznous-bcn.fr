import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getBlogPostBySlug } from "@/lib/blog";
import { injectDofollowMarker } from "@/lib/dofollow";

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const buildAlternatesByLocale = (post: {
  slug: string;
  default_locale?: string | null;
  translations?: unknown;
}) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(
      post.translations as Record<string, unknown>
    )) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug =
        typeof translation.slug === "string" ? translation.slug : "";
      const status =
        typeof translation.status === "string"
          ? translation.status
          : "published";
      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1 || post.slug,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  // Traduction
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(
      post.translations as Record<string, unknown>
    )) {
      if ((val as { slug?: string; h1?: string; body_md?: string }).slug === slug) {
        displayH1 =
          (val as { h1?: string }).h1 || displayH1;
        displayBody =
          (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");

  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      {/* Hero article */}
      <section
        style={{
          background: "hsl(25,20%,16%)",
          padding: "3.5rem 0 2.5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
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
              transition: "color 0.2s",
            }}
          >
            ← Retour au blog
          </Link>

          {/* Catégorie */}
          {post.categories?.[0]?.label && (
            <Link
              href={`/blog/categorie/${post.categories[0].slug}`}
              className="badge badge-primary"
              style={{ marginBottom: "1rem", display: "inline-block", textDecoration: "none" }}
            >
              {post.categories[0].label}
            </Link>
          )}

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {displayH1 || post.seo_title || post.slug}
          </h1>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            {date && (
              <time
                dateTime={post.published_at || undefined}
                style={{ fontSize: "0.85rem", color: "hsl(38,20%,55%)" }}
              >
                {date}
              </time>
            )}
            {post.author && (
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {post.author.avatar_url && (
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name || "Auteur"}
                    width={24}
                    height={24}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                )}
                {post.author.name && (
                  <span style={{ fontSize: "0.85rem", color: "hsl(38,20%,65%)" }}>
                    {post.author.name}
                  </span>
                )}
              </span>
            )}
          </div>

          {/* Sélecteur de langue */}
          <div style={{ marginTop: "1rem" }}>
            <LanguageSwitcher post={post} currentSlug={slug} />
          </div>
        </div>
      </section>

      {/* Contenu article */}
      <section style={{ padding: "3rem 0 5rem", background: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* Image cover */}
          {post.cover?.file_url && (
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                marginBottom: "2.5rem",
                aspectRatio: "16/8",
                position: "relative",
              }}
            >
              <Image
                src={post.cover.file_url}
                alt={post.cover.alt || displayH1 || post.slug}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 760px"
              />
            </div>
          )}

          {/* Corps de l'article */}
          <div className="prose prose-custom max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{ a: MarkdownLink }}
            >
              {bodyMd}
            </ReactMarkdown>
          </div>

          {/* Auteur */}
          {post.author && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              {post.author.avatar_url && (
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.name || "Auteur"}
                  width={64}
                  height={64}
                  style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                />
              )}
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1rem", marginBottom: "0.25rem", color: "var(--color-text)" }}>
                  {post.author.name}
                </p>
                {post.author.bio && (
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* CTA retour blog */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "var(--color-primary-light)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "0.5rem",
              }}
            >
              Vous avez apprécié cet article ?
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
              Découvrez d&apos;autres guides sur l&apos;hébergement participatif.
            </p>
            <Link href="/blog" className="btn-primary" style={{ fontSize: "0.875rem" }}>
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
