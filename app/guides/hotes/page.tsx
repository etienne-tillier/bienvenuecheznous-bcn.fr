import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide de l'Hôte — Comment accueillir chez soi et devenir hôte participatif",
  description:
    "Guide complet pour devenir hôte chez l'habitant : démarches légales, fiscalité, tarification, aménagement, accueil des voyageurs et responsabilités. Tout ce qu'il faut savoir.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/guides/hotes" },
};

export default function GuideHotesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/guides-hosts.jpeg"
            alt="Hôte préparant sa maison pour accueillir des voyageurs"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(110deg, hsla(25,20%,12%,0.82) 0%, hsla(25,20%,12%,0.5) 60%, hsla(25,20%,12%,0.15) 100%)",
            }}
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBlock: "5rem 4rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "hsl(38,20%,60%)", textDecoration: "none", marginBottom: "1.5rem" }}>
            ← Accueil
          </Link>
          <span className="badge badge-secondary" style={{ marginBottom: "1rem", display: "inline-block" }}>
            Guide complet
          </span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1rem",
              maxWidth: "620px",
            }}
          >
            Guide de l&apos;hôte :<br />
            <em style={{ fontStyle: "italic", color: "hsl(42,65%,72%)" }}>ouvrir sa maison en toute sérénité</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "hsla(38,30%,92%,0.85)", maxWidth: "50ch", lineHeight: 1.7 }}>
            Comment accueillir des voyageurs chez vous, de l&apos;inscription aux plateformes jusqu&apos;à la gestion de vos revenus.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section texture-warm">
        <div className="container" style={{ maxWidth: "900px" }}>

          {/* Étapes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* 1 - Peut-on louer ? */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
              }}
            >
              <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                Étape 1 — Légalité
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                Ai-je le droit de louer ma chambre ou mon logement ?
              </h2>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                En France, location de courte durée (moins de 120 jours/an pour une résidence principale) est autorisée sous conditions. Voici les points clés à vérifier avant de commencer :
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  {
                    icon: "🏠",
                    title: "Résidence principale",
                    desc: "Vous pouvez louer jusqu'à 120 nuits/an. Au-delà, déclaration en mairie obligatoire.",
                  },
                  {
                    icon: "🏡",
                    title: "Résidence secondaire",
                    desc: "Déclaration obligatoire en mairie. Numéro d'enregistrement requis dans plusieurs grandes villes.",
                  },
                  {
                    icon: "📋",
                    title: "Locataire",
                    desc: "Autorisation écrite du propriétaire indispensable. Sans elle, la sous-location est illégale.",
                  },
                  {
                    icon: "🏢",
                    title: "Copropriété",
                    desc: "Vérifiez le règlement de copropriété : certains interdisent explicitement la location saisonnière.",
                  },
                ].map((item) => (
                  <div
                    key={item.icon}
                    style={{
                      background: "var(--color-surface-alt)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.25rem",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <span style={{ fontSize: "1.6rem", display: "block", marginBottom: "0.5rem" }}>{item.icon}</span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.35rem", color: "var(--color-text)" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 - Fiscalité */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
              }}
            >
              <span className="badge badge-secondary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                Étape 2 — Fiscalité
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                Comment déclarer vos revenus locatifs ?
              </h2>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Les revenus de location meublée de courte durée sont déclarés dans la catégorie <strong>BIC (Bénéfices Industriels et Commerciaux)</strong>. Deux régimes s&apos;offrent à vous :
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div
                  style={{
                    background: "var(--color-primary-light)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    border: "1px solid hsl(17,62%,82%)",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                    Micro-BIC (simplifié)
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                    Abattement forfaitaire de <strong>50 %</strong> sur les revenus (71 % pour les meublés classés). Idéal si vos charges réelles sont inférieures à cet abattement.
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Plafond : jusqu&apos;à 77 700 €/an</p>
                </div>
                <div
                  style={{
                    background: "var(--color-surface-alt)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                    Régime réel
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                    Déduction des charges réelles (amortissement, travaux, assurance, intérêts d&apos;emprunt). Recommandé si vos charges dépassent l&apos;abattement forfaitaire.
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Comptabilité plus complexe, bilan annuel obligatoire</p>
                </div>
              </div>
              <div
                style={{
                  background: "var(--color-accent-light)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem 1.25rem",
                  marginTop: "1rem",
                  border: "1px solid hsl(42,65%,80%)",
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                }}
              >
                💡 <strong>Bon à savoir :</strong> si vos revenus locatifs restent inférieurs à <strong>760 €/an</strong>, vous êtes exonéré d&apos;impôt (article 35 bis du CGI).
              </div>
            </div>

            {/* 3 - Préparer son logement */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "2rem",
                alignItems: "start",
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "1", minHeight: "220px" }}>
                <Image
                  src="/images/guides-tips.jpeg"
                  alt="Checklist pour préparer sa maison à accueillir des voyageurs"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="300px"
                />
              </div>
              <div style={{ padding: "1.75rem" }}>
                <span className="badge badge-accent" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                  Étape 3 — Aménagement
                </span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--color-text)" }}>
                  Préparer son logement pour l&apos;accueil
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  Un accueil réussi commence par un espace propre, bien équipé et chaleureux. Voici la checklist essentielle :
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "Literie propre et de bonne qualité (oreillers, couette)",
                    "Serviettes de bain propres et en nombre suffisant",
                    "Produits de base en salle de bain (savon, shampoing)",
                    "Manuel d'utilisation de la maison (WiFi inclus)",
                    "Clés de secours ou boîte à clé sécurisée",
                    "Guide des restaurants et activités locales",
                    "Trousse de premiers secours facilement accessible",
                    "Extincteur et détecteur de fumée en état de marche",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                      <span style={{ color: "var(--color-secondary)", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 - Tarification */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
              }}
            >
              <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                Étape 4 — Tarification
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                Comment fixer son prix ?
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Chambre chez l'habitant (Paris)", range: "60 – 120 €/nuit" },
                  { label: "Chambre d'hôtes en région", range: "45 – 90 €/nuit" },
                  { label: "Table d'hôtes (dîner)", range: "20 – 40 €/pers." },
                  { label: "Petit-déjeuner inclus", range: "10 – 20 €/pers." },
                  { label: "Gîte rural (week-end)", range: "150 – 400 €" },
                  { label: "Supplément animal", range: "5 – 15 €/nuit" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "var(--color-surface-alt)",
                      borderRadius: "var(--radius-md)",
                      padding: "1rem",
                      border: "1px solid var(--color-border)",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.4rem" }}>
                      {item.range}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", lineHeight: 1.4 }}>{item.label}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.825rem", color: "var(--color-text-light)", marginTop: "1rem" }}>
                * Tarifs indicatifs 2024. Ajustez selon votre localisation, la saison et les équipements proposés.
              </p>
            </div>

            {/* 5 - Responsabilités */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
              }}
            >
              <span className="badge badge-secondary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                Étape 5 — Responsabilités
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                Assurances et responsabilités légales
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  {
                    icon: "🛡️",
                    title: "Assurance multirisque habitation",
                    desc: "Vérifiez que votre contrat couvre les activités de location. Beaucoup d'assureurs proposent des avenants « location saisonnière ».",
                  },
                  {
                    icon: "📜",
                    title: "Contrat de séjour",
                    desc: "Un contrat écrit (même simple) protège les deux parties. Il précise dates, prix, règles et politique d'annulation.",
                  },
                  {
                    icon: "💻",
                    title: "Garantie plateforme",
                    desc: "Airbnb (AirCover), Abritel et Booking proposent des protections hôtes allant jusqu'à 3 millions €. Lisez les conditions !",
                  },
                  {
                    icon: "⚖️",
                    title: "Dépôt de garantie",
                    desc: "Légalement autorisé. Il couvre les dommages éventuels. Remboursez-le dans les délais convenus (max. 3 mois).",
                  },
                ].map((item) => (
                  <div
                    key={item.icon}
                    style={{
                      background: "var(--color-surface-alt)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.25rem",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{item.icon}</span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.35rem", color: "var(--color-text)" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3.5rem",
              background: "var(--color-secondary)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>
                Vous êtes voyageur ?
              </h2>
              <p style={{ fontSize: "0.9rem", color: "hsla(38,30%,95%,0.85)" }}>
                Consultez notre guide complet pour préparer votre séjour chez l&apos;habitant.
              </p>
            </div>
            <Link
              href="/guides/voyageurs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#fff",
                color: "var(--color-secondary-dark)",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Guide voyageur →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
