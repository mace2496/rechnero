import type { ConverterConfig } from "../../lib/converter";

export const powerConverter: ConverterConfig = {
  id: "power",
  slug: "leistung",
  name: "Leistungsumrechner",
  description:
    "Leistung schnell und kostenlos zwischen Watt, Kilowatt, Megawatt, PS und BTU pro Stunde umrechnen.",
  intro:
    "Mit unserem Leistungsumrechner kannst du Leistungen schnell und einfach zwischen verschiedenen Leistungseinheiten umrechnen.",
  seoDescription:
    "Leistungsumrechner für Watt, Kilowatt, Megawatt, PS und BTU pro Stunde. Schnell, kostenlos und einfach online umrechnen.",
  units: [
    { id: "w", name: "Watt", symbol: "W", factor: 1 },
    { id: "kw", name: "Kilowatt", symbol: "kW", factor: 1000 },
    { id: "mw", name: "Megawatt", symbol: "MW", factor: 1000000 },
    { id: "ps", name: "Pferdestärke", symbol: "PS", factor: 735.49875 },
    { id: "btu", name: "BTU pro Stunde", symbol: "BTU/h", factor: 0.29307107 },
  ],
};