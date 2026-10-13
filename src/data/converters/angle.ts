
import type { ConverterConfig } from "../../lib/converter";

export const angleConverter: ConverterConfig = {
  id: "angle",
  slug: "winkel",
  name: "Winkelumrechner",

  description:
    "Rechne Grad, Radiant, Gon, Bogenminuten und Bogensekunden schnell und kostenlos um.",

  intro:
    "Wie viele Radiant entsprechen 90 Grad oder wie lassen sich Gon in Grad umrechnen? Mit dem Winkelumrechner kannst du verschiedene Winkeleinheiten schnell und einfach ineinander umrechnen. Wähle die Ausgangs- und Zieleinheit, gib einen Winkel ein und erhalte direkt das Ergebnis. Unterstützt werden Grad, Radiant, Gon, Bogenminuten und Bogensekunden. Der Rechner ist beispielsweise für Mathematik, Geometrie, Navigation und technische Berechnungen hilfreich.",

  seoDescription:
    "Winkelumrechner für Grad, Radiant, Gon, Bogenminuten und Bogensekunden. Winkeleinheiten schnell und kostenlos online umrechnen.",

  units: [
    { id: "degree", name: "Grad", symbol: "°", factor: 1 },
    { id: "radian", name: "Radiant", symbol: "rad", factor: 180 / Math.PI },
    { id: "gon", name: "Gon", symbol: "gon", factor: 0.9 },
    { id: "arcmin", name: "Bogenminute", symbol: "′", factor: 1 / 60 },
    { id: "arcsec", name: "Bogensekunde", symbol: "″", factor: 1 / 3600 },
  ],
};
