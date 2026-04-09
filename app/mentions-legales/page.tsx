import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Bienvenue Chez Nous",
  description:
    "Mentions légales du site bienvenuecheznous-bcn.fr : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section style={{ background: "hsl(25,20%,16%)", padding: "3.5rem 0 2.5rem" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            Mentions légales
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 0 6rem", background: "var(--color-bg)" }}>
        <div
          className="container prose prose-custom max-w-none"
          style={{ maxWidth: "760px" }}
        >
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>bienvenuecheznous-bcn.fr</strong> est édité par :<br />
            <strong>Bienvenue Chez Nous</strong><br />
            Entreprise individuelle<br />
            Siège social : France<br />
            Email : <a href="mailto:contact@bienvenuecheznous-bcn.fr">contact@bienvenuecheznous-bcn.fr</a>
          </p>
          <p>
            Directeur de la publication : <strong>Marie-Laure Fontaine</strong>
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis<br />
            Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de <strong>Bienvenue Chez Nous</strong>, sauf mention contraire explicite.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l&apos;accord express et écrit de l&apos;éditeur.
          </p>
          <p>
            Les images provenant de sources tierces (plateformes d&apos;images libres de droits, Cloudflare R2) sont utilisées conformément aux licences applicables.
          </p>

          <h2>4. Responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont données à titre indicatif et général. L&apos;éditeur ne saurait être tenu responsable des erreurs ou omissions, de l&apos;indisponibilité du service, ni des dommages directs ou indirects causés à l&apos;utilisateur.
          </p>
          <p>
            Les liens hypertextes vers des sites externes n&apos;engagent pas la responsabilité de l&apos;éditeur quant au contenu de ces sites.
          </p>

          <h2>5. Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire tiers n&apos;est déposé sans le consentement de l&apos;utilisateur. Pour en savoir plus, consultez notre <Link href="/politique-confidentialite">politique de confidentialité</Link>.
          </p>

          <h2>7. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous pouvez nous écrire à :<br />
            <a href="mailto:contact@bienvenuecheznous-bcn.fr">contact@bienvenuecheznous-bcn.fr</a>
          </p>

          <p style={{ fontSize: "0.825rem", color: "var(--color-text-light)", marginTop: "3rem", borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
            Dernière mise à jour : avril 2024
          </p>
        </div>
      </section>
    </>
  );
}
