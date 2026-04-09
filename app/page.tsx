import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Bienvenue Chez Nous - Guide de l'Hébergement Participatif",
  description:
    "Tout savoir sur l'hébergement chez l'habitant : conseils voyageurs, guide hôtes, tarifs, règles. Trouvez votre logement authentique ou devenez hôte.",
  openGraph: {
    title: "Bienvenue Chez Nous - L'hébergement participatif expliqué",
    description:
      "Tout savoir sur l'hébergement chez l'habitant : conseils voyageurs, guide hôtes, tarifs, règles. Trouvez votre logement authentique ou devenez hôte.",
    url: "https://bienvenuecheznous-bcn.fr",
  },
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr" },
};

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(6, 0);

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Image de fond */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/home-hero.jpeg"
            alt="Intérieur chaleureux d'une maison d'hôtes"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          {/* Overlay dégradé */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(110deg, hsla(25,20%,12%,0.78) 0%, hsla(25,20%,12%,0.45) 55%, hsla(25,20%,12%,0.15) 100%)",
            }}
          />
        </div>

        {/* Contenu hero */}
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBlock: "6rem 4rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <span
              className="badge badge-accent animate-fade-in"
              style={{ marginBottom: "1.25rem", display: "inline-block" }}
            >
              Hébergement participatif
            </span>
            <h1
              className="animate-fade-in-up delay-100"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Découvrez l&apos;art de<br />
              <em style={{ fontStyle: "italic", color: "hsl(42,65%,72%)" }}>l&apos;accueil participatif</em>
            </h1>
            <p
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: "1.15rem",
                color: "hsla(38,30%,92%,0.9)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "50ch",
              }}
            >
              Voyageurs et hôtes : trouvez tous les conseils pratiques, tarifs,
              règles et astuces pour une expérience authentique chez l&apos;habitant.
            </p>
            <div
              className="animate-fade-in-up delay-300"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link href="/guides/voyageurs" className="btn-primary">
                Guide voyageur
              </Link>
              <Link
                href="/guides/hotes"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "hsla(255,255%,255%,0.12)",
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "var(--radius-md)",
                  border: "2px solid hsla(255,255%,255%,0.35)",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.22s ease, border-color 0.22s ease",
                  textDecoration: "none",
                }}
              >
                Devenir hôte →
              </Link>
            </div>

            {/* Stats rapides */}
            <div
              className="animate-fade-in-up delay-400"
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "12 000+", label: "Hôtes en France" },
                { num: "4,8/5", label: "Satisfaction moyenne" },
                { num: "30%", label: "Économies vs hôtel" },
              ].map((stat) => (
                <div key={stat.num}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 700, color: "hsl(42,65%,72%)", margin: 0 }}>
                    {stat.num}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "hsla(38,30%,85%,0.8)", margin: 0, marginTop: "0.15rem" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicateur scroll */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "hsla(38,30%,90%,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Découvrir
          </span>
          <div
            style={{
              width: "1.5px",
              height: "32px",
              background: "linear-gradient(to bottom, hsla(38,30%,90%,0.6), transparent)",
              animation: "fadeIn 2s ease infinite alternate",
            }}
          />
        </div>
      </section>

      {/* ── SECTION VOYAGEURS ── */}
      <section className="section texture-warm" id="voyageurs">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/images/home-travelers.jpeg"
                alt="Voyageurs profitant d'une expérience authentique chez l'habitant"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Badge flottant */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1.25rem",
                  boxShadow: "var(--shadow-lg)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🌍</span>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "0.95rem", margin: 0, color: "var(--color-text)" }}>
                    Partout en France
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", margin: 0 }}>
                    et dans le monde entier
                  </p>
                </div>
              </div>
            </div>

            {/* Texte */}
            <div>
              <span className="badge badge-primary" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Pour les voyageurs
              </span>
              <div className="divider-leaf" />
              <h2 className="section-title">
                Tout ce qu&apos;il faut<br />savoir avant d&apos;arriver
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                Héberger chez l&apos;habitant, c&apos;est vivre une expérience unique : repas partagés,
                conseils locaux, ambiance familiale. Découvrez comment choisir, quoi prévoir
                et comment profiter au maximum de cette aventure humaine.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { icon: "🏡", text: "Comment trouver la bonne chambre chez l'habitant" },
                  { icon: "🧳", text: "Ce qu'il faut apporter (draps, serviettes, etc.)" },
                  { icon: "🍽️", text: "Les repas : table d'hôtes, petit-déjeuner, autonomie" },
                  { icon: "🐾", text: "Animaux de compagnie : les règles à connaître" },
                  { icon: "💰", text: "Tarifs, charges et ce qui est inclus" },
                ].map((item) => (
                  <li key={item.icon} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <span style={{ fontSize: "1.1rem", marginTop: "0.1rem" }}>{item.icon}</span>
                    <span style={{ fontSize: "0.925rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="/guides/voyageurs" className="btn-primary">
                Lire le guide voyageur →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #voyageurs .container > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── SECTION HÔTES ── */}
      <section className="section" id="hotes" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Texte */}
            <div>
              <span className="badge badge-secondary" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Pour les hôtes
              </span>
              <div className="divider-leaf" />
              <h2 className="section-title">
                Ouvrez votre maison<br />et partagez votre quotidien
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                Devenir hôte, c&apos;est accueillir le monde chez soi tout en générant un complément
                de revenus. Du cadre juridique aux conseils pratiques, nous vous guidons
                pas à pas pour démarrer sereinement.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  { icon: "📋", title: "Démarches", desc: "Déclaration, fiscalité et statut juridique" },
                  { icon: "💶", title: "Revenus", desc: "Tarification et rentabilité réelle" },
                  { icon: "🤝", title: "Accueil", desc: "Checklist et bonnes pratiques" },
                  { icon: "⚖️", title: "Règles", desc: "Droits, devoirs et responsabilités" },
                ].map((item) => (
                  <div
                    key={item.icon}
                    style={{
                      background: "var(--color-surface-alt)",
                      borderRadius: "var(--radius-md)",
                      padding: "1rem",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <p style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{item.icon}</p>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "0.25rem" }}>{item.title}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/guides/hotes" className="btn-primary" style={{ background: "var(--color-secondary)", borderColor: "var(--color-secondary)" }}>
                Lire le guide hôte →
              </Link>
            </div>

            {/* Image */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/images/home-hosts.jpeg"
                alt="Hôte accueillant des voyageurs dans sa maison"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "var(--color-primary)",
                  color: "#fff",
                  borderRadius: "var(--radius-md)",
                  padding: "0.6rem 1rem",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  boxShadow: "var(--shadow-md)",
                }}
              >
                Revenus complémentaires
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #hotes .container > div { grid-template-columns: 1fr !important; }
            #hotes .container > div > div:first-child { order: 2; }
            #hotes .container > div > div:last-child { order: 1; }
          }
        `}</style>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="section texture-warm" id="temoignages">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Témoignages
            </span>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Ils ont vécu l&apos;expérience
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Voyageurs et hôtes partagent leurs retours d&apos;expérience authentiques
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                quote:
                  "J'avais des doutes au départ, mais séjourner chez Martine à Annecy a changé ma vision du voyage. On a partagé des repas incroyables, elle nous a emmené sur des sentiers secrets… une expérience inimitable.",
                author: "Sophie D.",
                role: "Voyageuse",
                rating: 5,
              },
              {
                quote:
                  "Accueillir des voyageurs depuis 3 ans m'a apporté bien plus que des revenus : des amis de partout dans le monde, des échanges culturels riches, et une maison toujours vivante. Je recommande sans hésiter.",
                author: "Bernard M.",
                role: "Hôte depuis 2021 — Bordeaux",
                rating: 5,
              },
              {
                quote:
                  "En tant qu'étudiant avec un budget limité, l'hébergement chez l'habitant m'a permis de voyager dans 6 régions françaises en un été. Moins cher qu'un hostel et bien plus humain !",
                author: "Théo R.",
                role: "Voyageur étudiant",
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.author}
                className="card"
                style={{ padding: "1.75rem" }}
              >
                {/* Étoiles */}
                <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: "var(--color-accent)", fontSize: "1rem" }}>★</span>
                  ))}
                </div>
                <blockquote
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    color: "var(--color-text)",
                    margin: "0 0 1.25rem",
                    borderLeft: "3px solid var(--color-primary-light)",
                    paddingLeft: "1rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-text)", margin: 0 }}>{t.author}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>{t.role}</p>
              </div>
            ))}
          </div>

          {/* Image témoignages */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              height: "320px",
            }}
          >
            <Image
              src="/images/home-testimonials.jpeg"
              alt="Invités heureux partageant un repas chez l'habitant"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, hsla(25,20%,12%,0.65), transparent)",
                display: "flex",
                alignItems: "center",
                padding: "3rem",
              }}
            >
              <div style={{ maxWidth: "420px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  Des milliers d&apos;histoires<br />commencent ici
                </h3>
                <p style={{ color: "hsla(38,30%,90%,0.85)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                  Rejoignez la communauté de l&apos;hébergement participatif et vivez des rencontres inoubliables.
                </p>
                <Link href="/guides/voyageurs" className="btn-primary" style={{ fontSize: "0.875rem" }}>
                  Commencer votre aventure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNAUTÉ ── */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "5/4",
              }}
            >
              <Image
                src="/images/home-community.jpeg"
                alt="Repas partagé au sein d'une communauté d'hôtes"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <span className="badge badge-secondary" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Communauté
              </span>
              <div className="divider-leaf" />
              <h2 className="section-title">
                Partagez, échangez,<br />voyagez différemment
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "1.75rem" }}>
                L&apos;hébergement participatif, c&apos;est bien plus qu&apos;un toit : c&apos;est une façon de
                voyager qui remet l&apos;humain au centre. Des repas en famille, des conseils
                locaux inestimables, une vision du monde élargie.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🌱", title: "Voyage responsable", desc: "Moins d'impact environnemental, plus d'authenticité" },
                  { icon: "🗣️", title: "Échanges culturels", desc: "Apprendre des traditions locales et partager les siennes" },
                  { icon: "💚", title: "Économie solidaire", desc: "Soutenir directement les particuliers locaux" },
                ].map((item) => (
                  <div key={item.icon} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontSize: "1.25rem",
                        width: "2.5rem",
                        height: "2.5rem",
                        background: "var(--color-secondary-light)",
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "0.2rem" }}>{item.title}</p>
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #hotes .container > div,
            section .container > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── CONFIANCE ── */}
      <section className="section" style={{ background: "var(--color-primary)", color: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <span
                className="badge"
                style={{
                  background: "hsla(255,255%,255%,0.15)",
                  color: "#fff",
                  marginBottom: "1rem",
                  display: "inline-block",
                }}
              >
                Confiance &amp; sécurité
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Voyager et accueillir<br />en toute sérénité
              </h2>
              <p style={{ fontSize: "1.05rem", color: "hsla(38,30%,95%,0.85)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Assurances, vérifications, conseils juridiques et bonnes pratiques :
                nous vous donnons toutes les clés pour que l&apos;expérience se passe
                toujours dans les meilleures conditions.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "✅ Assurances adaptées pour hôtes et voyageurs",
                  "✅ Droits et obligations de chaque partie",
                  "✅ Conseils en cas de problème",
                  "✅ Sélectionner des plateformes sécurisées",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "0.925rem", color: "hsla(38,30%,95%,0.9)" }}>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#fff",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  transition: "opacity 0.22s ease, transform 0.15s ease",
                }}
              >
                Nos conseils pratiques →
              </Link>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/images/home-trust.jpeg"
                alt="Poignée de main symbolisant la confiance entre hôte et voyageur"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES RÉCENTS ── */}
      <section className="section texture-warm">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>Blog</span>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Derniers articles</h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                Conseils, guides et témoignages sur l&apos;hébergement participatif
              </p>
            </div>
            <Link href="/blog" className="btn-ghost">
              Voir tous les articles →
            </Link>
          </div>

          {posts.length === 0 ? (
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "3rem",
                textAlign: "center",
                color: "var(--color-text-muted)",
              }}
            >
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                Aucun article publié pour le moment.
              </p>
              <p style={{ fontSize: "0.875rem" }}>Revenez bientôt pour découvrir nos guides et conseils.</p>
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
                <BlogCard key={post.id} post={post} priority={i === 0} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        style={{
          padding: "5rem 0",
          background: "hsl(25, 20%, 16%)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Prêt à vivre une expérience<br />
            <em style={{ color: "hsl(42,65%,72%)", fontStyle: "italic" }}>authentiquement humaine</em> ?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "hsl(38,20%,65%)", marginBottom: "2rem", maxWidth: "48ch", marginInline: "auto" }}>
            Que vous soyez voyageur en quête d&apos;authenticité ou particulier souhaitant ouvrir votre maison,
            commencez votre aventure dès aujourd&apos;hui.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides/voyageurs" className="btn-primary">
              Je suis voyageur
            </Link>
            <Link
              href="/guides/hotes"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "hsl(42,65%,72%)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "var(--radius-md)",
                border: "2px solid hsl(42,65%,72%)",
                textDecoration: "none",
                transition: "background 0.22s ease, color 0.22s ease",
              }}
            >
              Je veux devenir hôte
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
