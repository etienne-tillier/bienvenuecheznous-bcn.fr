import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Bienvenue Chez Nous",
  description:
    "Contactez l'équipe de Bienvenue Chez Nous pour toute question sur l'hébergement participatif, un partenariat ou une collaboration éditoriale.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "hsl(25,20%,16%)",
          padding: "4rem 0 3rem",
        }}
      >
        <div className="container" style={{ maxWidth: "760px" }}>
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
            Nous contacter
          </h1>
          <p style={{ fontSize: "1.05rem", color: "hsl(38,20%,60%)", maxWidth: "50ch", lineHeight: 1.7 }}>
            Une question sur l&apos;hébergement participatif, un partenariat ou une suggestion éditoriale ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="section texture-warm">
        <div className="container" style={{ maxWidth: "760px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {/* Email principal */}
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>✉️</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Adresse email
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1rem", lineHeight: 1.6 }}>
                Pour toute question générale, conseil ou demande d&apos;information.
              </p>
              <a
                href="mailto:contact@bienvenuecheznous-bcn.fr"
                style={{
                  display: "inline-block",
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "0.6rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  wordBreak: "break-all",
                  transition: "background 0.2s ease",
                }}
              >
                contact@bienvenuecheznous-bcn.fr
              </a>
            </div>

            {/* Partenariats */}
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>🤝</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Partenariats &amp; affiliation
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1rem", lineHeight: 1.6 }}>
                Plateformes, assurances, services aux hôtes : proposez un partenariat éditorial.
              </p>
              <a
                href="mailto:contact@bienvenuecheznous-bcn.fr?subject=Partenariat"
                style={{
                  display: "inline-block",
                  background: "var(--color-secondary-light)",
                  color: "var(--color-secondary-dark)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "0.6rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
              >
                Écrire pour un partenariat
              </a>
            </div>
          </div>

          {/* Bloc éditorial */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              marginBottom: "2rem",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem", color: "var(--color-text)" }}>
              Un sujet à nous soumettre ?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Nous accueillons volontiers les témoignages de voyageurs et d&apos;hôtes expérimentés, les retours d&apos;expérience sur des plateformes, ou les propositions de guides pratiques sur les thèmes suivants :
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
              {[
                "🏡 Accueil chez l'habitant",
                "🧳 Conseils de voyageurs",
                "💶 Tarifs et fiscalité hôtes",
                "⚖️ Aspects juridiques",
                "🌍 Hébergement à l'étranger",
                "📱 Comparatifs de plateformes",
              ].map((item) => (
                <li key={item} style={{ fontSize: "0.875rem", color: "var(--color-text)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              Envoyez votre proposition à{" "}
              <a
                href="mailto:contact@bienvenuecheznous-bcn.fr?subject=Proposition éditoriale"
                style={{ color: "var(--color-primary)", fontWeight: 600, textDecoration: "underline" }}
              >
                contact@bienvenuecheznous-bcn.fr
              </a>{" "}
              avec pour objet <strong>«&nbsp;Proposition éditoriale&nbsp;»</strong>.
            </p>
          </div>

          {/* Délai de réponse */}
          <div
            style={{
              background: "var(--color-accent-light)",
              border: "1px solid hsl(42,65%,80%)",
              borderRadius: "var(--radius-md)",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: "0.1rem" }}>⏱️</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "0.2rem" }}>
                Délai de réponse habituel : 48&nbsp;h ouvrées
              </p>
              <p style={{ fontSize: "0.825rem", color: "var(--color-text-muted)" }}>
                Nous lisons tous les messages et répondons personnellement à chaque demande sérieuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
