"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";

type SearchHelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type HelpRow = {
  example: string;
  description: string;
};

const TEXT_EXAMPLES: HelpRow[] = [
  { example: "bulbizarre", description: "Recherche par nom" },
  { example: "007", description: "Recherche par numéro" },
  { example: "forêt", description: "Par habitat (forêt, mer, caverne…)" },
  { example: "rouge", description: "Par couleur du Pokémon" },
  { example: "feu", description: "Par type (Feu, Eau, Plante…)" },
  { example: "base", description: "Par stade (base, évolution…)" },
];

const NUMERIC_EXAMPLES: HelpRow[] = [
  { example: "poids>50", description: "Poids supérieur à 50 kg" },
  { example: "poids<=10", description: "Poids inférieur ou égal à 10 kg" },
  { example: "taille<0.5", description: "Taille inférieure à 0,5 m" },
  { example: "taille>=2", description: "Taille de 2 m ou plus" },
  { example: "hp>100", description: "Points de vie supérieurs à 100" },
  { example: "atk>100", description: "Attaque supérieure à 100" },
  { example: "def>=100", description: "Défense supérieure ou égale à 100" },
  { example: "vit<50", description: "Vitesse inférieure à 50" },
];

const COMBO_EXAMPLES: HelpRow[] = [
  { example: "forêt poids>30", description: "Pokémon de forêt pesant plus de 30 kg" },
  { example: "base hp>80", description: "Formes de base avec plus de 80 PV" },
  { example: "taille<1 vit>80", description: "Petits Pokémon très rapides" },
];

function HelpTable({ rows }: { rows: HelpRow[] }) {
  return (
    <div className="space-y-1.5">
      {rows.map((row) => (
        <div key={row.example} className="flex items-baseline gap-3">
          <code className="shrink-0 rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[11px] font-semibold text-brand">
            {row.example}
          </code>
          <span className="text-xs text-text-secondary">{row.description}</span>
        </div>
      ))}
    </div>
  );
}

export function SearchHelpModal({ isOpen, onClose }: SearchHelpModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Aide à la recherche"
    >
      {/* Overlay */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer"
      />

      {/* Panel */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-card bg-surface shadow-card-hover",
          "max-h-[85vh] overflow-y-auto",
        )}
      >
        {/* En-tête */}
        <div className="sticky top-0 flex items-center justify-between rounded-t-card border-b border-surface-border bg-surface px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔍</span>
            <h2 className="font-bold text-text-primary">Aide à la recherche</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full text-text-muted transition hover:bg-surface-muted hover:text-text-primary"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6 px-5 py-5">
          {/* Intro */}
          <p className="text-xs leading-relaxed text-text-secondary">
            La barre de recherche comprend <strong>plusieurs mots simultanément</strong> — chaque
            mot est un filtre supplémentaire (logique ET). Vous pouvez combiner texte et opérateurs
            numériques librement.
          </p>

          {/* Recherche textuelle */}
          <section>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-text-muted">
              Recherche textuelle
            </h3>
            <HelpTable rows={TEXT_EXAMPLES} />
          </section>

          {/* Opérateurs numériques */}
          <section>
            <h3 className="mb-1 text-[11px] font-bold uppercase tracking-wider text-text-muted">
              Opérateurs numériques
            </h3>
            <p className="mb-3 text-[10px] text-text-muted">
              Opérateurs disponibles : <code className="font-mono">&gt; &lt; &gt;= &lt;= =</code>
            </p>
            <HelpTable rows={NUMERIC_EXAMPLES} />
          </section>

          {/* Combinaisons */}
          <section>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-text-muted">
              Combinaisons (séparer par un espace)
            </h3>
            <HelpTable rows={COMBO_EXAMPLES} />
          </section>

          <button type="button" onClick={onClose} className="btn-primary w-full justify-center">
            Compris !
          </button>
        </div>
      </div>
    </div>
  );
}
