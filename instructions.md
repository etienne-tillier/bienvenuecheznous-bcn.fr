# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `CLAUDE.md`, puis ce fichier.

---

## 1) Infos projet

- `site_name`: bienvenuecheznous-bcn.fr
- `site_domain`: bienvenuecheznous-bcn.fr
- `site_url`: https://bienvenuecheznous-bcn.fr
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): 2eff3bb3-8ed4-4321-8f75-a250d0c56fb1
- `tier` (`tier1` / `tier2`): tier1

## 2) Positionnement éditorial

- Thématique: Tourisme
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - (aucune)
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

- Bucket/source:
- Liste images hero:
- Liste images sections:
- Liste images guides/blog:
- Contraintes de ratio/poids:

## 7) Contraintes techniques

- Le code doit respecter strictement les règles de `CLAUDE.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Ok, bienvenue chez nous, c'est un site pour le tourisme donc tout ce qu'il faut savoir sur quand tu arrives à un endroit et que tu veux avoir comme des auberges et des particuliers qu'est-ce qu'il faut savoir, comment les trouver voilà est-ce que tu peux manger dedans, quels sont les endroits où tu peux trouver ce genre de location de logement, est-ce que tout est compris, est-ce que tu peux être à combien dedans, qu'est-ce que tu dois amener, est-ce que tu manges avec les gens, est-ce que tu as quoi comme indépendance, est-ce que tu as le droit de ramener tes animaux, à combien ça coûte, est-ce qu'en quoi c'est avantageux, quels sont les inconvénients, est-ce que tu dois ramener tes draps, à quel endroit en France ou dans le monde c'est disponible quel type de personne c'est, tu vois c'est ce genre de truc et enfin comment même moi je pourrais potentiellement faire comment la personne pourrait aussi louer une partie de sa maison quoi bienvenue chez nous c'est aussi ça quoi c'est accueillir, recevoir voilà

### Description générée

## Bienvenue Chez Nous - Guide Complet de l'Hébergement Participatif

**Bienvenue Chez Nous** est un site de référence dédié à l'univers de l'hébergement chez l'habitant et de l'accueil participatif. Il s'adresse aux voyageurs en quête d'authenticité et de convivialité, ainsi qu'aux particuliers souhaitant ouvrir leur foyer à des visiteurs.

## Objectif et Mission

Le site a pour mission de démystifier l'hébergement participatif en proposant des guides pratiques, des conseils d'expert et des témoignages authentiques. L'objectif est de créer une ressource complète qui répond à toutes les questions que se posent les voyageurs et les hôtes : modalités d'accueil, tarification, règles de vie commune, démarches administratives, et bonnes pratiques pour une expérience réussie.

## Public Cible

- **Voyageurs conscients** recherchant une expérience authentique et économique
- **Particuliers hôtes** souhaitant monétiser leur espace ou simplement partager
- **Familles** en recherche de solutions d'hébergement conviviales
- **Étudiants et jeunes actifs** à la recherche de logements temporaires abordables

Le site génère des revenus via l'affiliation avec les plateformes d'hébergement participatif et la promotion de services connexes (assurances, équipements, formation d'hôtes).

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Bienvenue Chez Nous
- Domaine : bienvenuecheznous-bcn.fr
- Type de site : Site de contenu éditorial avec monétisation par affiliation
- Thématiques : Tourisme, hébergement participatif, accueil chez l'habitant
- Objectif business : Génération de leads et commissions d'affiliation via plateformes d'hébergement
- Audience cible : Voyageurs en quête d'authenticité et particuliers hôtes potentiels

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : chaleureux, authentique, convivial, rassurant, accessible
- **Références visuelles mentales** : foyer avec cheminée, table familiale, maison de village, jardin partagé, cuisine ouverte, bibliothèque cosy
- **Émotions à évoquer** chez le visiteur : confiance, sentiment d'appartenance, sécurité, curiosité, envie de partage

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. S'inspirer des couleurs d'un intérieur chaleureux : tons terre cuite, beige crème, vert sauge, bois naturel
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : tons chauds orangés/terre cuite
   - Couleur secondaire (secondary) : vert sauge apaisant
   - Couleur d'accent (accent) : beige doré lumineux
   - Couleur de fond (background) : crème très clair
   - Variante hover : version plus saturée de la couleur principale
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers : Libre Baskerville ou Crimson Text pour les titres (élégance chaleureuse), Source Sans Pro ou Open Sans pour le corps de texte (lisibilité et modernité)

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Bienvenue Chez Nous - Guide de l'Hébergement Participatif"
- **Méta-description principale** pour la home : "Tout savoir sur l'hébergement chez l'habitant : conseils voyageurs, guide hôtes, tarifs, règles. Trouvez votre logement authentique ou devenez hôte."
- **Open Graph title** : "Bienvenue Chez Nous - L'hébergement participatif expliqué"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name: "Bienvenue Chez Nous", description, domain: "bienvenuecheznous-bcn.fr", navigation)
  - `app/globals.css` (créer la palette UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/guide/*`, etc.)

## 4. Contenu & structure à mettre en place

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER
Les images suivantes ont été pré-générées et sont disponibles sur le bucket R2. Télécharge-les et intègre-les dans les sections correspondantes :

**Page d'accueil :**
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-home-hero-cozy-living.jpeg
- Section voyageurs : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-home-travelers-authentic-experience.jpeg
- Section hôtes : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-home-hosts-welcoming-home.jpeg
- Section témoignages : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-home-testimonials-happy-guests.jpeg
- Section communauté : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-home-community-shared-meal.jpeg
- Section confiance : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-home-trust-handshake.jpeg

**Page guides :**
- Hero guide voyageurs : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-guides-hero-traveler-guide.jpeg
- Guide hôtes : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-guides-hosts-preparation.jpeg
- Conseils pratiques : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-guides-tips-checklist.jpeg

**Page à propos :**
- Équipe/mission : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bienvenuecheznous-bcn-about-mission-team.jpeg

- Types de contenus à garder : blog, guides pratiques, comparatifs plateformes, témoignages
- **Sections obligatoires sur la page d'accueil** (/) :
  - Hero ("Découvrez l'art de l'accueil participatif", sous-titre sur l'authenticité, CTA "Commencer votre aventure")
  - Section "Pour les voyageurs" (avantages, comment choisir, que prévoir)
  - Section "Pour les hôtes" (comment commencer, revenus potentiels, responsabilités)
  - Témoignages authentiques (voyageurs et hôtes)
  - Section communauté (partage d'expériences)
  - Bloc de confiance (sécurité, assurances, conseils légaux)
- Pages importantes : /guides/voyageurs, /guides/hotes, /plateformes, /temoignages, /blog
- Clusters thématiques : guides pratiques, comparatifs plateformes, aspects légaux, témoignages, conseils d'experts

## 5. Domaine expiré - URLs à reconstruire
- Aucune ancienne URL à reconstruire (nouveau domaine)

## 6. Consignes éditoriales
- Ton à respecter : bienveillant, expert mais accessible, rassurant, humain
- Types d'articles attendus : guides step-by-step, témoignages, comparatifs plateformes, conseils juridiques, astuces d'hôtes expérimentés
- Contraintes à éviter : promesses de revenus exagérées, minimiser les risques, ton trop commercial, jargon technique

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN="bienvenuecheznous-bcn.fr", BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec les informations du site
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- Logos adaptés au thème (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Téléchargement et intégration des images pré-générées depuis les URLs fournies
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Utiliser les mêmes polices que d'autres sites
❌ Créer un design "générique"
❌ Laisser des placeholders de couleurs dans le code final
❌ Oublier de télécharger et intégrer les images pré-générées
❌ Ton trop commercial qui ferait perdre la confiance
