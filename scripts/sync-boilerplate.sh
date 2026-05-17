#!/usr/bin/env bash
# sync-boilerplate.sh
# Synchronise les fichiers de config depuis boby-boilerplate vers ce projet.
# À lancer depuis la racine du projet à synchroniser.
#
# Usage :
#   ./scripts/sync-boilerplate.sh           # branche main
#   BRANCH=feat/xxx ./scripts/sync-boilerplate.sh  # branche custom

set -euo pipefail

REPO="bobywan/boby-boilerplate"
BRANCH="${BRANCH:-main}"
BASE_URL="https://raw.githubusercontent.com/${REPO}/${BRANCH}"

# ─────────────────────────────────────────────────────────────────────────────
# Fichiers synchronisés depuis le boilerplate.
# Ajoute ou retire des lignes selon les besoins du projet.
# ─────────────────────────────────────────────────────────────────────────────
files=(
  "biome.json"
  "tsconfig.json"
  ".nvmrc"
  ".github/workflows/ci.yml"
  ".vscode/settings.json"
  ".vscode/extensions.json"
  ".cursor/rules/project-stack.mdc"
  ".cursor/rules/nextjs-app-router.mdc"
  ".cursor/rules/typescript-react.mdc"
  ".cursor/rules/tailwind.mdc"
  ".cursor/skills/boilerplate-conventions/SKILL.md"
  "scripts/dev-start.mjs"
  "scripts/init-project.sh"
  "scripts/sync-boilerplate.sh"
)

# ─────────────────────────────────────────────────────────────────────────────
# Couleurs
# ─────────────────────────────────────────────────────────────────────────────
reset="\033[0m"
bold="\033[1m"
green="\033[32m"
yellow="\033[33m"
red="\033[31m"
dim="\033[2m"

echo ""
echo -e "${bold}  Sync depuis ${yellow}${REPO}${reset}${bold} (${BRANCH})${reset}"
echo ""

errors=0

for file in "${files[@]}"; do
  dir="$(dirname "$file")"
  if [ "$dir" != "." ]; then
    mkdir -p "$dir"
  fi

  url="${BASE_URL}/${file}"
  if curl -fsSL "$url" -o "$file" 2>/dev/null; then
    echo -e "  ${green}✓${reset} ${file}"
  else
    echo -e "  ${red}✗${reset} ${file} ${dim}(erreur — vérifie que le fichier existe sur ${BRANCH})${dim}"
    errors=$((errors + 1))
  fi
done

echo ""

# ─────────────────────────────────────────────────────────────────────────────
# Fichier .code-workspace — téléchargé et renommé selon le projet courant
# ─────────────────────────────────────────────────────────────────────────────
project_name="$(basename "$PWD")"
workspace_target="${project_name}.code-workspace"

if curl -fsSL "${BASE_URL}/boby-boilerplate.code-workspace" -o "$workspace_target" 2>/dev/null; then
  # Supprimer les éventuels anciens fichiers .code-workspace avec un autre nom
  for old_ws in ./*.code-workspace; do
    [ "$old_ws" = "./${workspace_target}" ] && continue
    rm -f "$old_ws"
    echo -e "  ${dim}~${reset} ${old_ws#./} supprimé (remplacé)"
  done
  echo -e "  ${green}✓${reset} ${workspace_target}"
else
  echo -e "  ${red}✗${reset} .code-workspace ${dim}(erreur de téléchargement)${dim}"
  errors=$((errors + 1))
fi

echo ""

# ─────────────────────────────────────────────────────────────────────────────
# Merge des scripts boilerplate dans package.json local
# ─────────────────────────────────────────────────────────────────────────────
if [ -f "package.json" ] && command -v node &>/dev/null; then
  tmp_pkg="$(mktemp)"
  if curl -fsSL "${BASE_URL}/package.json" -o "$tmp_pkg" 2>/dev/null; then
    node - "$tmp_pkg" <<'EOF'
const fs = require("fs");
const [,, remotePath] = process.argv;
const local = JSON.parse(fs.readFileSync("package.json", "utf8"));
const remote = JSON.parse(fs.readFileSync(remotePath, "utf8"));
const merged = { ...local, scripts: { ...local.scripts, ...remote.scripts } };
fs.writeFileSync("package.json", JSON.stringify(merged, null, 2) + "\n");
EOF
    echo -e "  ${green}✓${reset} package.json : scripts mis à jour"
  else
    echo -e "  ${yellow}!${reset} package.json : impossible de récupérer le package.json distant"
  fi
  rm -f "$tmp_pkg"
fi

echo ""

if [ "$errors" -eq 0 ]; then
  echo -e "  ${bold}Sync terminé.${reset} Pense à relancer ${yellow}npm install${reset} si les configs ont changé."
else
  echo -e "  ${bold}Sync terminé avec ${red}${errors} erreur(s)${reset}. Vérifie les fichiers marqués ✗."
fi

echo ""
