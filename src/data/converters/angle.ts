import type { ConverterConfig } from "../../lib/converter";

export const angleConverter: ConverterConfig = {
  id: "angle",
  slug: "winkel",
  name: "Winkelumrechner",
  description:
    "Winkel schnell und kostenlos zwischen Grad, Radiant, Gon, Bogenminute und Bogensekunde umrechnen.",
  intro:
    "Mit unserem Winkelumrechner kannst du Winkel schnell und einfach zwischen verschiedenen Winkeleinheiten umrechnen.",
  seoDescription:
    "Winkelumrechner für Grad, Radiant, Gon, Bogenminute und Bogensekunde. Schnell, kostenlos und einfach online umrechnen.",
  units: [
    { id: "degree", name: "Grad", symbol: "°", factor: 1 },
    { id: "radian", name: "Radiant", symbol: "rad", factor: 180 / Math.PI },
    { id: "gon", name: "Gon", symbol: "gon", factor: 0.9 },
    { id: "arcmin", name: "Bogenminute", symbol: "′", factor: 1 / 60 },
    { id: "arcsec", name: "Bogensekunde", symbol: "″", factor: 1 / 3600 },
  ],
};