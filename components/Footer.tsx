import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "hsl(25, 20%, 16%)",
        color: "hsl(38, 30%, 80%)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        {/* Grille principale */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Colonne marque */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: "2rem",
                  height: "2rem",
                  background: "var(--color-primary)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <polygon points="2,10 10,2 18,10" fill="hsl(42,65%,82%)" />
                  <rect x="4.5" y="10" width="11" height="8" rx="1" fill="white" />
                  <rect x="8" y="13" width="4" height="5" rx="1" fill="hsl(17,62%,52%)" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1.05rem", color: "#fff" }}>
                Bienvenue Chez Nous
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "28ch", color: "hsl(38, 20%, 65%)" }}>
              Le guide de référence pour l&apos;hébergement participatif : conseils voyageurs, guide hôtes et ressources pratiques.
            </p>
            <p style={{ marginTop: "1.25rem", fontSize: "0.825rem", color: "hsl(38, 15%, 55%)" }}>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                style={{ color: "var(--color-accent)", textDecoration: "none" }}
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
              Nos guides
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li>
                <Link href="/guides/voyageurs" style={{ fontSize: "0.875rem", color: "hsl(38, 20%, 65%)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link">
                  Guide du voyageur
                </Link>
              </li>
              <li>
                <Link href="/guides/hotes" style={{ fontSize: "0.875rem", color: "hsl(38, 20%, 65%)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link">
                  Guide de l&apos;hôte
                </Link>
              </li>
              <li>
                <Link href="/blog" style={{ fontSize: "0.875rem", color: "hsl(38, 20%, 65%)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link">
                  Tous nos articles
                </Link>
              </li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
              À propos
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li>
                <Link href="/a-propos" style={{ fontSize: "0.875rem", color: "hsl(38, 20%, 65%)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ fontSize: "0.875rem", color: "hsl(38, 20%, 65%)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
              Informations légales
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ fontSize: "0.875rem", color: "hsl(38, 20%, 65%)", textDecoration: "none", transition: "color 0.2s" }}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barre inférieure */}
        <div
          style={{
            borderTop: "1px solid hsl(25, 15%, 25%)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "hsl(38, 15%, 48%)", margin: 0 }}>
            © {currentYear} Bienvenue Chez Nous — bienvenuecheznous-bcn.fr. Tous droits réservés.
          </p>
          <p style={{ fontSize: "0.8rem", color: "hsl(38, 15%, 40%)", margin: 0 }}>
            Site de référence sur l&apos;hébergement participatif en France
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--color-accent) !important; }
      `}</style>
    </footer>
  );
}
