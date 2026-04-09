import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide du Voyageur — Hébergement chez l'habitant : tout ce qu'il faut savoir",
  description:
    "Guide complet pour voyager chez l'habitant : comment trouver, quoi prévoir, repas, tarifs, animaux, draps et règles de vie. Tout ce que vous devez savoir avant d'arriver.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/guides/voyageurs" },
};

export default function GuideVoyageursPage() {
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
            src="/images/guides-hero.jpeg"
            alt="Voyageur découvrant un hébergement chez l'habitant"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(110deg, hsla(25,20%,12%,0.82) 0%, hsla(25,20%,12%,0.5) 60%, hsla(25,20%,12%,0.2) 100%)",
            }}
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBlock: "5rem 4rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "hsl(38,20%,60%)", textDecoration: "none", marginBottom: "1.5rem" }}>
            ← Accueil
          </Link>
          <span className="badge badge-accent" style={{ marginBottom: "1rem", display: "inline-block" }}>
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
            Guide du voyageur :<br />
            <em style={{ fontStyle: "italic", color: "hsl(42,65%,72%)" }}>héberger chez l&apos;habitant</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "hsla(38,30%,92%,0.85)", maxWidth: "50ch", lineHeight: 1.7 }}>
            Tout ce que vous devez savoir avant de réserver votre première chambre ou gîte chez l&apos;habitant.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section texture-warm">
        <div className="container" style={{ maxWidth: "900px" }}>

          {/* Intro */}
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
              Qu&apos;est-ce que l&apos;hébergement chez l&apos;habitant ?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
              L&apos;hébergement chez l&apos;habitant désigne toutes les formes d&apos;accueil où un particulier loue tout ou partie de son domicile à des voyageurs. Cela inclut les chambres d&apos;hôtes, les gîtes ruraux, les locations via Airbnb, le couchsurfing et les séjours en famille d&apos;accueil.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
              Contrairement à l&apos;hôtel, vous partagez l&apos;espace (et souvent la vie) avec vos hôtes, ce qui génère des rencontres authentiques et mémorables. C&apos;est souvent 20 à 40 % moins cher qu&apos;un hébergement hôtelier, avec une expérience humaine incomparable.
            </p>
          </div>

          {/* Sections guide */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* 1 - Comment trouver */}
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
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1",
                  minHeight: "200px",
                }}
              >
                <Image
                  src="/images/guides-tips.jpeg"
                  alt="Checklist pour trouver le bon hébergement chez l'habitant"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="300px"
                />
              </div>
              <div style={{ padding: "1.75rem" }}>
                <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>Étape 1</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--color-text)" }}>
                  Comment trouver le bon hébergement ?
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  Les plateformes principales en France sont <strong>Airbnb</strong>, <strong>Abritel</strong> (VRBO), <strong>Booking.com</strong> et <strong>Gîtes de France</strong> pour les hébergements certifiés. Pour des expériences encore plus authentiques, considérez <strong>Couchsurfing</strong> ou <strong>BeWelcome</strong>.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    "Lire attentivement les avis des voyageurs précédents",
                    "Vérifier les photos (intérieur, extérieur, salle de bain)",
                    "Consulter les règles de la maison avant de réserver",
                    "Contacter l'hôte pour poser vos questions spécifiques",
                    "Vérifier la politique d'annulation",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                      <span style={{ color: "var(--color-primary)", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2 - Quoi prévoir */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
              }}
            >
              <span className="badge badge-secondary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>Étape 2</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--color-text)" }}>
                Que faut-il apporter ?
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  {
                    icon: "🛏️",
                    title: "Draps et serviettes",
                    desc: "Les chambres d'hôtes fournissent généralement la literie. Vérifiez si les serviettes sont incluses. En gîte, apportez souvent les vôtres.",
                  },
                  {
                    icon: "🎁",
                    title: "Un petit geste de bienvenue",
                    desc: "Une bouteille de vin local, des spécialités de votre région ou un livre : ce geste est toujours très apprécié des hôtes.",
                  },
                  {
                    icon: "📄",
                    title: "Pièce d'identité",
                    desc: "Certains hôtes sont tenus de tenir un registre des voyageurs. Ayez votre passeport ou CNI à portée.",
                  },
                  {
                    icon: "💶",
                    title: "Mode de paiement",
                    desc: "Via la plateforme de réservation ou en espèces selon l'accord. Clarifiez avant votre arrivée.",
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
                    <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.6rem" }}>{item.icon}</span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--color-text)" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.825rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 - Repas */}
            <div
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
              }}
            >
              <span className="badge badge-accent" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                Repas &amp; vie commune
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                Les repas : table d&apos;hôtes, petit-déjeuner et autonomie
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  {
                    title: "Table d'hôtes",
                    desc: "Repas partagé avec l'hôte et d'autres voyageurs. Souvent sur réservation, c'est le meilleur moment pour échanger. Un vrai moment convivial !",
                    highlight: true,
                  },
                  {
                    title: "Petit-déjeuner inclus",
                    desc: "Fréquent dans les chambres d'hôtes certifiées. Produits locaux, confitures maison... c'est souvent un des points forts de l'expérience.",
                    highlight: false,
                  },
                  {
                    title: "Cuisine partagée",
                    desc: "Certains hôtes proposent l'accès à leur cuisine. Clarifiez les horaires et règles d'utilisation à l'avance pour éviter tout malentendu.",
                    highlight: false,
                  },
                  {
                    title: "Totale autonomie",
                    desc: "Dans les gîtes ou locations entières, vous avez généralement votre propre cuisine. Vous gérez vos repas en toute liberté.",
                    highlight: true,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: item.highlight ? "var(--color-primary-light)" : "var(--color-surface-alt)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.25rem",
                      border: `1px solid ${item.highlight ? "hsl(17,62%,82%)" : "var(--color-border)"}`,
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--color-text)" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.825rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 - Animaux / tarifs / règles */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  padding: "1.75rem",
                }}
              >
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>🐾</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--color-text)" }}>
                  Animaux de compagnie
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.75 }}>
                  La politique concernant les animaux varie fortement d&apos;un hôte à l&apos;autre. Vérifiez toujours l&apos;autorisation avant de réserver. Mentionnez systématiquement votre animal dans votre message initial. Certains hôtes acceptent uniquement les petits animaux, d&apos;autres refusent catégoriquement. Anticipez également les allergies potentielles.
                </p>
              </div>

              <div
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  padding: "1.75rem",
                }}
              >
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }}>💰</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--color-text)" }}>
                  Comprendre les tarifs
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.75 }}>
                  Le prix affiché inclut généralement la nuitée + petit-déjeuner en chambre d&apos;hôtes. La taxe de séjour (1€ à 4€/nuit) est parfois ajoutée. Les frais de ménage peuvent s&apos;appliquer pour les locations courte durée. La table d&apos;hôtes, elle, est toujours en supplément (15€ à 35€ par personne).
                </p>
              </div>
            </div>

            {/* Avantages / inconvénients */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "var(--color-secondary-light)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid hsl(135,18%,80%)",
                  padding: "1.75rem",
                }}
              >
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                  ✅ Les avantages
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "Expérience authentique et humaine",
                    "20 à 40 % moins cher qu'un hôtel",
                    "Conseils locaux inestimables",
                    "Repas souvent inclus ou disponibles",
                    "Atmosphère chaleureuse et familiale",
                    "Découverte de traditions locales",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-secondary)", fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: "var(--color-surface-alt)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  padding: "1.75rem",
                }}
              >
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
                  ⚠️ Les points à surveiller
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "Moins d'intimité qu'en hôtel",
                    "Règles de la maison à respecter",
                    "Heure de rentrée parfois imposée",
                    "Qualité variable selon les hôtes",
                    "Moins adapté aux voyageurs très indépendants",
                    "Animaux pas toujours autorisés",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3.5rem",
              background: "var(--color-primary)",
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
                Envie de devenir hôte à votre tour ?
              </h2>
              <p style={{ fontSize: "0.9rem", color: "hsla(38,30%,95%,0.85)" }}>
                Découvrez comment accueillir des voyageurs chez vous et générer un complément de revenus.
              </p>
            </div>
            <Link
              href="/guides/hotes"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#fff",
                color: "var(--color-primary)",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Guide de l&apos;hôte →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
