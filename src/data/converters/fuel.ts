import type { ConverterConfig } from "../../lib/converter";

export const fuelConverter: ConverterConfig = {
  id: "fuel",
  slug: "kraftstoffverbrauch",
  name: "Kraftstoffverbrauch-Umrechner",
  description:
    "Kraftstoffverbrauch schnell und kostenlos zwischen Liter pro 100 Kilometer, Kilometer pro Liter sowie US- und UK-Meilen pro Gallone umrechnen.",
  intro:
    "Mit unserem Kraftstoffverbrauch-Umrechner kannst du Verbrauchswerte schnell und einfach zwischen verschiedenen Verbrauchseinheiten umrechnen.",
  seoDescription:
    "Kraftstoffverbrauch-Umrechner für l/100 km, km/l, mpg US und mpg UK. Schnell, kostenlos und einfach online umrechnen.",
  type: "fuel",
  units: [
    {
      id: "l100km",
      name: "Liter pro 100 Kilometer",
      symbol: "l/100 km",
      factor: 100,
    },
    {
      id: "kmpl",
      name: "Kilometer pro Liter",
      symbol: "km/l",
      factor: 1,
    },
    {
      id: "mpgus",
      name: "Meilen pro Gallone (US)",
      symbol: "mpg US",
      factor: 0.425143707,
    },
    {
      id: "mpguk",
      name: "Meilen pro Gallone (UK)",
      symbol: "mpg UK",
      factor: 0.354006189,
    },
  ],
};