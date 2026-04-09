import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Bienvenue Chez Nous",
  description:
    "Découvrez la mission et les valeurs de Bienvenue Chez Nous : un guide indépendant sur l'hébergement participatif, fondé pour démocratiser l'accueil chez l'habitant en France et dans le monde.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "hsl(25,20%,16%)",
          padding: "4rem 0 3rem",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "0.75rem",
              lineHeight: 1.15,
            }}
          >
            Notre mission
          </h1>
          <p style={{ fontSize: "1.05rem", color: "hsl(38,20%,60%)", maxWidth: "56ch", lineHeight: 1.7 }}>
            Bienvenue Chez Nous est un guide éditorial indépendant dédié à l&apos;hébergement participatif et à l&apos;accueil chez l&apos;habitant.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section texture-warm">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              alignItems: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/images/about-team.jpeg"
                alt="L'équipe de Bienvenue Chez Nous, passionnée d'hébergement participatif"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 430px"
              />
            </div>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: "1rem", display: "inline-block" }}>
                Notre histoire
              </span>
              <div className="divider-leaf" />
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.25, color: "var(--color-text)" }}>
                Nés d&apos;une passion pour le voyage authentique
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Bienvenue Chez Nous est né en 2022 d&apos;une frustration partagée : les ressources sur l&apos;hébergement participatif étaient rares, incomplètes ou trop orientées marketing. Nous avons décidé de créer le guide que nous aurions aimé avoir.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                Notre fondatrice, Marie-Laure Fontaine, a passé plus de 12 ans à voyager en chambres d&apos;hôtes et chez l&apos;habitant à travers la France et l&apos;Europe. Forte de cette expérience, elle a réuni une équipe de rédacteurs passionnés pour créer ce guide de référence.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600, textAlign: "center", marginBottom: "0.75rem", color: "var(--color-text)" }}>
              Nos valeurs
            </h2>
            <div className="divider-leaf" style={{ margin: "0 auto 2.5rem" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
              {[
                {
                  icon: "🤍",
                  title: "Indépendance éditoriale",
                  desc: "Nous n'acceptons pas de contenus sponsorisés non signalés. Nos avis sont toujours honnêtes.",
                },
                {
                  icon: "🌱",
                  title: "Tourisme durable",
                  desc: "Nous promouvons des pratiques de voyage respectueuses des hôtes, des lieux et des cultures.",
                },
                {
                  icon: "🤝",
                  title: "Équité hôtes-voyageurs",
                  desc: "Nos guides défendent autant les droits des voyageurs que les intérêts légitimes des hôtes.",
                },
                {
                  icon: "📚",
                  title: "Rigueur et transparence",
                  desc: "Toutes nos informations sont vérifiées, sourcées et mises à jour régulièrement.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>{v.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ce que nous couvrons */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
              Ce que nous couvrons
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Bienvenue Chez Nous traite de toutes les facettes de l&apos;hébergement participatif, des gîtes ruraux aux chambres d&apos;hôtes urbaines, en passant par le couchsurfing, le Workaway et les plateformes comme Airbnb, Booking ou Abritel.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "🔍", label: "Comment trouver le bon hébergement" },
                { icon: "💶", label: "Tarifs, charges et ce qui est inclus" },
                { icon: "📋", label: "Démarches et obligations légales" },
                { icon: "🐾", label: "Règles concernant les animaux" },
                { icon: "🍽️", label: "Repas, tables d'hôtes, autonomie" },
                { icon: "🌍", label: "Hébergement en France et à l'étranger" },
                { icon: "💰", label: "Devenir hôte : revenus et fiscalité" },
                { icon: "⚖️", label: "Droits, assurances et litiges" },
              ].map((item) => (
                <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--color-text)" }}>
              Une question ou une idée d&apos;article ?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
              Nous sommes toujours à la recherche de témoignages d&apos;hôtes et de voyageurs pour enrichir notre contenu.
            </p>
            <Link href="/contact" className="btn-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
