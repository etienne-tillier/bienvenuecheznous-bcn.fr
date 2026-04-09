import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Bienvenue Chez Nous",
  description:
    "Politique de confidentialité du site bienvenuecheznous-bcn.fr : données collectées, droits des utilisateurs, contact DPO et gestion des cookies.",
  alternates: { canonical: "https://bienvenuecheznous-bcn.fr/politique-confidentialite" },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
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
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 0 6rem", background: "var(--color-bg)" }}>
        <div
          className="container prose prose-custom max-w-none"
          style={{ maxWidth: "760px" }}
        >
          <p>
            La présente politique de confidentialité décrit comment <strong>Bienvenue Chez Nous</strong> (ci-après «&nbsp;le Site&nbsp;») collecte, utilise et protège les données à caractère personnel de ses utilisateurs, conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi française Informatique et Libertés.
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            <strong>Bienvenue Chez Nous</strong> — Marie-Laure Fontaine<br />
            Contact DPO / RGPD : <a href="mailto:contact@bienvenuecheznous-bcn.fr">contact@bienvenuecheznous-bcn.fr</a>
          </p>

          <h2>2. Données collectées</h2>
          <p>Le Site collecte les catégories de données suivantes :</p>
          <ul>
            <li><strong>Données de navigation</strong> : adresse IP, pages visitées, durée de session, navigateur utilisé (via journaux serveur Vercel — conservation 30 jours).</li>
            <li><strong>Données de contact</strong> : adresse email et contenu des messages envoyés via notre adresse de contact (traitement sur la base de votre consentement explicite).</li>
            <li><strong>Cookies techniques</strong> : indispensables au bon fonctionnement du Site (session, préférences de langue). Aucun cookie publicitaire ou de tracking comportemental tiers n&apos;est déposé sans consentement.</li>
          </ul>

          <h2>3. Finalités et bases légales du traitement</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ background: "var(--color-surface-alt)" }}>
                <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", border: "1px solid var(--color-border)" }}>Finalité</th>
                <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", border: "1px solid var(--color-border)" }}>Base légale</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fonctionnement technique du Site", "Intérêt légitime (art. 6.1.f)"],
                ["Réponse aux demandes de contact", "Consentement (art. 6.1.a)"],
                ["Amélioration du service (analytics)", "Intérêt légitime (art. 6.1.f)"],
                ["Sécurité et prévention des fraudes", "Obligation légale (art. 6.1.c)"],
              ].map(([fin, base]) => (
                <tr key={fin}>
                  <td style={{ padding: "0.6rem 0.75rem", border: "1px solid var(--color-border)" }}>{fin}</td>
                  <td style={{ padding: "0.6rem 0.75rem", border: "1px solid var(--color-border)" }}>{base}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>4. Durée de conservation</h2>
          <ul>
            <li><strong>Journaux serveur</strong> : 30 jours glissants</li>
            <li><strong>Emails de contact</strong> : 3 ans à compter du dernier échange</li>
            <li><strong>Cookies techniques</strong> : durée de session navigateur</li>
          </ul>

          <h2>5. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> (art. 15 RGPD) — obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> (art. 16 RGPD) — corriger des données inexactes</li>
            <li><strong>Droit à l&apos;effacement</strong> (art. 17 RGPD) — demander la suppression de vos données</li>
            <li><strong>Droit d&apos;opposition</strong> (art. 21 RGPD) — vous opposer à certains traitements</li>
            <li><strong>Droit à la portabilité</strong> (art. 20 RGPD) — recevoir vos données dans un format structuré</li>
            <li><strong>Droit de retirer votre consentement</strong> à tout moment, sans effet rétroactif</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez notre DPO à :{" "}
            <a href="mailto:contact@bienvenuecheznous-bcn.fr">contact@bienvenuecheznous-bcn.fr</a>.
            En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
          </p>

          <h2>6. Transferts de données hors UE</h2>
          <p>
            Le site est hébergé sur Vercel Inc. (États-Unis). Ce transfert est encadré par les{" "}
            <strong>Clauses Contractuelles Types</strong> de la Commission européenne et le cadre
            Trans-Atlantic Data Privacy Framework.
          </p>

          <h2>7. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement TLS/HTTPS, accès restreint, journaux d&apos;audit.
          </p>

          <h2>8. Gestion des cookies</h2>
          <p>
            Vous pouvez paramétrer votre navigateur pour refuser tous les cookies ou être averti de leur dépôt. Notez que certains cookies techniques sont indispensables au bon fonctionnement du Site.
          </p>

          <h2>9. Liens externes</h2>
          <p>
            Le Site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de la politique de confidentialité de ces sites et vous invitons à la consulter avant de leur communiquer des données.
          </p>

          <h2>10. Modifications</h2>
          <p>
            La présente politique peut être mise à jour à tout moment. La date de dernière mise à jour figure en bas de page. Nous vous invitons à la consulter régulièrement.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)",
              flexWrap: "wrap",
            }}
          >
            <Link href="/mentions-legales" className="btn-ghost" style={{ fontSize: "0.875rem" }}>
              Mentions légales
            </Link>
            <Link href="/contact" className="btn-ghost" style={{ fontSize: "0.875rem" }}>
              Nous contacter
            </Link>
          </div>

          <p style={{ fontSize: "0.825rem", color: "var(--color-text-light)", marginTop: "1.5rem" }}>
            Dernière mise à jour : avril 2024
          </p>
        </div>
      </section>
    </>
  );
}
