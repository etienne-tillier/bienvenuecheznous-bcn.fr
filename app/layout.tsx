import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE_NAME = "Bienvenue Chez Nous";
const SITE_DESCRIPTION =
  "Tout savoir sur l'hébergement chez l'habitant : conseils voyageurs, guide hôtes, tarifs, règles. Trouvez votre logement authentique ou devenez hôte.";
const SITE_URL = "https://bienvenuecheznous-bcn.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Guide de l'Hébergement Participatif`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - L'hébergement participatif expliqué`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - L'hébergement participatif expliqué`,
    description: SITE_DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1, paddingTop: "4.5rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
