# Le Pokédex de Boby & Fils

Pokédex complet de la région de Kanto (151 Pokémon), construit avec React + TypeScript et déployé sur Vercel.

## Fonctionnalités

- **151 Pokémon** Kanto avec images officielles (PokéAPI)
- Chaque carte affiche : nom (FR), types, habitat, couleur, stade d'évolution, hauteur, poids, et les 6 stats
- Recherche par nom ou numéro
- Filtrage par type (18 types)
- Impression optimisée (bouton "Imprimer")
- Chargement progressif par batches avec barre de progression

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/) pour les données
- [Vercel](https://vercel.com/) pour l'hébergement

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

## Déploiement

Le déploiement est automatique via GitHub Actions : chaque push sur `master` déclenche un build + déploiement en production sur Vercel.

### Configurer les secrets GitHub

Aller dans **Settings → Secrets and variables → Actions** du repo et ajouter :

| Secret | Comment l'obtenir |
|---|---|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Lancer `vercel link` → fichier `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Lancer `vercel link` → fichier `.vercel/project.json` |

```bash
# Installer le CLI Vercel
npm i -g vercel

# Lier le projet (récupère org_id et project_id)
vercel link
cat .vercel/project.json
```

## Crédits

Données fournies par [PokéAPI](https://pokeapi.co/) · Pokémon © Nintendo / Game Freak
