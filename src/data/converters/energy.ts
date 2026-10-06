import type { ConverterConfig } from "../../lib/converter";

export const energyConverter: ConverterConfig = {
  id: "energy",
  slug: "energie",
  name: "Energieumrechner",
  description:
    "Energie schnell und kostenlos zwischen Joule, Kilojoule, Wattstunden, Kilowattstunden, Kalorien und Kilokalorien umrechnen.",
  intro:
    "Mit unserem Energieumrechner kannst du Energie schnell und einfach zwischen verschiedenen Energieeinheiten umrechnen.",
  seoDescription:
    "Energieumrechner für Joule, Kilojoule, Wattstunden, Kilowattstunden, Kalorien und Kilokalorien. Schnell, kostenlos und einfach online umrechnen.",
  units: [
    { id: "j", name: "Joule", symbol: "J", factor: 1 },
    { id: "kj", name: "Kilojoule", symbol: "kJ", factor: 1000 },
    { id: "wh", name: "Wattstunde", symbol: "Wh", factor: 3600 },
    { id: "kwh", name: "Kilowattstunde", symbol: "kWh", factor: 3600000 },
    { id: "cal", name: "Kalorie", symbol: "cal", factor: 4.184 },
    { id: "kcal", name: "Kilokalorie", symbol: "kcal", factor: 4184 },
  ],
};