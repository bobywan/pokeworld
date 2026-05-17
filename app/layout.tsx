import type { Metadata, Viewport } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Pokédex de Boby & Fils",
  description:
    "Pokédex complet des 151 Pokémon de la région de Kanto (Rouge & Bleu). Recherche avancée, filtres par type, stats et infos détaillées.",
  appleWebApp: {
    capable: true,
    title: "Pokédex Kanto",
    statusBarStyle: "default",
  },
  icons: {
    icon: [{ url: "/pokeball.svg", type: "image/svg+xml" }],
    apple: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e63946",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${pressStart2P.variable}`}>
      <body>{children}</body>
    </html>
  );
}
